/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Gotham Light'],
		  serif: ['ui-serif', 'Georgia'],
		  mono: ['ui-monospace', 'SFMono-Regular'],
		  display: ['Oswald'],
		  body: ['Open Sans'],
		},
		animationDelay: {
		  275: '275ms',
		  5000: '5s',
		},
		animationDuration: {
		  2000: '2s',
		  'long': '10s',
		  'very-long': '20s',
		},
	  },
	},
	plugins: [
	  require('tailwindcss-animated'),
	],
};
