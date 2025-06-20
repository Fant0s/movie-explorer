import React from 'react';

export const metadata = {
  title: 'Movie Explorer Studio',
  description: 'Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
