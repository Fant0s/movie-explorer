import type { Metadata } from 'next';
import '@/assets/styles/vars.sass';
import '@/assets/styles/index.sass';
import React from 'react';

export const metadata: Metadata = {
  title: 'Movie Explorer',
  description: 'Explore movies',
};

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
