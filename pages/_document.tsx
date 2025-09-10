import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	const isProd = process.env.NODE_ENV === 'production'
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' type='image/png' href={isProd ? `/next-pwa/images/favicon.png` : '/images/favicon.png'} />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
				/>
				<meta
					name='theme-color'
					content='#18181b'
					media='(prefers-color-scheme: dark)'
				/>
				<meta name='theme-color' content='#f4f4f5' />
				<link rel='apple-touch-icon' href={isProd ? '/next-pwa/images/icon-maskable-512.png' : '/images/icon-maskable-512.png'} />
				<link rel='manifest' href={isProd ? `/next-pwa/manifest.json` : '/manifest.json'} />
				<script id="wepp-install-modal" src={isProd ? '/next-pwa/install/index.js' : '/install/index.js'} defer></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
