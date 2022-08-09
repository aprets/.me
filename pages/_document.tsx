/* eslint-disable @typescript-eslint/indent */
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {ServerStyles, createStylesServer} from '@mantine/next'
import {emotionCache} from 'lib/emotionCache'

const stylesServer = createStylesServer(emotionCache)

// eslint-disable-next-line @typescript-eslint/naming-convention
export default class _Document extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps,
			styles: [
				initialProps.styles,
				<ServerStyles html={initialProps.html} server={stylesServer} key='styles' />,
			],
		}
	}

	render() {
		return (
			<Html lang='en'>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
