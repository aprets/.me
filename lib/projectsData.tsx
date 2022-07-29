import React from 'react'

export const projectTags = [
	'JavaScript',
	'TypeScript',
	'Python',
	'React',
	'Next',
	'MongoDB',
	'Firebase',
	'GitHub Actions',
	'Docker',
	'Google Cloud',
	'Terraform',
	'Contentful',
	'Socket.IO',
	'WebSocket',
	'Mantine',
	'HyperV',
	'PowerShell',
] as const

export type ProjectTag = typeof projectTags[number]

export type Project = {
	title: string,
	brief: string,
	description: React.ReactNode,
	image: string,
	githubLink: string,
	tags: ProjectTag[],
}

export const projects: Project[] = [
	{
		title: 'VMote',
		brief: 'Web remote management interface for headless Windows streaming servers',
		description: (
			<>
				The project allows the user to remotely control server power, active output screen and lets
				them manage HyperV Virtual Machines on the server.
				Status and statistics are streamed to the user in real-time allowing for full remote management.
				PowerShell and NVIDIA System Management Interface were used to collect data and interact
				with Windows internals. The project was created to easily manage servers
				accessed using remote control software like Parsec, RDP etc.
			</>
		),
		image: '/vmote.png',
		githubLink: 'https://github.com/aprets/vmote',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Socket.IO', 'WebSocket', 'Docker', 'GitHub Actions', 'Mantine', 'PowerShell'],
	},
	{
		title: 'ClearPath',
		brief: 'Prototype DX-focused infrastructure management platform on top of public cloud',
		description: (
			<>
				This project offers &quot;heroku-like&quot; experience for managing infrastructure with full flexibility and pricing of public cloud
				(GCP for the prototype).
				Works on top of the user&apos;s stack (GCP, Terraform Cloud) leaving them in full control of their infrastructure.
				Multiple workspaces can be managed which can contain Virtual Machines, SQL Databases and Serverless Docker Container deployments.
				The project offers comprehensive guidance and help to maximally simplify operations and allow easy onboarding of new hires and 
				engineers with limited cloud experience.
			</>
		),
		image: '/clearpath.png',
		githubLink: 'https://github.com/aprets/clearpath',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Google Cloud', 'Docker', 'Terraform', 'Firebase', 'GitHub Actions', 'Mantine'],
	},
	{
		title: 'ubnt-cloudflared',
		brief: 'Install & Run Cloudflare Tunnel on Ubiquiti network gateways',
		description: (
			<>
				This project offers &quot;heroku-like&quot; experience for managing infrastructure with full flexibility and pricing of public cloud
				(GCP for the prototype).
				Works on top of the user&apos;s stack (GCP, Terraform Cloud) leaving them in full control of their infrastructure.
				Multiple workspaces can be managed which can contain Virtual Machines, SQL Databases and Serverless Docker Container deployments.
				The project offers comprehensive guidance and help to maximally simplify operations and allow easy onboarding of new hires and 
				engineers with limited cloud experience.
			</>
		),
		image: '/ubnt-cloudflared.png',
		githubLink: 'https://github.com/aprets/ubnt-cloudflared',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Google Cloud', 'Docker', 'Terraform', 'Firebase', 'GitHub Actions', 'Mantine'],
	},
	{
		title: 'Mantine 2',
		brief: 'A new version of Mantine',
		description: 'A React app for managing your personal finances',
		image: 'https://source.unsplash.com/random',
		githubLink: 'https://github.com/aprets/Chatty-Chef',
		tags: ['React', 'Firebase'],
	},
	{
		title: 'Mantine 3',
		brief: 'A new version of Mantine',
		description: 'A React app for managing your personal finances',
		image: 'https://source.unsplash.com/random',
		githubLink: 'https://github.com/aprets/Chatty-Chef',
		tags: ['React'],
	},
]
