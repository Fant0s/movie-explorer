import React from 'react';
import styles from './Header.module.sass';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import { auth, signIn, signOut } from '@/auth';

const Header = async () => {
  const session = await auth();

  return (
    <header className={styles.header}>
      <ThemeSwitcher />
      {session && session.user ? (
        <>
          {session.user.name}{' '}
          <form
            action={async () => {
              'use server';

              await signOut();
            }}
          >
            <button type={'submit'}>Логаут</button>
          </form>
        </>
      ) : (
        <>
          <form
            action={async () => {
              'use server';

              await signIn('github');
            }}
          >
            <button type={'submit'}>Логин</button>
          </form>
        </>
      )}
    </header>
  );
};

export default Header;
