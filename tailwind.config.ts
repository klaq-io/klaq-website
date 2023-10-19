import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const KLAQ_COLORS = {
  50: '#f5f8f7',
  100: '#dee9e7',
  200: '#bcd3ce',
  300: '#93b5af',
  400: '#709892',
  500: '#527a75',
  600: '#40615d',
  700: '#364f4c',
  800: '#2e4140',
  900: '#293837',
  950: '#141f1f',
}

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
    colors: {
      klaq: KLAQ_COLORS,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      blue: colors.blue,
      success: colors.emerald,
      warning: colors.orange,
      danger: colors.red,
      pink: colors.pink,
      green: colors.green,
      red: colors.red,
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
