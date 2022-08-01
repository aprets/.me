export function StatsGroup({data, className}: {
	data: {title: string; stats: string; description: string}[],
	className?: string,
}) {
	const stats = data.map((stat) => (
		<div key={stat.title} className='flex-1 pt-8 mt-8 first:pt-0 first:mt-0 md:pt-0 md:mt-0 first:pl-0 first:ml-0 md:pl-8 md:ml-8'>
			<p className='text-white font-bold text-3xl mb-4'>{stat.stats}</p>
			<p className='text-white font-bold text-sm mb-2'>{stat.title}</p>
			<p className='text-white'>{stat.description}</p>
		</div>
	))
	return <div className={`flex flex-col md:flex-row bg-gradient-to-bl from-primary-400 to-primary-600 p-8 rounded-lg ${className}`}>{stats}</div>
}
