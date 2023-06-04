'use client';

import { useWebVitals } from '@/lib/benchmark';

export const YourActualPerformance = () => {
  const webVitals = useWebVitals();
  return (
    <>
      <h1 className="text-xl font-semibold text-gray-900 ">Your actual performance</h1>
      <p className="text-lg text-gray-700 mt-1">This is the performance of your first page load on this website.</p>
      <div className="flex flex-col md:flex-row bg-gradient-to-bl from-primary-400 to-primary-600 p-8 rounded-lg mt-4">
        {[
          {
            title: 'Time To First Byte',
            stats: webVitals ? `${Math.round(webVitals.ttfb)} ms` : '000 ms',
            description:
              'Time to First Byte (TTFB) is a foundational metric for measuring connection setup time and web server responsiveness in both the lab and the field. It helps identify when a web server is too slow to respond to requests. In the case of navigation requests—that is, requests for an HTML document—it precedes every other meaningful loading performance metric. A TTFB under 800ms is considered good.',
          },
          {
            title: 'First Contentful Paint',
            stats: webVitals ? `${Math.round(webVitals.fcp)} ms` : '0000 ms',
            description:
              'First Contentful Paint (FCP) is an important, user-centric metric for measuring perceived load speed because it marks the first point in the page load timeline where the user can see anything on the screen—a fast FCP helps reassure the user that something is happening. An FCP under 1.8s is considered good.',
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className="flex-1 pt-8 mt-8 first:pt-0 first:mt-0 md:pt-0 md:mt-0 first:pl-0 first:ml-0 md:pl-8 md:ml-8"
          >
            <h2 className="text-white font-bold text-2xl mb-1">{stat.title}</h2>
            <p className="text-white font-bold text-3xl mb-2">{stat.stats}</p>
            <p className="text-white leading-7">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-end">
        <p className="text-sm text-gray-500 mr-1 mt-1">
          Descriptions by{' '}
          <a className="text-inherit" href="https://web.dev">
            web.dev
          </a>
        </p>
      </div>
    </>
  );
};
