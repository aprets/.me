import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function CV() {
	const [checked, setChecked] = useState(false)
	const router = useRouter()
	useEffect(() => {
		if (router.isReady) {
			const secret = router.query?.['']
			if (secret) {
				setChecked(true)
				router.push(`https://drive.google.com/uc?id=${secret}`)
			} else {
				router.push('/')
			}
		}
	}, [router])
	return (
		<h1 className='text-xl text-center mb-8'>
			{checked ? (
				<span>Secret verified. Download or view started.</span>
			) : (
				<span>Checking your url secret...</span>
			)}
		</h1>
	)
}
