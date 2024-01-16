import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from './head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linear-V2',
  description: 'Rebuild of linear in nextjs14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
