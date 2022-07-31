import Script from 'next/script'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

import {hostTag} from 'lib/hostBenchmark'

const gaMeasurementId = 'G-HSYH6D8YEH'

function pageView(
	path: string,
): void {
	const pageViewOptions: {
		// eslint-disable-next-line camelcase
		page_title?: string;
		// eslint-disable-next-line camelcase
		page_location?: string;
		// eslint-disable-next-line camelcase
		page_path?: string;
		// eslint-disable-next-line camelcase
		send_page_view?: boolean;
		// eslint-disable-next-line camelcase
		user_id?: string;
	} = {}

	if (path !== undefined) {
		pageViewOptions.page_path = path
	}

	// @ts-expect-error loaded by the component below
	window.gtag('config', gaMeasurementId, pageViewOptions)
}

export function GoogleAnalytics(): JSX.Element | null {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: URL): void => {
			pageView(url.toString())
		}

		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
				strategy='afterInteractive'
			/>
			<Script id='nextjs-google-analytics'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${gaMeasurementId}', {
						page_path: window.location.pathname,
						host: '${hostTag}',
					});
				`}
			</Script>
		</>
	)
}
