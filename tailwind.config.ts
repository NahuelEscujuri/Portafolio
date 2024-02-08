import type { Config } from 'tailwindcss'

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
        main:"#14FFEC",
        dark:"#212121",
        light:"#323232",
        text:"#0D7377",
      }
    },
  },
  screens: {
    'lm': {'min':'1024px'},
    'lg': {'max':'1024px'},
    'md': {'max': '768px'},
  },
  plugins: [],
}
export default config
