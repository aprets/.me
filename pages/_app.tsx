import {useEffect} from 'react'
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
import {setMetrics} from 'lib/hostBenchmark'

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
	if (fcp && ttfb) {
		setMetrics({fcp, ttfb})
	}
}

export default function App(props: AppProps) {
	const {Component, pageProps} = props

	useEffect(() => {
		hotjar.initialize(3089209, 6)
	}, [])

	return (
		<>
			<Head>
				<title>Artur Prets</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			</Head>

			<Script
				src='https://static.cloudflareinsights.com/beacon.min.js'
				data-cf-beacon='{"token": "ad92d345a44d495692242e92e95166a7"}'
				strategy='afterInteractive'
			/>
			<GoogleAnalytics />

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={theme}
			>
				<ModalsProvider>
					<Container size='xl'>
						<Navbar links={[
							{label: 'Home', url: '/'},
							{label: 'About', url: '/about'},
							{label: 'Benchmark', url: '/benchmark'},
						]}
						/>
						<Component {...pageProps} />
					</Container>
				</ModalsProvider>
			</MantineProvider>
		</>
	)
}
