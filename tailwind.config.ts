import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1a56db',
        'brand-blue-dark': '#1240a8',
        'brand-blue-light': '#ebf0ff',
      }
    }
  },
  plugins: [],
}
export default config