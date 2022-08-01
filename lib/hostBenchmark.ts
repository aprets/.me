import {useEffect, useState} from 'react'

export const hostTag = process.env.NEXT_PUBLIC_HOST ?? 'DEV_SERVER'

const snakeCaseToTitleCase = (input: string) => input.toLowerCase().replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ` ${d.toUpperCase()}`))

export const humanHostName = snakeCaseToTitleCase(hostTag)

interface Metrics {
	ttfb: number,
	fcp: number,
}

let metrics: Metrics | undefined

const metricsCallbacks: ((update: typeof metrics) => void)[] = []

export const setMetrics = (update: Metrics) => {
	console.log(update)
	metrics = update
	metricsCallbacks.forEach((cb) => cb(metrics))
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
