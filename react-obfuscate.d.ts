import type React from 'react'

declare module 'react-obfuscate';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (props: {
	email?: string,
	headers?: object,
	tel?: string,
	sms?: string,
	facetime?: string,
	href?: string,
	linkText?: string,
	obfuscate?: boolean,
	obfuscateChildren?: boolean,
	element?: string,
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}) => React.ReactNode
