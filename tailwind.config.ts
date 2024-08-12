import { Vollkorn } from 'next/font/google';
import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const { nextui } = require('@nextui-org/react');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

const addVariablesForColors = ({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) => {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          600: '#475569',
          500: '#64748B',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        // display: ['var(--font-calsans)'],
        vollkorn: ['var(--font-vollkorn)'],
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        title: 'title 3s ease-out forwards',
        'fade-left': 'fade-left 3s ease-in-out forwards',
        'fade-right': 'fade-right 3s ease-in-out forwards',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        'fade-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0%',
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '0%',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },

          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
      },
      screens: {
        laptop: { raw: '(min-width: 1440px)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    nextui(),
    addVariablesForColors,
    require('daisyui'),
  ],
};
export default config;
