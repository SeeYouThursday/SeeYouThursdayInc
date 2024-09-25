import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer, { FooterProps } from '../components/ui/Footer/footer';
import Nav from '@/components/ui/Nav';
import { NextUIProvider } from '@nextui-org/react';
import { Providers } from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import { Poppins } from 'next/font/google';
import { vollkorn } from '@/app/fonts';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'SeeYouThursday Web Dev',
  description:
    'SeeYouThursdays Web Dev: Creating innovative, high-quality web solutions tailored to your needs. Our passionate team of experts delivers exceptional websites, applications, and digital experiences.',
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const links = [
  { url: '/#mission', title: 'About Us', id: '1' },
  { url: '/#services', title: 'Service', id: '2' },
  { url: '/#contact', title: 'Contact', id: '3' },
  { url: '/terms', title: 'Terms', id: '4' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${vollkorn.variable}`}>
        <ClerkProvider>
          <NextUIProvider>
            <Providers>
              <Nav />
              {children}
              <ScrollToTopButton />
              <Footer links={links} />
            </Providers>
          </NextUIProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

export type { FooterProps };
