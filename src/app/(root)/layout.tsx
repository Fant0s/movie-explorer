import type { Metadata } from 'next';
import '@/assets/styles/vars.sass';
import '@/assets/styles/index.sass';
import { Providers } from '@/providers/Providers';
import React from 'react';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import Header from '@components/Header/Header';

export const metadata: Metadata = {
  title: 'Movie Explorer',
  description: 'Explore movies',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <div className='layout'>
            <Header />
            <div className='page'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
