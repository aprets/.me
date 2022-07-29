import {AppProps} from 'next/app'
import Head from 'next/head'
import {Container, MantineProvider} from '@mantine/core'

import 'global.css'
import {ModalsProvider} from '@mantine/modals'
import {theme} from 'lib/mantineTheme'
import Navbar from 'components/Navbar'

export default function App(props: AppProps) {
	const {Component, pageProps} = props

	return (
		<>
			<Head>
				<title>Artur Prets</title>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			</Head>

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
						]}
						/>
						<Component {...pageProps} />
					</Container>
				</ModalsProvider>
			</MantineProvider>
		</>
	)
}
