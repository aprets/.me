/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	STATS: KVNamespace,
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
	'Access-Control-Max-Age': '86400',
}

const validHosts = ['CLOUDFLARE_PAGES', 'VERCEL'] as const

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext,
	): Promise<Response> {
		if (request.method === 'OPTIONS') {
			return new Response(null, {headers: corsHeaders})
		}
		if (request.method !== 'GET') {
			return new Response('Method not allowed', {status: 405})
		}
		const dataPromises = validHosts.map((host) => env.STATS.get<{num: number, ttfb: number, fcp: number} | null>(host, 'json'))
		const data = await Promise.all(dataPromises)
		const response = data.reduce((acc, hostData, index) => ({
			...acc,
			[validHosts[index]]: {
				ttfb: hostData ? hostData.ttfb : -1,
				fcp: hostData ? hostData.fcp : -1,
			},
		}), {})
		return new Response(JSON.stringify(response), {headers: corsHeaders})
	},
}
