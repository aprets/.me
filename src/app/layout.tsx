import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { Navbar } from '@/components/navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Artur Prets',
    template: 'Artur Prets | %s',
  },
  description: 'Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security',
  openGraph: {
    title: 'Artur Prets',
    description: 'Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security',
    url: 'https://aprets.me',
    siteName: 'Artur Prets',
    images: [
      {
        url: 'https://aprets.me/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Artur Prets',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${inter.className} max-w-[1320px] px-4 mx-auto`}>
      <Navbar
        links={[
          { label: 'Home', url: '/' },
          { label: 'Benchmark', url: '/benchmark' },
        ]}
      />
      {children}
    </body>
  </html>
);

export default RootLayout;
