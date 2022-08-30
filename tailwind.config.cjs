/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			colors: {
				light: 'var(--light-color)',
				dark: 'var(--dark-color)',
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				white: 'var(--white-color)'
			},
			fontFamily: {
				sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
