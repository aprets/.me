import Link from 'next/link';

import { YourActualPerformance } from './your-actual-performance';

export const metadata = {
  title: 'Benchmark',
  description: 'Key Web Performance Metrics, Vercel and Cloudflare Pages',
};

const Benchmark = () => (
  <main>
    <p className="text-lg max-w-5xl text-gray-700 mb-8">
      This website was originally hosted on both Vercel and Cloudflare Pages to compare the performance of the two.
      Statistics of page load times were stored to compare averages between the two platforms.
    </p>
    <YourActualPerformance />
    <h1 className="text-xl font-semibold text-gray-900 mt-8">Vercel vs Cloudflare Pages Statistics</h1>
    <p className="text-lg text-gray-700 mt-1">Average TTFB and FCP comparison between the two providers.</p>
    <div className="flex flex-col md:flex-row bg-gradient-to-bl from-indigo-400 to-indigo-600 p-8 rounded-lg mt-4">
      {[
        {
          title: 'Vercel',
          ttfb: '1204 ms',
          fcp: '1777 ms',
          description: (
            <>
              <p>
                Next.js separates static assets like pages with{' '}
                <Link
                  className="text-inherit underline decoration-white/60 decoration-2"
                  href="https://nextjs.org/docs/advanced-features/automatic-static-optimization"
                >
                  Automatic Static Optimization
                </Link>{' '}
                and Vercel serves them directly from their CDN. This is true for the pages router and both server and
                client components in the app router. Both TTFB and FCP here should represent the performance of their
                CDN, as the first byte and contentful paint should happen based on the data coming from it.
              </p>
              <p className="mt-4">
                Server-side rendered pages and React server components are expected to have worse performance in those
                metrics, as they have to be rendered at the data centre of Vercel&apos;s infrastructure provider
                (currently AWS). Although Vercel now also allows opting into{' '}
                <Link
                  className="text-inherit underline decoration-white/60 decoration-2"
                  href="https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes"
                >
                  edge execution
                </Link>{' '}
                backed by Cloudflare Workers.
              </p>
            </>
          ),
        },
        {
          title: 'Cloudflare Pages',
          ttfb: '1063 ms',
          fcp: '1733 ms',
          description: (
            <>
              <p>
                <Link
                  className="text-inherit underline decoration-white/60 decoration-2"
                  href="https://pages.cloudflare.com"
                >
                  Cloudflare Pages
                </Link>{' '}
                is mostly a static site hosting platform powered by Cloudflare&apos;s global CDN. However, since the
                benchmark started the platform has added support for server-side{' '}
                <Link
                  className="text-inherit underline decoration-white/60 decoration-2"
                  href="https://developers.cloudflare.com/pages/platform/functions/"
                >
                  edge rendering via Cloudflare Workers.
                </Link>{' '}
                Still, the platform and its DX are mainly designed around mostly static websites which is why Cloudflare
                is now working at{' '}
                <Link
                  className="text-inherit underline decoration-white/60 decoration-2"
                  href="https://blog.cloudflare.com/pages-and-workers-are-converging-into-one-experience/"
                >
                  merging and improving the DX of Cloudflare Pages and Workers Sites
                </Link>
                .
              </p>
              <p className="mt-4">
                Cloudflare&apos;s CDN or edge network are believed to be faster and more expansive than Vercel&apos;s,
                which should be its main advantage while this website remains static. Cloudflare Workers remain one of
                the best edge computing platforms with gradually improving DX. The raw capabilities of the platform are
                likely why Vercel chose to use it for their edge runtime.
              </p>
            </>
          ),
        },
      ].map((stat) => (
        <div
          key={stat.title}
          className="flex-1 pt-8 mt-8 first:pt-0 first:mt-0 md:pt-0 md:mt-0 first:pl-0 first:ml-0 md:pl-8 md:ml-8"
        >
          <h2 className="text-white font-bold text-3xl mb-4">{stat.title}</h2>
          <div className="flex flex-col md:flex-row justify-between mr-8">
            <div className="mb-2">
              <p className="text-white font-bold text-2xl">Time To First Byte</p>
              <p className="text-white font-bold text-3xl">{stat.ttfb}</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">First Contentful Paint</p>
              <p className="text-white font-bold text-3xl">{stat.fcp}</p>
            </div>
          </div>
          <div className="text-white leading-7 mt-2">{stat.description}</div>
        </div>
      ))}
    </div>
    <h1 className="text-xl font-semibold text-gray-900 mt-8">Conclusions</h1>
    <div className="text-gray-700 text-lg max-w-5xl">
      <p className="mt-1">
        The results of the benchmark are somewhat inconclusive. Both platforms were heavily affected by slower global
        load times (due to assets not being cached in the user&apos;s regional point-of-presence yet). This drove all
        average metrics up significantly. This was not representative of performance experienced by, e.g. UK users,
        which experienced results up to 10x better than average. Either way, both platforms performed fairly similarly.
      </p>
      <p className="mt-4">
        Over the course of the benchmark, the platforms have also been updated, including implementing some of each
        other&apos;s features as described in the above section. However, notably, Vercel has had far and away the best
        experience in development, deployment and monitoring. Generally, Vercel&apos;s offering, while more expensive,
        is much more polished and ready for use by most web developers. On the other hand, the experience of using
        Cloudflare pages or workers will likely feel somewhat alien and unintuitive to those unfamiliar with the
        platform, even if the technology is incredibly powerful and promising.
      </p>
      <p className="mt-4">
        While I am looking forward to the improvements Cloudflare is making to their platform, for the time being this
        website will remain hosted on Vercel only. Cloudflare Workers are still a great offering for edge computing,
        reverse proxies and blazing-fast edge middleware, even if the DX is not quite there yet.
      </p>
    </div>
    <h1 className="text-xl font-semibold text-gray-900 mt-8">See for yourself</h1>
    <p className="text-lg max-w-5xl text-gray-700 mt-1">
      You can still access the Vercel and Cloudflare Pages hosted versions of the website via the links below. Although
      the Cloudflare version will likely drift out of date. Feel free to measure the performance yourself. You can use
      tools like{' '}
      <Link
        href="https://github.com/GoogleChrome/lighthouse"
        className="text-inherit underline decoration-secondary-500 decoration-2"
      >
        Lighthouse
      </Link>{' '}
      to do that.
    </p>
    <div className="flex flex-row gap-x-4 mt-4 mb-16">
      <Link
        href="https://vercel.aprets.me"
        className="inline-flex items-center gap-x-1.5 text-sm font-medium text-secondary-600 hover:text-indigo-500"
      >
        Vercel Website
      </Link>
      <Link
        href="https://cloudflare.aprets.me"
        className="inline-flex items-center gap-x-1.5 text-sm font-medium text-secondary-600 hover:text-indigo-500"
      >
        Cloudflare Pages Website
      </Link>
    </div>
  </main>
);
export default Benchmark;
