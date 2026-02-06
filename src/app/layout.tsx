import type { Metadata } from 'next';

import './globals.css';

import { Bricolage_Grotesque, Syne } from 'next/font/google';

import { cn } from '@/lib/utils';

import Navbar from '@/components/navbar';

import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Creative Web Design Solutions | SugarByte Studio',
};

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-brico',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={cn('antialiased', brico.variable, syne.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
