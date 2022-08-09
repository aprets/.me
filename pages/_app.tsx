import {useEffect, useState} from 'react'
import {AppProps, NextWebVitalsMetric} from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import {Container, MantineProvider} from '@mantine/core'
import {ModalsProvider} from '@mantine/modals'

import {hotjar} from 'react-hotjar'

import 'global.css'

import {theme} from 'lib/mantineTheme'

import Navbar from 'components/Navbar'
import {GoogleAnalytics} from 'components/GoogleAnalytics'
import {hostTag, setMetrics} from 'lib/hostBenchmark'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import LogRocket from 'logrocket'
import {emotionCache} from 'lib/emotionCache'

let gotBenchmarkVitals = false
let fcp: number | undefined
let ttfb: number | undefined

export function reportWebVitals(metric: NextWebVitalsMetric) {
	switch (metric.name) {
		case 'FCP':
			fcp = metric.value
			break
		case 'TTFB':
			ttfb = metric.value
			break
		default:
			break
	}
	if (!gotBenchmarkVitals && fcp && ttfb) {
		gotBenchmarkVitals = true
		setMetrics({fcp, ttfb})
	}
}

export default function App(props: AppProps) {
	const {Component, pageProps} = props

	if (hostTag !== 'DEV_SERVER') {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			LogRocket.init('d3kwes/apretsme')
			hotjar.initialize(3089209, 6)
		}, [])
	}

	const [queryClient] = useState(() => new QueryClient())

	return (
		<div className='mb-16'>
			<Head>
				<title>Artur Prets</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<meta name='description' content='Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security' />
				<meta name='keywords' content='aprets,aprets.me,artur prets,prets' />
				<meta name='robots' content='index,follow' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			</Head>

			{hostTag !== 'DEV_SERVER' && (
				<>
					<Script
						src='https://static.cloudflareinsights.com/beacon.min.js'
						data-cf-beacon='{"token": "ad92d345a44d495692242e92e95166a7"}'
						strategy='afterInteractive'
					/>
					<GoogleAnalytics />
				</>
			)}

			<QueryClientProvider client={queryClient}>
				<MantineProvider
					// withGlobalStyles
					// withNormalizeCSS
					emotionCache={emotionCache}
					theme={theme}
				>
					<ModalsProvider>
						<Container size='xl'>
							<Navbar links={[
								{label: 'Home', url: '/'},
								{label: 'Benchmark', url: '/benchmark'},
							]}
							/>
							<Component {...pageProps} />
						</Container>
					</ModalsProvider>
				</MantineProvider>
			</QueryClientProvider>
		</div>
	)
}
