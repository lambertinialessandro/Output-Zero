import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    boxShadow: {
      none: 'none',
      custom: 'rgba(0, 0, 0, 0.12) 0px 2px 8px 0px',
      'custom-darken': 'rgba(0, 0, 0, 0.48) 0px 2px 8px 0px',
      'theme-md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      'theme-lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08),0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      'theme-sm': '0px 1px 3px 0px rgba(16, 24, 40, 0.1),0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
      'theme-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      'theme-xl': '0px 20px 24px -4px rgba(16, 24, 40, 0.08),0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
    },
    zIndex: {
      1: 1,
      9: 9,
      99: 99,
      999: 999,
      9999: 9999,
      99999: 99999,
      999999: 999999,
    },
    extend: {
      colors: {
        brand: {
          25: '#fff7ec',
          50: '#ffedd6',
          100: '#ffd8a8',
          200: '#ffc078',
          300: '#ffa94d',
          400: '#ff9f1a',
          500: '#ff9800',
          600: '#e68900',
          700: '#cc7a00',
          800: '#a86300',
          900: '#7a4900',
          950: '#452900',
        },
        gray: {
          25: '#fcfcfc',
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          750: '#333',
          800: '#27272a',
          900: '#141414',
          950: '#09090b',
        },
      },
      shadow: {
        theme: {
          md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
          lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08),0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
          sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.1),0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
          xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08),0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        },
      },
      fontSize: {
        'title-2xl': ['72px', { lineHeight: '90px' }],
        'title-xl': ['60px', { lineHeight: '72px' }],
        'title-lg': ['48px', { lineHeight: '60px' }],
        'title-md': ['36px', { lineHeight: '44px' }],
        'title-sm': ['30px', { lineHeight: '38px' }],
        'theme-xl': ['20px', { lineHeight: '30px' }],
        'theme-sm': ['14px', { lineHeight: '20px' }],
        'theme-xs': ['12px', { lineHeight: '18px' }],
      },
      animation: {
        blob: 'blob 12s infinite',
        gradient: 'gradient 15s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          backgroundImage: 'linear-gradient(to right, #465fff, #9cb9ff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        },
      });
    }),
  ],
};

export default config;
