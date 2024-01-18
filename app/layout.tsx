import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
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
      <body>
        <div>
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
