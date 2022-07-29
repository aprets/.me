// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const tailwindColors = require('tailwindcss/colors')

// Remove deprecated colors in default tailwind palette to fix warning
delete tailwindColors.lightBlue
delete tailwindColors.warmGray
delete tailwindColors.trueGray
delete tailwindColors.coolGray
delete tailwindColors.blueGray

console.dir(tailwindColors)

const mantineTailwindColors = Object.fromEntries(
	Object.entries(tailwindColors)
		.filter(([k, v]) => typeof v !== 'string')
		.map(([k, v]) => [k, Object.values(v)]),
)

console.dir(mantineTailwindColors)
