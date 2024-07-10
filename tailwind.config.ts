import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				white: '#fdfdfb',
				'beige-light': '#F3EEEA',
				beige: '#EBE3D5',
				'brown-light': '#B0A695',
				brown: '#776B5D',
				'brown-dark': '#3a2728',
				green: '#ABC4AA',
				red: '#ad253e',
			},
			fontFamily: {
				ms: ['Montserrat', 'sans-serif'],
			},
			height: {
				50: '50dvh',
			},
			animation: {
				typing: 'typing 2.5s steps(35)',
				fade: 'fadeIn 0.5s ease-in-out',
			},
			keyframes: {
				typing: {
					from: {
						width: '0',
					},
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
