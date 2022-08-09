import {Fragment, useState} from 'react'

import Image from 'next/image'

import pfpBlob from 'public/pfp-blob.svg'

import Obfuscate from 'react-obfuscate'
import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Card, ActionIcon, MultiSelect, Skeleton, Image as MI, Switch, Radio} from '@mantine/core'
import {FaGithub} from 'react-icons/fa'

import {openModal} from '@mantine/modals'
import {useAutoAnimate} from '@formkit/auto-animate/react'

import {allTags, Project, projects, Tag, tagAreas} from 'lib/projectsData'

function ProjectCard(
	{title, brief, description, image, tags, githubLink, onTagClick, filter} : Project & {onTagClick: (tag: Tag) => () => void, filter: Tag[]},
) {
	return (
		<Card p='lg' radius='md' withBorder>

			{image && (
				<Card.Section withBorder className='relative h-64' mb='md'>
					<Image
						src={image}
						layout='fill'
						alt={title}
						className='cursor-pointer object-cover'
						onClick={() => openModal({
							size: image.width,
							title,
							children: <div className='text-center'><Image src={image} className='object-fit' alt={title} /></div>,
						})}
					/>
				</Card.Section>
			)}

			<Group position='apart' mb='xs'>
				<Text size='lg' weight={500}>{title}</Text>
				{githubLink ? (
					<ActionIcon size='lg' radius='md' variant='default' component='a' href={githubLink} aria-label='Github'>
						<FaGithub size='70%' />
					</ActionIcon>
				) : (
					<Badge color='dark' variant='outline' radius='md'>
						proprietary
					</Badge>
				)}
			</Group>
			<div className='flex flex-row flex-wrap gap-[0.4rem]'>
				{tags.map((tag) => (
					<button
						key={tag}
						type='button'
						className={`border-none rounded-full cursor-pointer ${filter.includes(tag) ? 'bg-primary-100 text-primary-700' : 'bg-neutral-100 text-gray-800'} hover:bg-primary-100 text-sm line font-medium px-[0.4rem] py-[0.1rem] active:translate-y-[1px]`}
						onClick={onTagClick(tag)}
					>
						{tag}
					</button>
				))}
			</div>
			<p className='text-gray-800 font-medium mt-3 mb-2'>
				{brief}
			</p>

			<p className='text-gray-800'>
				{description}
			</p>

		</Card>
	)
}

export default function Home() {
	const [filterMode, setFilterMode] = useState<'AND' | 'OR'>('OR')
	const [filter, setFilter] = useState<Tag[]>([])
	const filteredProjects = filter.length ? projects.filter(
		filterMode === 'AND' ? (project) => filter.every((tag) => project.tags.includes(tag)) : (project) => filter.some((tag) => project.tags.includes(tag)),
	) : projects
	const [animatedParent] = useAutoAnimate<HTMLDivElement>()
	const toggleTag = (tag: Tag) => () => { setFilter((c) => (c.includes(tag) ? c.filter((t) => t !== tag) : [...c, tag])) }
	return (
		<main>
			<div className='flex flex-col-reverse md:flex-row justify-between mb-24'>
				<div className='flex flex-col'>
					<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2 mt-8 text-black'>Artur Prets</h1>
					<h2 className='text-lg text-gray-700'>
						Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security
					</h2>
					<p className='text-lg mt-6 mb-12'>Passionate about web, cloud, software and tech in general.<br />See below for my links, contact details and projects.</p>
					<p className='mb-3'>
						<Obfuscate className='text-lg underline decoration-secondary-500 decoration-2' email={atob('aGVsbG8td2ViQGFwcmV0cy5tZQ')} />
					</p>
					<p className='mb-3'>
						<a className='text-lg underline decoration-secondary-500 decoration-2' href='https://github.com/aprets'>@aprets on GitHub</a>
					</p>
					<p className='mb-3'>
						<a className='text-lg underline decoration-secondary-500 decoration-2' href='https://www.linkedin.com/in/aprets/'>/in/aprets on LinkedIn</a>
					</p>
				</div>
				<div className='flex justify-center'>
					<Image
						src={pfpBlob}
						width={384}
						height={364}
						priority
						unoptimized
						layout='fixed'
						alt='Profile'
						title='I am under the water. Please help me.'
					/>
				</div>
			</div>
			<h1 className='font-bold text-3xl mb-4 text-black'>Skills</h1>
			<h2 className='text-lg mb-2'>Click on a category or skill to add it to the project filter below.</h2>
			<div className='mb-6'>
				{Object.entries(tagAreas).map(([area, tags]) => (
					<div key={area} className='mb-2'>
						<button
							type='button'
							className={`rounded-full cursor-pointer hover:text-primary-600 ${filter.includes(area as Tag) ? 'text-primary-700' : 'text-gray-700'} text-lg font-semibold active:translate-y-[1px] mb-1`}
							onClick={toggleTag(area as Tag)}
						>
							{area}
						</button>
						<div className='flex flex-row flex-wrap gap-2'>
							{tags.map((tag) => (
								<button
									key={tag}
									type='button'
									className={`border-none rounded-full cursor-pointer ${filter.includes(tag) ? 'bg-primary-100 text-primary-700' : 'bg-neutral-100 text-gray-800'} hover:bg-primary-100 text-sm line font-medium px-2 py-1 active:translate-y-[1px]`}
									onClick={toggleTag(tag)}
								>
									{tag}
								</button>
							))}
						</div>
					</div>
				))}
			</div>
			<h1 className='font-bold text-3xl mb-4 text-black'>Projects</h1>
			<h2 className='text-lg mb-4'>Some of the projects I worked on. You can use the filter below to filter by tech or area.</h2>
			<MultiSelect
				className='mb-2'
				classNames={{searchInput: 'leading-none'}}
				value={filter}
				onChange={(value) => setFilter(value as Tag[])}
				data={allTags.map((s) => ({label: s, value: s}))}
				label='Filter'
				placeholder='Pick tags to include'
				clearable
				searchable
			/>
			<Radio.Group
				label='Mode'
				value={filterMode}
				onChange={(value) => setFilterMode(value as typeof filterMode)}
			>
				<Radio value='OR' label='Show projects including any of the tags (OR)' />
				<Radio value='AND' label='Show only the projects that include all selected tags (AND)' />
			</Radio.Group>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 leading' ref={animatedParent}>
				{
					filteredProjects.map((project) => (
						<ProjectCard
							key={project.title}
							{...project}
							onTagClick={toggleTag}
							filter={filter}
						/>
					))
				}
			</div>
			{!filteredProjects.length && (
				<p className='text-gray-600 text-center'>No projects found</p>
			)}
			<Skeleton height='25vh' className='mt-56' radius='md' />
			<div className='relative -top-[14vh] z-20 text-center font-medium text-xl text-gray-600 mb-16'>More content coming...</div>

		</main>
	)
}
