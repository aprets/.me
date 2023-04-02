import {ReactNode} from 'react'
import {StaticImageData} from 'next/image'

import Link from 'next/link'

import signaturImg from 'public/signatur.png'
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
import webzImg from 'public/webz.png'

export const tagAreas = {
	'Software Engineering': [
		'TypeScript',
		'JavaScript',
		'Python',
		'Ruby',
		'Java',
		'PHP',
		'Delphi',
		'VB.NET',
		'Go',
		'Node.js',
		'Blob Storage',
		'SQL',
		'Cosmos DB',
		'MongoDB',
		'Firebase',
		'Cloudflare Workers KV',
		'Google Datastore',
		'IndexedDB',
		'HyperV',
		'PowerShell',
		'Shell Script',
		'AI',
		'NLP',
	],
	Web: [
		'Express',
		'Flask',
		'React',
		'Vue',
		'Next',
		'Vite',
		'Jamstack',
		'CMS',
		'Contentful',
		'Kontent',
		'Tailwind CSS',
		'Mantine',
		'Ant Design',
		'Chakra UI',
		'tRPC',
		'Stripe',
		'TrueLayer',
		'Realtime',
		'Socket.IO/WebSockets',
	],
	'Cloud / DevOps': [
		'Google Cloud',
		'Microsoft Azure',
		'AWS',
		'Containers',
		'Cloud Functions',
		'VMs',
		'Cloudflare Workers',
		'Docker',
		'KVM',
		'VMWare',
		'Terraform',
		'GitHub Actions',
		'Azure DevOps',
		'Linux',
		'Networking',
		'VPN',
		'Server Management',

	],
	InfoSec: [
		'Reverse Engineering',
		'Kali Linux',
		'Wireshark',
		'mitmproxy',
		'Cobalt Strike',
		'WiFi Pineapple',
		'USB Rubber Ducky',
		'EXE Reversing',
	],
} as const

export const allTags = [...Object.keys(tagAreas) as (keyof typeof tagAreas)[], ...Object.values(tagAreas).flat()] as const

export type Tag = typeof allTags[number]

export type Project = {
	title: string,
	brief: string,
	description: ReactNode,
	image?: StaticImageData,
	githubLink?: string,
	tags: Tag[],
}

