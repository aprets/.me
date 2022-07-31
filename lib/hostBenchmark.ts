export const hostTag = process.env.NEXT_PUBLIC_HOST ?? 'DEV_SERVER'

const snakeCaseToTitleCase = (input: string) => input.toLowerCase().replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ` ${d.toUpperCase()}`))

export const humanHostName = snakeCaseToTitleCase(hostTag)
