import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { USER_BY_GITHUB_ID_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';

// @ts-ignore
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      // @ts-ignore
      user: { name, email, image },
      // @ts-ignore
      profile: { id, login, bio },
    }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(USER_BY_GITHUB_ID_QUERY, {
          id,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: 'user',
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || '',
        });
      }

      return true;
    },

    // @ts-ignore
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(USER_BY_GITHUB_ID_QUERY, {
            id: profile?.id,
          });

        token.id = user?._id;
      }

      return token;
    },

    // @ts-ignore
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
