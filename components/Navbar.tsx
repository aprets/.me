import {humanHostName, roundMetric, useWebVitals} from 'lib/hostBenchmark'
import Link from 'next/link'
import {useRouter} from 'next/router'

interface NavbarProps {
	links: {url: string; label: string}[];
}

export default function Navbar({links}: NavbarProps) {
	const vitals = useWebVitals()
	const {pathname: currentPathname} = useRouter()

	const items = links.map(({url, label}) => {
		const isActive = currentPathname === url
		return (
			<Link href={url} key={label}>
				<a
					className={`block py-2 px-3 rounded-md no-underline text-base leading-none font-medium ${isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-50'}`}
				>
					{label}
				</a>
			</Link>
		)
	})

	return (
		<nav className='mt-1 md:mt-5 mb-10 flex flex-col-reverse md:flex-row justify-between'>
			<div className='flex flex-row items-center flex-wrap justify-start gap-4'>
				{items}
			</div>
			<div className='flex flex-col justify-center mb-2 md:mb-0'>
				<Link href='/benchmark'>
					<a className='text-inherit no-underline text-gray-900 text-sm' title='Click to learn more'>
						Loaded from {humanHostName}
						{vitals && (
							<span className='text-xs'>
								{' '}(TTFB: {roundMetric(vitals.ttfb)}ms, FCP: {roundMetric(vitals.fcp)}ms)
							</span>
						)}
					</a>
				</Link>
			</div>
		</nav>
	)
}
