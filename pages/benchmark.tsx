import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Title} from '@mantine/core'

import Link from 'next/link'

export default function Benchmark() {
	return (
		<Text>
			This website is hosted on both Vercel and Cloudflare Pages to compare the performance of the two. <br />
			Statistics of page load times are stored to compare averages between the two platforms.
		</Text>

	)
}
