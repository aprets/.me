import React from 'react'
import {StaticImageData} from 'next/image'

import vmoteImg from 'public/vmote.png'
import clearpathImg from 'public/clearpath.png'
import ubntImg from 'public/ubnt-cloudflared.png'
import apretsImg from 'public/aprets.png'

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
	'Tailwind CSS',
	'Cloudflare Workers',
	'Socket.IO',
	'WebSocket',
	'Mantine',
	'HyperV',
	'PowerShell',
	'Shell Script',

	'Linux',
	'Reverse Engineering',
	'Networking',
] as const

export type ProjectTag = typeof projectTags[number]

export type Project = {
	title: string,
	brief: string,
	description: React.ReactNode,
	image: StaticImageData,
	githubLink?: string,
	tags: ProjectTag[],
}

export const projects: Project[] = [
	{
		title: 'VMote',
		brief: 'Web remote management interface for headless Windows streaming servers',
		description: (
			<>
				Allows the user to remotely control server power, active output screen and lets
				them manage HyperV Virtual Machines on the server.
				Status and statistics are streamed to the user in real-time allowing for full remote management.
				PowerShell and NVIDIA System Management Interface were used to collect data and interact
				with Windows internals. The project was created to easily manage servers
				accessed using remote control software like Parsec, RDP etc.
			</>
		),
		image: vmoteImg,
		githubLink: 'https://github.com/aprets/vmote',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Socket.IO', 'WebSocket', 'Docker', 'GitHub Actions', 'Mantine', 'PowerShell'],
	},
	{
		title: 'ClearPath',
		brief: 'Prototype DX-focused infrastructure management platform on top of public cloud',
		description: (
			<>
				&quot;Heroku-like&quot; experience for managing infrastructure with full flexibility and pricing of public cloud
				(GCP for the prototype).
				Works on top of the user&apos;s stack (GCP, Terraform Cloud) leaving them in full control of their infrastructure.
				Multiple workspaces can be managed which can contain Virtual Machines, SQL Databases and Serverless Docker Container deployments.
				The project offers comprehensive guidance and help to maximally simplify operations and allow easy onboarding of new hires and
				engineers with limited cloud experience.
			</>
		),
		image: clearpathImg,
		githubLink: 'https://github.com/aprets/clearpath',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Google Cloud', 'Docker', 'Terraform', 'Firebase', 'GitHub Actions', 'Mantine'],
	},
	{
		title: 'Ubiquiti Cloudflared',
		brief: 'Install & Run Cloudflare Tunnel on Ubiquiti network gateways',
		description: (
			<>
				<a className='text-inherit' href='https://https://dash.teams.cloudflare.com/'>Cloudflare Tunnel</a> allows for secure
				remote access to a network with no extra configuration and simple remote management from Cloudflare Zero Trust Dashboard.
				This project provides the scripts to install cloudflared (which can create a tunnel to the network) on a
				{' '}<a href='https://store.ui.com/products/unifi-security-gateway'>USG</a>.
				This allows for creation of a tunnel to a network without any additional hardware.
				The scripts use the semi-reverse-engineered boot sequence configuration of EdgeOS and run the tunnel in parallel to all
				the core functionality of the gateway.
			</>
		),
		image: ubntImg,
		githubLink: 'https://github.com/aprets/ubnt-cloudflared',
		tags: ['Linux', 'Shell Script', 'Reverse Engineering', 'Networking'],
	},
	{
		title: 'aprets.me',
		brief: 'Personal website and Next.js static hosting benchmark',
		description: (
			<>
				{/* <a className='text-inherit' href='https://https://dash.teams.cloudflare.com/'>Cloudflare Tunnel</a> allows for secure
				remote access to a network with no extra configuration and simple remote management from Cloudflare Zero Trust Dashboard.
				This project provides the scripts to install cloudflared (which can create a tunnel to the network) on a
				{' '}<a href='https://store.ui.com/products/unifi-security-gateway'>USG</a>.
				This allows for creation of a tunnel to a network without any additional hardware.
				The scripts use the semi-reverse-engineered boot sequence configuration of EdgeOS and run the tunnel in parallel to all
				the core functionality of the gateway. */}
			</>
		),
		image: apretsImg,
		githubLink: 'https://github.com/aprets/.me',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Tailwind CSS', 'Mantine', 'Cloudflare Workers'],
	},
]
