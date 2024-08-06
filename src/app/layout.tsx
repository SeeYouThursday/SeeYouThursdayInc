import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer, { FooterProps } from '../components/ui/Footer/footer';
import Nav from '@/components/ui/Nav';
import { NextUIProvider } from '@nextui-org/react';
import { Providers } from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SeeYouThursday Web Dev',
  description:
    'SeeYouThursdays Web Dev: Creating innovative, high-quality web solutions tailored to your needs. Our passionate team of experts delivers exceptional websites, applications, and digital experiences.',
  robots: {
    follow: true,
    index: true,
  },
};

const links = [
  { url: '/#mission', title: 'About us', id: '1' },
  { url: '/#services', title: 'Service', id: '2' },
  { url: '/#contact', title: 'Contact', id: '3' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <ClerkProvider>
          <NextUIProvider>
            <Providers>
              <Nav />
              {children}
              <Footer links={links} />
            </Providers>
          </NextUIProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

export type { FooterProps };
