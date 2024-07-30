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
  description: 'SeeYouThursdays Web Dev: Creating innovative, high-quality web solutions tailored to your needs. Our passionate team of experts delivers exceptional websites, applications, and digital experiences.',
};

const links = [
  { url: '/#mission', title: 'About us', id: '1' },
  { url: '/#services', title: 'Service', id: '2' },
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
            <Nav />
            {children}
            <Footer links={links} />
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}

export type { FooterProps };
