/* eslint-disable @next/next/no-img-element */
import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Image, Card, ActionIcon, MultiSelect, Skeleton} from '@mantine/core'

export default function Home() {
	return (
		<main>
			<div className='flex flex-col-reverse md:flex-row justify-between mb-24'>
				<div className='flex flex-col'>
					<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>Artur Prets</h1>
					<h2 className='text-gray-700 dark:text-gray-200 mb-4'>Human being currently at {' '}
						<span className='font-semibold'>Home</span>
					</h2>
					<p className='text-gray-600 dark:text-gray-400 mb-16'>Help I am under the water! Help I am under the water! Help I am under the water! Help I am under the water! </p>
				</div>
				<div className='flex justify-center'>
					<img
						src='/pfp-blob.svg'
						className='w-96 h-auto'
						alt='Profile'
						title='I am under the water. Please help me.'
					/>
				</div>
			</div>
		</main>
	)
}