export const projects: Project[] = [
	{
		title: 'Signatur',
		brief: 'Fast, Free & Private way to sign PDFs',
		description: (
			<>
				Available at <a href='https://signatur.aprets.me' className='underline decoration-secondary-500 decoration-2'>signatur.aprets.me</a>.<br />
				A simple static in-browser app that allows you to sign PDFs.
				Developed due to the apparent lack of simple, free & user-friendly PDF signing solutions.
				The app is completely client-side and does not send user data to any servers.
				You can select images of your signatures & initials from your device
				and the app will place a random initial or signature in the PDF where desired.
				Once done you can download the signed PDF.
			</>
		),
		image: signaturImg,
		githubLink: 'https://github.com/aprets/signatur',
		tags: ['JavaScript', 'TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Software Engineering', 'Web'],
	},
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
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Vite', 'Realtime', 'Socket.IO/WebSockets', 'Docker', 'GitHub Actions', 'Mantine', 'PowerShell', 'Networking', 'Server Management', 'Software Engineering', 'Web'],
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
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Next', 'Google Cloud', 'Containers', 'VMs', 'SQL', 'Docker', 'Terraform', 'Realtime', 'Firebase', 'GitHub Actions', 'Mantine', 'Software Engineering', 'Web', 'Cloud / DevOps'],
	},
	{
		title: 'Infrastructure Management Automation at Elanco',
		brief: 'Turned 2 week long processes into a 5 minute automation',
		description: (
			<>
				Lead a small team in automating Elanco&apos;s infrastructure management process.
				Turned multiple manual infrastructure requests that took 2 weeks to complete into an automation which required
				no cloud platform knowledge and took 5 minutes to run. Used Infrastructure-as-code, Node.js, Terraform and deeply
				integrated with GitHub, GitHub Actions and Azure DevOps APIs to simplify infrastructure management. Successfully
				presented the solution to the company&apos;s CTO leading to the tool&apos;s use as a basis for automation work both internally
				and on external vendor projects.
			</>
		),
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'Terraform', 'Microsoft Azure', 'Google Cloud', 'Containers', 'Cloud Functions', 'Azure DevOps', 'GitHub Actions', 'Networking', 'Software Engineering', 'Web', 'Cloud / DevOps'],
	},
	{
		title: 'Next Generation Website Toolkit at Elanco',
		brief: 'Overhauled website development and management experience',
		description: (
			<>
				Co-designed and developed a next-generation toolkit for website development and management at Elanco.
				Tightly integrated TypeScript, React, Next.js with Kentico Kontent Headless CMS to produce an intuitive visual
				“What You See Is What You Get” website building and editing experience which was drastically more flexible and capable.
				The new solution significantly reduced time to market and brought order of magnitude cost savings.
				Worked with users and stakeholders to collect feedback and enhance the solution.
				The project received C-Level sponsorship, runs over 100 webpages and is used in onboarding of 100+ site rebuilds as part of Bayer acquisition.
			</>
		),
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'Next', 'React', 'Tailwind CSS', 'CMS', 'Kontent', 'Jamstack', 'Microsoft Azure', 'Blob Storage', 'Azure DevOps', 'GitHub Actions', 'Software Engineering', 'Web'],
	},
	{
		title: 'aprets.me',
		brief: 'Personal website and Next.js static hosting benchmark',
		description: (
			<>
				Personal website that you are currently visiting 🙃. Built in Next.js instead of static generators
				like <a className='text-inherit' href='https://astro.build/'>Astro</a> to allow for potential future server-side needs.
				The website is hosted on and load balanced between Vercel and Cloudflare Pages to compare their
				static hosting and CDN performance. The website is in itself a benchmark, collecting page load
				statistics between the two platforms. See <Link href='/benchmark'><a className='text-inherit'>/benchmark</a></Link> for more details and results!
			</>
		),
		image: apretsImg,
		githubLink: 'https://github.com/aprets/.me',
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Jamstack', 'Tailwind CSS', 'Mantine', 'Cloud Functions', 'Cloudflare Workers', 'Cloudflare Workers KV', 'Software Engineering', 'Web'],
	},
	{
		title: 'Webz VPN',
		brief: 'A VPN business I ran while in High School',
		description: (
			<>
				A profitable VPN service fully developed and managed by me which had multiple UK servers and over 100 customers.
				Set up the server and cloud infrastructure for a VPN service to function.
				Designed Docker micro-services for the service.
				Developed and deployed custom OpenVPN based software for clients to connect to the service.
				Installed and managed a billing solution to receive payments from customers. Provided customer support to users of the service.
				Operations were halted due to the business taking too much of my personal time while in University.
			</>
		),
		image: webzImg,
		githubLink: 'https://github.com/webzvpn',
		tags: ['PHP', 'VB.NET', 'Docker', 'SQL', 'Google Cloud', 'AWS', 'VMs', 'Containers', 'KVM', 'VMWare', 'Linux', 'Networking', 'VPN', 'Server Management', 'Kali Linux', 'Wireshark', 'mitmproxy', 'Cobalt Strike', 'Shell Script', 'CMS', 'Software Engineering', 'Web', 'Cloud / DevOps', 'InfoSec'],
	},
	{
		title: 'Recruitment & Student Support at Elanco',
		brief: 'Helped technically assess candidates & mentored university students',
		description: (
			<>
				Took part in the recruitment process for Software Engineering and IT roles. Designed and assessed technical interviews
				and helped with interviewing applicants and evaluating their performance. Participated in two “Client Projects” with
				Sheffield Hallam University where students worked on projects with Elanco as a client. Attended multiple meetings as an
				engineer from Elanco&apos;s side to work with the students to convert requirements to more detailed designs and then solutions.
				Assisted with implementation details to meet Elanco&apos;s standards. This included mentoring different students and groups
				in multiple engagements with Sheffield Hallam University.
			</>
		),
		tags: ['JavaScript', 'Python', 'Node.js', 'Express', 'React', 'Microsoft Azure', 'AI', 'Software Engineering', 'Web', 'Cloud / DevOps', 'InfoSec'],
	},
	{
		title: 'Google Cloud Migration at Elanco',
		brief: 'Explored, analysed and evaluated the platform to improve operations',
		description: (
			<>
				Worked with Google Cloud representatives during Google Cloud migration to analyse and evaluate cloud services new to the company,
				design and redefine architectures compatible with existing processes. Used Infrastructure-as-Code and Terraform to explore and
				implement designed architectures in practice evaluating real-world performance and limitations. Heavily pushed for use of innovative
				services such as Cloud Run resulting in better performance and orders of magnitude cost savings.
			</>
		),
		tags: ['Terraform', 'SQL', 'Firebase', 'MongoDB', 'Google Cloud', 'Microsoft Azure', 'Containers', 'Docker', 'Networking', 'Linux', 'Software Engineering', 'Web', 'Cloud / DevOps'],
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
		tags: ['JavaScript', 'TypeScript', 'GitHub Actions', 'Software Engineering', 'Cloud / DevOps'],
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
				Most of the functionality is nowadays part
				of <a href='https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-node-deployments-with-rancher-2-1-kubernetes-and-docker-machine-on-ubuntu-18-04' className='text-inherit'>the core Rancher project.</a>
			</>
		),
		image: infraryImg,
		githubLink: 'https://github.com/aprets/infrary',
		tags: ['Python', 'Docker', 'JavaScript', 'Vue', 'Flask', 'MongoDB', 'Google Datastore', 'Shell Script', 'Server Management', 'Linux', 'Jamstack', 'Google Cloud', 'Containers', 'Software Engineering', 'Web', 'Cloud / DevOps', 'InfoSec'],
	},
	{
		title: 'IT at Prets Industriepark',
		brief: 'Office IT',
		description: (
			<>
				Designed, implemented and managed all office IT infrastructure. Installed HPE/Dell servers (including OS installation and management).
				Designed and managed LAN and WLAN networks with Ubiquiti Hardware (Routers, Switches, Access Points). Set up and managed
				a VMware vSphere including all the underlying software and hardware. Monitored IT Infrastructure and networks to maintain availability.
				Troubleshooted IT infrastructure as well as office hardware and software (PCs, Mobile Phones, Laptops).
			</>
		),
		tags: ['AWS', 'Containers', 'Docker', 'VMs', 'KVM', 'VMWare', 'Linux', 'Networking', 'VPN', 'Server Management', 'Kali Linux', 'mitmproxy', 'Cobalt Strike', 'WiFi Pineapple', 'USB Rubber Ducky', 'SQL', 'Shell Script', 'PowerShell', 'Cloud / DevOps', 'InfoSec'],
	},
	{
		title: 'Quality & Security Testing Framework at Elanco',
		brief: 'Improved and unified software quality and security testing',
		description: (
			<>
				Designed and developed a Software Quality and Security Testing Framework for the DevOps team. Replaced multiple
				fragmented CI pipelines with a powerful and easy-to-use unified Python powered solution. Automatically identified
				and classified different parts of the codebase to run a maximally comprehensive suite of quality and security tests.
				Deeply integrated with Azure DevOps (API) to collect data and utilise its UI to display results, hints and suggestions
				as well as allow for project configuration. Provided more powerful scanning and testing capabilities and improved user
				experience by directly highlighting code snippets in question in Azure DevOps UI and providing comprehensive guidance on
				resolving issues. Final solution only required one line of code to use.
			</>
		),
		tags: ['Python', 'Microsoft Azure', 'Azure DevOps', 'Software Engineering', 'Cloud / DevOps', 'InfoSec'],
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
		tags: ['Linux', 'Shell Script', 'Reverse Engineering', 'Networking', 'Server Management', 'InfoSec'],
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
		tags: ['JavaScript', 'TypeScript', 'React', 'Next', 'Chakra UI', 'Python', 'Flask', 'Google Cloud', 'Cloud Functions', 'Firebase', 'Google Datastore', 'GitHub Actions', 'TrueLayer', 'AI', 'NLP', 'Software Engineering', 'Web', 'Cloud / DevOps'],
	},
	{
		title: 'App & Infrastructure Process Optimisation at Elanco',
		brief: 'Helped improve and digitise internal processes',
		description: (
			<>
				Worked with stakeholders to further streamline and automate Elanco&apos;s infrastructure and application processes.
				Developed an internal Express.js REST API offering unified visibility into existing and future applications,
				their characteristics and performance. Additionally developed a powerful React and Tailwind CSS based web interface to query the API.
				This provided rich reports on applications individually, in groups, by technologies / software stack / internal organisational units etc.
				Further extended and iterated on the project for it to take over part of the application approval and deployment process entirely.
			</>
		),
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Ant Design', 'Tailwind CSS', 'Microsoft Azure', 'Cloud Functions', 'Cosmos DB', 'MongoDB', 'Blob Storage', 'Azure DevOps', 'GitHub Actions', 'Software Engineering', 'Web'],
	},
	{
		title: 'DevOps & Automation Dashboard at Elanco',
		brief: 'Converted complex log-like data to a powerful & intuitive dashboard',
		description: (
			<>
				Designed and developed a dashboard UI for the internal Automation / DevOps framework. Used Express, React.js, Tailwind
				to convert difficult to trace and navigate log-like data to a user-friendly interactive Web UI. The dashboard presented
				a holistic overview of past and current automation runs and vastly improved UX by intelligently analysing job and task
				status and results to surface any issues to the user. Allowed for intuitive interactive traversal and search down the
				automation hierarchy to simplify troubleshooting.
			</>
		),
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Tailwind CSS', 'Microsoft Azure', 'Azure DevOps', 'Cosmos DB', 'MongoDB', 'VPN', 'Software Engineering', 'Web'],
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
		tags: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Next', 'CMS', 'Contentful', 'Jamstack', 'Python', 'Google Cloud', 'Containers', 'Cloud Functions', 'Firebase', 'Realtime', 'Stripe', 'Mantine', 'Docker', 'GitHub Actions', 'AI', 'NLP', 'Software Engineering', 'Web', 'Cloud / DevOps'],
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
		tags: ['Python', 'Flask', 'Google Cloud', 'Containers', 'Docker', 'GitHub Actions', 'AI', 'NLP', 'Software Engineering', 'Cloud / DevOps'],
	},
	{
		title: 'Library for controlling Midea AC',
		brief: 'Fixed and refactored library for controlling Midea AC over the internet',
		description: (
			<>
				Refactored and updated multiple upstream libraries to support new cloud communications protocol
				and correctly interact with new AC models. Figured out the correct implementation via reverse
				engineering original apps, IR remote codes and based on existing libraries.
			</>
		),
		image: mideaImg,
		githubLink: 'https://github.com/aprets/midea-ac-lib',
		tags: ['Python', 'Kali Linux', 'Wireshark', 'mitmproxy', 'WiFi Pineapple', 'Reverse Engineering', 'Networking', 'Software Engineering', 'InfoSec'],
	},
]
