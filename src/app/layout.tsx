import { Inter } from 'next/font/google';

import { Navbar } from '@/components/navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Artur Prets',
  description: 'Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security',
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
