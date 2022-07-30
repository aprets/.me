import Link from 'next/link'
import {useRouter} from 'next/router'

const snakeCaseToTitleCase = (input: string) => input.toLowerCase().replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ` ${d.toUpperCase()}`))

interface NavbarProps {
	links: {url: string; label: string}[];
}

export default function Navbar({links}: NavbarProps) {
	const {pathname: currentPathname} = useRouter()

	const items = links.map(({url, label}) => {
		const isActive = currentPathname === url
		return (
			<Link href={url} key={label}>
				<a
					href={url}
					className={`block py-2 px-3 rounded-md no-underline text-base leading-none font-medium ${isActive ? 'text-primary-600 bg-primary-100' : 'text-gray-700 hover:bg-gray-50'}`}
				>
					{label}
				</a>
			</Link>
		)
	})

	return (
		<nav className='mt-5 mb-10 flex flex-row justify-between'>
			<div className='flex flex-row items-center flex-wrap justify-start gap-4'>
				{items}
			</div>
			<Link href='/benchmark'>
				<a href='/benchmark' className='text-inherit no-underline'>
					Loaded from {snakeCaseToTitleCase(process.env.NEXT_PUBLIC_HOST ?? 'DEV_SERVER')}
				</a>
			</Link>
		</nav>
	)
}
