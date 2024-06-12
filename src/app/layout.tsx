import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/ui/Footer/footer';
import Nav from '@/components/ui/Nav';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SeeYouThursday Web Dev',
  description: 'SeeYouThursday Web Development',
};

const links = [
  { url: 'www.github.com/SeeYouThursday', title: 'Github', id: '1' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Nav />
          {children}
          <Footer links={links} />
        </NextUIProvider>
      </body>
    </html>
  );
}
