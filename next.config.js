// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: !isProd,
	},
	future: {
		webpack5: true,
	},
	// Usando os redirects built-in do Next.js
	async redirects() {
		return [
			{
				source: '/seja-creator',
				destination: 'https://forms.gle/2rLu4BXpbi3bJjYz5',
				permanent: false,
			},
		];
	},
});
