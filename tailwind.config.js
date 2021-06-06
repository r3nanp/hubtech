module.exports = {
	mode: 'jit',
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'h-black': '#0A0E16',
				'h-pink': '#F72585',
				'h-bluish-black': '#111827',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
