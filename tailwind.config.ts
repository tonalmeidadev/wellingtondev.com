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
        'step-1': {
          '0%, 20%': { opacity: '1' },
          '25%, 70%': { opacity: '0.3' },
          '75%, 100%': { opacity: '1' },
        },
        'step-2': {
          '0%, 20%': { opacity: '0.3' },
          '25%, 70%': { opacity: '1' },
          '75%, 100%': { opacity: '0.3' },
        },
        'slide-date-s': {
          '0%, 20%': { opacity: '0', transform: 'translateY(2rem)' },
          '25%, 45%': { opacity: '1', transform: 'translateY(0)' },
          '50%, 70%': { opacity: '1', transform: 'translateY(0)' },
          '75%, 95%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '0', transform: 'translateY(2rem)' },
        },
        'slide-date-e': {
          '0%, 20%': { opacity: '1', transform: 'translateY(0)' },
          '25%, 45%': { opacity: '0', transform: 'translateY(-2rem)' },
          '50%, 70%': { opacity: '0', transform: 'translateY(-2rem)' },
          '75%, 95%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'step-1': 'step-1 8s linear infinite',
        'step-2': 'step-2 8s linear infinite',
        'slide-date-s': 'slide-date-s 8s linear infinite',
        'slide-date-e': 'slide-date-e 8s linear infinite',
      },
      screens: {
        xs: '512px',
      },
    },
  },
  plugins: [],
}

export default config
