/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(400px, 1fr));'
      }
    },
	},
	plugins: [],
}
