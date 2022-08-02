import {useState} from 'react'

import Image from 'next/image'

import pfpBlob from 'public/pfp-blob.svg'

import Obfuscate from 'react-obfuscate'
import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Card, ActionIcon, MultiSelect, Skeleton, Image as MI} from '@mantine/core'
import {FaGithub} from 'react-icons/fa'

import {openModal} from '@mantine/modals'
import {useAutoAnimate} from '@formkit/auto-animate/react'

import {Project, projects, ProjectTag, projectTags} from 'lib/projectsData'

function ProjectCard({title, brief, description, image, tags, githubLink, onTagClick} : Project & {onTagClick: (tag: ProjectTag) => () => void}) {
	return (
		<Card p='lg' radius='md' withBorder>

			<Card.Section withBorder className='relative h-64'>
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

			<Group position='apart' mt='md'>
				<Text size='lg' weight={500}>{title}</Text>
				{githubLink ? (
					<ActionIcon size='lg' radius='md' variant='default' component='a' href={githubLink} aria-label='Github'>
						<FaGithub size='70%' />
					</ActionIcon>
				) : (
					<Badge color='dark' variant='dot'>
						proprietary
					</Badge>
				)}
			</Group>
			<Group position='left' spacing='xs' mt={4}>
				{tags.map((tag) => (
					<Badge key={tag} className='cursor-pointer' color='primary' variant='outline' onClick={onTagClick(tag)}>
						{tag}
					</Badge>
				))}
			</Group>
			<p className='text-gray-800 font-medium mt-3 mb-2'>
				{brief}
			</p>

			<p className='text-gray-700'>
				{description}
			</p>

		</Card>
	)
}

export default function Home() {
	const [tagFilter, setTagFilter] = useState<ProjectTag[]>([])
	const filteredProjects = projects.filter(
		// Only show projects which have all the tags in the filter
		// aka ensure no project does not include one of the tags in the filter
		(p) => !tagFilter.some(
			(t) => !p.tags.includes(t),
		),
	)
	const [animatedParent] = useAutoAnimate<HTMLDivElement>()
	return (
		<main>
			<div className='flex flex-col-reverse md:flex-row justify-between mb-24'>
				<div className='flex flex-col'>
					<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-2 mt-8 text-black'>Artur Prets</h1>
					<h2 className='text-lg text-gray-700'>
						Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security
					</h2>
					<p className='text-lg mt-6 mb-12'>Passionate about web, cloud, software and tech in general.<br />See below for my links, contact details and projects.</p>
					<div className='text-lg'>
						<p className='mb-3'>
							<Obfuscate className='text-inherit' email={atob('aGVsbG8td2ViQGFwcmV0cy5tZQ')} />
						</p>
						<p className='mb-3'>
							<a className='text-inherit' href='https://github.com/aprets'>@aprets on GitHub</a>
						</p>
						<p className='mb-3'>
							<a className='text-inherit' href='https://www.linkedin.com/in/aprets/'>/in/aprets on LinkedIn</a>
						</p>
					</div>
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
			<h1 className='font-bold text-3xl mb-4 text-black'>Projects</h1>
			<h2 className='text-lg mb-4'>Some of the projects I worked on. You can use the filter below to filter by tech or area.</h2>
			<MultiSelect
				value={tagFilter}
				onChange={(value) => setTagFilter(value as ProjectTag[])}
				data={projectTags.map((tag) => ({label: tag, value: tag}))}
				label='Filter'
				placeholder='Pick tags to include'
				clearable
				searchable
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8' ref={animatedParent}>
				{
					filteredProjects.map((project) => (
						<ProjectCard
							key={project.title}
							{...project}
							onTagClick={
								(tag) => () => {
									if (!tagFilter.includes(tag)) {
										setTagFilter([...tagFilter, tag])
									}
								}
							}
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
