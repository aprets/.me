import {useEffect, useState} from 'react'
import {useQuery} from '@tanstack/react-query'

const beaconUrl = 'https://loads.aprets.workers.dev'
const statsUrl = 'https://stats.aprets.workers.dev'

export const hostTag = process.env.NEXT_PUBLIC_HOST ?? 'DEV_SERVER'

const snakeCaseToTitleCase = (input: string) => input.toLowerCase().replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ` ${d.toUpperCase()}`))

export const humanHostName = snakeCaseToTitleCase(hostTag)

export const roundMetric = (metric: number) => Math.round(metric)

interface Metrics {
	ttfb: number,
	fcp: number,
}

let metrics: Metrics | undefined

const metricsCallbacks: ((update: typeof metrics) => void)[] = []

export const setMetrics = (update: Metrics) => {
	metrics = update
	metricsCallbacks.forEach((cb) => cb(metrics))
	if (hostTag !== 'DEV_SERVER') {
		const beaconBody = JSON.stringify({
			host: hostTag,
			ttfb: metrics.ttfb,
			fcp: metrics.fcp,
		})

		if (navigator.sendBeacon) {
			navigator.sendBeacon(beaconUrl, beaconBody)
		} else {
			fetch(beaconUrl, {
				body: beaconBody,
				method: 'POST',
				keepalive: false,
				headers: {
					'Content-Type': 'application/json',
				},
			})
		}
	}
}

export const useWebVitals = () => {
	const [stateMetrics, setStateMetrics] = useState<Metrics>()
	useEffect(() => {
		setStateMetrics(metrics)
		metricsCallbacks.push(setStateMetrics)
		return () => {
			metricsCallbacks.splice(metricsCallbacks.indexOf(setStateMetrics), 1)
		}
	}, [])
	return stateMetrics
}

interface HostStat {
	ttfb: number,
	fcp: number,
}

interface HostStats {
	VERCEL: HostStat,
	CLOUDFLARE_PAGES: HostStat,
}

export const useStats = () => useQuery<HostStats>(['stats'], async () => fetch(statsUrl).then((r) => r.json())).data
