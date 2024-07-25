import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer, { FooterProps } from '../components/ui/Footer/footer';
import Nav from '@/components/ui/Nav';
import { NextUIProvider } from '@nextui-org/react';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SeeYouThursday Web Dev',
  description: 'SeeYouThursday Web Development',
};

const links = [
  { url: '/about', title: 'About us', id: '1' },
  { url: '/services', title: 'Service', id: '2' },
  { url: '/contact', title: 'Contact', id: '3' },
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
          <Providers>
            <Nav location="home" />
            {children}
            <Footer links={links} />
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}

export type { FooterProps };
