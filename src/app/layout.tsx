import type { Metadata } from 'next';

import './globals.css';

import Navbar from '@/components/navbar';

import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Creative Web Design Solutions | SugarByte Studio',
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
