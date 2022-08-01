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
	LOADS: KVNamespace,
	STATS: KVNamespace,
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}

const validHosts = ['CLOUDFLARE_PAGES', 'VERCEL', 'DEV_SERVER'] as const

export interface StatsBody {
	ttfb: number,
	fcp: number,
	host: typeof validHosts[number],
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext,
	): Promise<Response> {
		if (request.method !== 'POST') {
			return new Response('Method not allowed', {status: 405})
		}
		let currentTtfb: StatsBody['ttfb']
		let currentFcp: StatsBody['fcp']
		let host: StatsBody['host']
		try {
			const body: StatsBody = await request.json()
			currentTtfb = body.ttfb
			currentFcp = body.fcp
			host = body.host
			if (!currentFcp || !currentTtfb || typeof currentFcp !== 'number' || typeof currentTtfb !== 'number' || !validHosts.includes(host)) {
				throw new Error('Invalid stats body')
			}
		} catch {
			return new Response('Invalid Request', {status: 400})
		}

		const key = `${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`
		await env.LOADS.put(key, JSON.stringify({host, ttfb: currentTtfb, fcp: currentFcp}))

		const hostStats: {num: number, ttfb: number, fcp: number} | null = await env.STATS.get(host, 'json')
		if (hostStats) {
			// eslint-disable-next-line @typescript-eslint/no-shadow
			const {num, ttfb, fcp} = hostStats
			await env.STATS.put(host, JSON.stringify({
				num: num + 1,
				ttfb: (ttfb * num + currentTtfb) / (num + 1),
				fcp: (fcp * num + currentFcp) / (num + 1),
			}))
		} else {
			await env.STATS.put(host, JSON.stringify({num: 1, ttfb: currentTtfb, fcp: currentFcp}))
		}

		return new Response()
	},
}
