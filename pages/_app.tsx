import {useEffect} from 'react'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {Container, MantineProvider} from '@mantine/core'
import {ModalsProvider} from '@mantine/modals'

import {hotjar} from 'react-hotjar'

import 'global.css'

import {theme} from 'lib/mantineTheme'

import Navbar from 'components/Navbar'
import {GoogleAnalytics} from 'components/GoogleAnalytics'

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
