'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { humanHostingName, useWebVitals } from '@/lib/benchmark';

interface NavbarProps {
  links: { url: string; label: string }[];
}

export const Navbar = ({ links }: NavbarProps) => {
  const webVitals = useWebVitals();
  const currentPathname = usePathname();

  const items = links.map(({ url, label }) => {
    const isActive = currentPathname === url;
    return (
      <Link
        href={url}
        key={label}
        className={`block py-2 px-3 rounded-md no-underline text-base leading-none font-medium transition-colors ${
          isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        {label}
      </Link>
    );
  });

  return (
    <nav className="mt-5 mb-10 flex flex-col-reverse md:flex-row justify-between">
      <div className="flex flex-row items-center flex-wrap justify-start gap-4">{items}</div>
      <div className="flex flex-col justify-center mb-4 md:mb-0">
        <Link href="/benchmark" className="no-underline text-primary-800 text-sm" title="Click to learn more">
          <span className="inline-block rounded-full bg-primary-100 pl-3">
            <span className="font-medium">Loaded from {humanHostingName} </span>
            <span className="text-[0.7rem]">
              (TTFB: {webVitals ? Math.round(webVitals.ttfb) : '000'}
              <span className="text-[0.65rem]">ms</span>, FCP: {webVitals ? Math.round(webVitals.fcp) : '0000'}
              <span className="text-[0.65rem]">ms</span>){' '}
            </span>
            <div className="text-lg inline-block font-bold text-white bg-primary-700 rounded-full px-[0.6rem] py-[0.0rem]">
              ?
            </div>
          </span>
        </Link>
      </div>
    </nav>
  );
};
