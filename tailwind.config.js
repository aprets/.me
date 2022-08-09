// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
	corePlugins: {
		preflight: true,
	},
	important: '#__next',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.purple,
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
				],
			},
		},
	},
	plugins: [],
}
