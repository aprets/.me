import {ReactNode} from 'react'
import {StaticImageData} from 'next/image'

import Link from 'next/link'

import vmoteImg from 'public/vmote.png'
import clearpathImg from 'public/clearpath.png'
import ubntImg from 'public/ubnt-cloudflared.png'
import apretsImg from 'public/aprets.png'
import ccImg from 'public/cc-ci.png'
import infraryImg from 'public/infrary.png'
import chattyChefImg from 'public/chatty-chef.png'
import bainImg from 'public/bain.png'
import mideaImg from 'public/midea.png'
import pmsImg from 'public/pms.png'

export const techTags = [
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
	'Chakra UI',
	'Mantine',
	'HyperV',
	'PowerShell',
	'Shell Script',
	'Jamstack',
	'Stripe',
	'TrueLayer',
] as const

export const areaTags = [
	'Linux',
	'Reverse Engineering',
	'Networking',
	'AI',
	'NLP',
] as const

export const projectTags = [
	...techTags,
	...areaTags,
] as const

export type ProjectTag = typeof projectTags[number]

export type Project = {
	title: string,
	brief: string,
	description: ReactNode,
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
				{' '}<a className='text-inherit' href='https://store.ui.com/products/unifi-security-gateway'>USG</a>.
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
				Personal website that you are currently visiting 🙃. Built in Next.js instead of static generators
				like <a className='text-inherit' href='https://astro.build/'>Astro</a> to allow for potential future server-side needs.
				The website is hosted on and load balanced between Vercel and Cloudflare Pages to compare their
				static hosting and CDN performance. The website is in itself a benchmark collecting page load
				statistics between the two platforms. See <Link href='/benchmark'><a className='text-inherit'>/benchmark</a></Link> for more details and results!
			</>
		),
		image: apretsImg,
		githubLink: 'https://github.com/aprets/.me',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Tailwind CSS', 'Mantine', 'Cloudflare Workers'],
	},
	{
		title: 'Conventional Commits GitHub Action',
		brief: 'An updated and extended GitHub Action to enforce Conventional Commits',
		description: (
			<>
				Created for the needs of a separate project. This action fixes upstream bugs and adds extra features
				such as customizing allowed conventional commit types. The action reads the relevant commits
				(intended for use on PRs) and checks if all commit messages comply with conventional commits.
				If not the action will fail the PR check.
			</>
		),
		image: ccImg,
		githubLink: 'https://github.com/aprets/action-conventional-commits',
		tags: ['JavaScript', 'TypeScript', 'GitHub Actions'],
	},
	{
		title: 'Infrary',
		brief: '2017-18 CS Project. IaaS/BYOD --> Container PaaS orchestrator.',
		description: (
			<>
				A project to simplify management of cloud infrastructure needed to run containers in production in 2017.
				It worked with <a href='https://digitalocean.com/' className='text-inherit'>DigitalOcean</a> and BYO docker hosts.
				Docker and <a href='https://www.rancher.com/' className='text-inherit'>Rancher</a> were used to manage containers once the host VM or server were set up.
				The project also included a small ODM with connectors for <a href='https://www.mongodb.com/' className='text-inherit'>MongoDB</a> {' '}
				and <a href='https://cloud.google.com/datastore/' className='text-inherit'>GCP Datastore</a> as well as a custom JSON validation layer.
				Most of the functionality is now part
				of <a href='https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-node-deployments-with-rancher-2-1-kubernetes-and-docker-machine-on-ubuntu-18-04' className='text-inherit'>the core Rancher project.</a>
			</>
		),
		image: infraryImg,
		githubLink: 'https://github.com/aprets/infrary',
		tags: ['JavaScript', 'TypeScript', 'GitHub Actions'],
	},
	{
		title: 'Chatty Chef',
		brief: 'CMS-powered Jamstack restaurant platform with online ordering and an AI chatbot',
		description: (
			<>
				Contentful CMS driven restaurant platform built as a Jamstack app. Automated static rebuild and redeploy via GitHub Actions.
				Backend services provided by Firestore, Firebase Authentication, Stripe, Google Cloud Functions and a custom serverless Chatbot
				running in Google Cloud Run.
			</>
		),
		image: chattyChefImg,
		githubLink: 'https://github.com/aprets/Chatty-Chef',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Contentful', 'Jamstack', 'Python', 'Google Cloud', 'Firebase', 'Stripe', 'Mantine', 'Docker', 'GitHub Actions', 'AI', 'NLP'],
	},
	{
		title: 'Grocery NLP Chatbot',
		brief: 'NLP chatbot for ordering online grocery delivery',
		description: (
			<>
				The bot uses Spacy and Scikit-learn with custom models trained on the Sainsbury&apos;s product dataset.
				The bot helps the user search for and select products for the order and arrange delivery to their address
				at the chosen timeslot.
			</>
		),
		image: bainImg,
		githubLink: 'https://github.com/aprets/Grocery-AI-Chatbot',
		tags: ['Python', 'Google Cloud', 'Docker', 'GitHub Actions', 'AI', 'NLP'],
	},
	{
		title: 'Library for controlling Midea AC',
		brief: 'Fixed and refactored library for controlling Midea AC over the internet',
		description: (
			<>
				Refactored and update multiple upstream libraries to support new cloud communications protocol
				and correctly interact with new AC models. Figured out the correct implementation via reverse
				engineering original apps, ir remote codes and based on existing libraries.
			</>
		),
		image: mideaImg,
		githubLink: 'https://github.com/aprets/midea-ac-lib',
		tags: ['Python', 'Reverse Engineering', 'Networking'],
	},
	{
		title: 'Property Management System',
		brief: 'A custom property management system for a small real estate business',
		description: (
			<>
				Built as a Jamstack application, the system is designed to be easily extensible and easy to use. It accommodates
				common workflows with a highly interactive and powerful UI. Many common processes are automated. Bank accounts are
				deeply integrated and automatically synchronized with the system via TrueLayer APIs.
			</>
		),
		image: pmsImg,
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Chakra UI', 'Google Cloud', 'Firebase', 'TrueLayer'],
	},
]
