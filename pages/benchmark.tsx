import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Title} from '@mantine/core'
import {roundMetric, useStats, useWebVitals} from 'lib/hostBenchmark'

import Link from 'next/link'
import {useEffect} from 'react'

export default function Benchmark() {
	const vitals = useWebVitals()
	const stats = useStats()
	return (
		<>
			<p className='text-lg mb-8'>
				This website is hosted on both Vercel and Cloudflare Pages to compare the performance of the two. <br />
				Statistics of page load times are stored to compare averages between the two platforms.
			</p>
			<h2 className='text-xl font-semibold mb-1'>Your actual performance</h2>
			<h4 className='text-lg mb-4'>This is the performance of your first page load on this website.</h4>
			<div className='flex flex-col md:flex-row bg-gradient-to-bl from-primary-400 to-primary-600 p-8 rounded-lg'>
				{[
					{
						title: 'Time To First Byte',
						stats: vitals ? `${roundMetric(vitals.ttfb)} ms` : '000 ms',
						description: 'Time to First Byte (TTFB) is a foundational metric for measuring connection setup time and web server responsiveness in both the lab and the field. It helps identify when a web server is too slow to respond to requests. In the case of navigation requests—that is, requests for an HTML document—it precedes every other meaningful loading performance metric. A TTFB under 800ms is considered good.',
					},
					{
						title: 'First Contentful Paint',
						stats: vitals ? `${roundMetric(vitals.fcp)} ms` : '0000 ms',
						description: 'First Contentful Paint (FCP) is an important, user-centric metric for measuring perceived load speed because it marks the first point in the page load timeline where the user can see anything on the screen—a fast FCP helps reassure the user that something is happening. An FCP under 1.8s is considered good.',
					},
				].map((stat) => (
					<div key={stat.title} className='flex-1 pt-8 mt-8 first:pt-0 first:mt-0 md:pt-0 md:mt-0 first:pl-0 first:ml-0 md:pl-8 md:ml-8'>
						<p className='text-white font-bold text-2xl mb-1'>{stat.title}</p>
						<p className='text-white font-bold text-3xl mb-2'>{stat.stats}</p>
						<p className='text-white'>{stat.description}</p>
					</div>
				))}
			</div>
			<div className='flex flex-row justify-end'>
				<p className='text-sm text-gray-500 mr-1 mt-1'>Descriptions by <a className='text-inherit' href='https://web.dev'>web.dev</a></p>
			</div>
			<h2 className='text-xl font-semibold mt-8 mb-1'>Vercel vs Cloudflare Pages Statistics</h2>
			<h4 className='text-lg mb-4'>Average TTFB and FCP comparison between the two providers for this website.</h4>
			<div className='flex flex-col md:flex-row bg-gradient-to-bl from-indigo-400 to-indigo-600 p-8 rounded-lg'>
				{[
					{
						title: 'Vercel',
						ttfb: stats ? `${roundMetric(stats.VERCEL.ttfb)} ms` : '000 ms',
						fcp: stats ? `${roundMetric(stats.VERCEL.fcp)} ms` : '0000 ms',
						description: (
							<>
								Vercel separates static assets like pages with {' '}
								<a className='text-inherit' href='https://nextjs.org/docs/advanced-features/automatic-static-optimization'>Automatic Static Optimization</a> {' '}
								and serves them directly from their CDN. Both TTFB and FCP here should represent the performance of their CDN as the first byte
								and contentful paint should happen based on the data coming from it. Server-side rendered pages are expected to have worse
								performance in those metrics as they have to be rendered at the data center of Vercel&apos;s infrastructure provider
								(currently AWS).
							</>
						),
					},
					{
						title: 'Cloudflare Pages',
						ttfb: stats ? `${roundMetric(stats.CLOUDFLARE_PAGES.ttfb)} ms` : '000 ms',
						fcp: stats ? `${roundMetric(stats.CLOUDFLARE_PAGES.fcp)} ms` : '0000 ms',
						description: (
							<>
								<a className='text-inherit' href='https://pages.cloudflare.com'>Cloudflare Pages</a> {' '}
								is a static site hosting platform powered by Cloudflare&apos;s global CDN. Since it can only serve
								static assets, it has to use the static HTML export from Next.js. If this websites includes server-side rendered pages,
								or any pages that require compute to serve, Cloudflare Pages will only be able to host the static subset of the website.
								Cloudflare&apos;s CDN or edge network is believed to be faster and more expansive than Vercel&apos;s which should be its
								main advantage while this website remains static.
							</>
						),
					},
				].map((stat) => (
					<div key={stat.title} className='flex-1 pt-8 mt-8 first:pt-0 first:mt-0 md:pt-0 md:mt-0 first:pl-0 first:ml-0 md:pl-8 md:ml-8'>
						<p className='text-white font-bold text-3xl mb-4'>{stat.title}</p>
						<div className='flex flex-col md:flex-row justify-between mr-8 mb-2'>
							<div className='mb-2'>
								<p className='text-white font-bold text-2xl'>Time To First Byte</p>
								<p className='text-white font-bold text-3xl'>{stat.ttfb}</p>
							</div>
							<div>
								<p className='text-white font-bold text-2xl'>First Contentful Paint</p>
								<p className='text-white font-bold text-3xl'>{stat.fcp}</p>
							</div>
						</div>
						<p className='text-white'>{stat.description}</p>
					</div>
				))}
			</div>
			<h2 className='text-xl font-semibold mt-8 mb-1'>See for yourself</h2>
			<h4 className='text-lg mb-4'>
				You can directly access the Vercel and Cloudflare Pages hosted versions of the website via the links below <br />
				Feel free to measure the performance yourself. You can use tools like <a href='https://github.com/GoogleChrome/lighthouse' className='text-inherit'>Lighthouse</a> to do that.
			</h4>
			<div className='flex flex-row gap-4'>
				<Button color='violet' radius='xl' component='a' href='https://vercel.aprets.me'>
					Vercel Website
				</Button>
				<Button color='violet' radius='xl' component='a' href='https://cloudflare.aprets.me'>
					Cloudflare Pages Website
				</Button>
			</div>

		</>

	)
}
