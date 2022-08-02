import {ActionIcon} from '@mantine/core'
import {humanHostName, roundMetric, useWebVitals} from 'lib/hostBenchmark'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FaGithub} from 'react-icons/fa'

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
		<nav className='mt-5 mb-10 flex flex-col-reverse md:flex-row justify-between'>
			<div className='flex flex-row items-center flex-wrap justify-start gap-4'>
				{items}
			</div>
			<div className='flex flex-col justify-center mb-4 md:mb-0'>
				<Link href='/benchmark'>
					<a className='text-inherit no-underline text-primary-800 text-sm' title='Click to learn more'>
						<span className='inline-block rounded-full bg-primary-100 pl-3'>
							<span className='font-medium'>Loaded from {humanHostName} {' '}</span>
							<span className='text-xs'>
								(
								TTFB: {vitals ? roundMetric(vitals.ttfb) : '000'}<span className='text-[0.65rem]'>ms</span>,
								FCP: {vitals ? roundMetric(vitals.fcp) : '0000'}<span className='text-[0.65rem]'>ms</span>
								)
							</span>
							{' '}
							<div className='text-lg inline-block font-bold text-white bg-primary-700 rounded-full px-[0.6rem] py-[0.0rem]'>
								?
							</div>
						</span>
					</a>
				</Link>
			</div>
		</nav>
	)
}
