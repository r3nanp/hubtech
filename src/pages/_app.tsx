import Header from 'components/Header';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/global.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>HUB TECH</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-512.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#06092B" />
				<meta
					name="description"
					content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
				/>
			</Head>
			<div className="min-h-screen h-screen w-full">
				<Header />
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default App;
