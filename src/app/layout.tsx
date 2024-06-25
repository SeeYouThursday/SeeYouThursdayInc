import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/ui/Footer/footer';
import Nav from '@/components/ui/Nav';
import { NextUIProvider } from '@nextui-org/react';
import { Providers } from './providers';

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
