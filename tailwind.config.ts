import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  colors: {
    'tahiti': '#3ab7bf',
    'orange': '#fb923c',
    'gray': '#f9fafb',
    'transparent': 'rgba(255, 255, 255, 0)',
    'white': '#f8fafc',
    'black': '#000000',
    'red': '#ef4444'
  },
  plugins: [],
}
export default config
