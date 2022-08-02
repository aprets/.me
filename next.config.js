/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		images: {
			unoptimized: process.env.HOST === 'CLOUDFLARE_PAGES',
		},
	},
})
