import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Title} from '@mantine/core'
import {useWebVitals} from 'lib/hostBenchmark'

import Link from 'next/link'
import {useEffect} from 'react'

export default function Benchmark() {
	const vitals = useWebVitals()
	return (
		<Text>
			This website is hosted on both Vercel and Cloudflare Pages to compare the performance of the two. <br />
			Statistics of page load times are stored to compare averages between the two platforms.<br />
			Your current stats: {JSON.stringify(vitals)}
		</Text>

	)
}
