import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      clash_display: ['var(--font-clash_display)'],
    },
    extend: {
      fontFamily: {
        panchang: ['var(--font-panchang)'],
      },
      keyframes: {
        progressBar: {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        },
        slideIn: {
          from: { transform: 'translateY(1rem)' },
          to: { transform: 'translateY(0)' },
        },
        compass: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1) rotate(80deg)' },
          '100%': { transform: 'scale(1) rotate(-180deg)' },
        },
      },
      animation: {
        progressBar: 'progressBar 7s linear forwards',
        slideIn: 'slideIn 200ms ease-in',
        compass: 'compass 2s alternate infinite',
      },
      screens: {
        xs: '512px',
      },
    },
  },
  plugins: [],
}
export default config
