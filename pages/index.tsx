/* eslint-disable @next/next/no-img-element */
import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Image, Card, ActionIcon, MultiSelect, Skeleton} from '@mantine/core'
import {openModal} from '@mantine/modals'
import {Project, projects, ProjectTag, projectTags} from 'lib/projectsData'
import {useState} from 'react'

import {FaGithub} from 'react-icons/fa'

function ProjectCard({title, brief, description, image, tags, githubLink} : Project) {
	return (
		<Card shadow='sm' p='lg' radius='md' withBorder>

			<Card.Section withBorder>
				<Image
					src={image}
					height={256}
					alt={title}
					className='cursor-pointer'
					onClick={() => openModal({
						size: 'xl',
						title,
						children: <Image src={image} alt={title} />,
					})}
				/>
			</Card.Section>

			<Group position='apart' mt='md'>
				<Text size='lg' weight={500}>{title}</Text>
				<ActionIcon size='lg' radius='md' variant='default' component='a' href={githubLink}>
					<FaGithub size='70%' />
				</ActionIcon>
			</Group>
			<Group position='left' spacing='xs' mt={4}>
				{tags.map((tag) => (
					<Badge key={tag} className='cursor-pointer' color='primary' variant='outline'>
						{tag}
					</Badge>
				))}
			</Group>
			<p className='text-gray-800 font-medium dark:text-gray-200 mt-3 mb-2'>
				{brief}
			</p>

			<p className='text-gray-700 dark:text-gray-300 mt-0'>
				{description}
			</p>

		</Card>
	)
}

export default function Home() {
	const [tagFilter, setTagFilter] = useState<ProjectTag[]>([])
	const filteredProjects = projects.filter(
		// Only show projects which have all the tags in the filter
		// aka the ones that don't have any tags that are not in the filter
		(p) => !tagFilter.some(
			(t) => !p.tags.includes(t),
		),
	)
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
			<MultiSelect
				value={tagFilter}
				onChange={(value) => setTagFilter(value as ProjectTag[])}
				data={projectTags.map((tag) => ({label: tag, value: tag}))}
				label='Filter'
				placeholder='Pick tags to include'
				clearable
				searchable
			/>
			<h1 className='font-bold text-3xl mb-4 text-black dark:text-white'>Projects</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
				{
					filteredProjects.map((project) => (
						<ProjectCard
							key={project.title}
							{...project}

						/>
					))
				}
			</div>
		</main>
	)
}
