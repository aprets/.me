/* eslint-disable @next/next/no-img-element */
import {useState} from 'react'

import Obfuscate from 'react-obfuscate'
import {Button, Text, Container, Group, Center, Loader, Paper, Badge, Image, Card, ActionIcon, MultiSelect, Skeleton} from '@mantine/core'
import {FaGithub} from 'react-icons/fa'

import {openModal} from '@mantine/modals'
import {useAutoAnimate} from '@formkit/auto-animate/react'

import {Project, projects, ProjectTag, projectTags} from 'lib/projectsData'

function ProjectCard({title, brief, description, image, tags, githubLink, onTagClick} : Project & {onTagClick: (tag: ProjectTag) => () => void}) {
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
				<ActionIcon size='lg' radius='md' variant='default' component='a' href={githubLink} aria-label='Github'>
					<FaGithub size='70%' />
				</ActionIcon>
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
					<h2 className='text-lg text-gray-700 mb-5'>
						Human being currently at {' '} <span className='font-semibold'>Home</span>
					</h2>
					<p className='text-lg text-gray-600 mb-5'>Help I am under the water! Help I am under the water! Help I am under the water! Help I am under the water! </p>
					<div className='text-lg text-gray-500'>
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
					<img
						src='/pfp-blob.svg'
						className='w-96 h-auto'
						alt='Profile'
						title='I am under the water. Please help me.'
					/>
				</div>
			</div>
			<h1 className='font-bold text-3xl mb-4 text-black'>Projects</h1>
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
