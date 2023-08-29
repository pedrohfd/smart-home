import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: '#1E5AFA',
      },

      transformOrigin: {
        'left-center': 'left center',
      },

      top: {
        100: '30rem',
      },
    },
  },
  plugins: [],
}
export default config
