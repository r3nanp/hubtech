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
	async redirects() {
		return [
			{
				source: '/discord',
				destination: 'https://discord.gg/RMDSHVkDmE',
				permanent: false,
			},
			{
				source: '/seja-creator',
				destination: 'https://forms.gle/2rLu4BXpbi3bJjYz5',
				permanent: false,
			},
		];
	},
});
