const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono]
      },
      fontSize: {
        xs: [
          '0.875rem',
          {
            lineHeight: '1.65rem',
            letterSpacing: '0.0175rem'
          }
        ],
        sm: [
          '0.925rem',
          {
            lineHeight: '1.9rem',
            letterSpacing: '0.0175rem'
          }
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.85rem',
            letterSpacing: '-0.02rem'
          }
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '2.2rem',
            letterSpacing: '-0.015rem'
          }
        ],
        xl: [
          '1.345rem',
          {
            lineHeight: '2.45rem',
            letterSpacing: '-0.0475rem'
          }
        ],
        '2xl': [
          '1.6rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.03rem'
          }
        ],
        '3xl': [
          '2.25rem',
          {
            lineHeight: '3.35rem',
            letterSpacing: '-0.06rem'
          }
        ],
        '4xl': [
          '2.65rem',
          {
            lineHeight: '3.85rem',
            letterSpacing: '-0.05rem'
          }
        ],
        '5xl': [
          '3.2rem',
          {
            lineHeight: '3.7rem',
            letterSpacing: '-0.1rem'
          }
        ]
      },
      colors: {
        cobalt: {
          light: '#6369ff',
          DEFAULT: '#5b53ff',
          dark: '#5237f9'
        },
        electric: {
          light: '#87ffff',
          DEFAULT: '#47ebeb',
          dark: '#00b8b9'
        },
        iris: {
          light: '#9f75f9',
          DEFAULT: '#8952fd',
          dark: '#632cda'
        },
        coral: {
          light: '#fca493',
          DEFAULT: '#fc856d',
          dark: '#e36b52'
        },
        grey: {
          0: '#fcfcfc',
          50: '#f5f5f8',
          80: '#f0f0f7',
          100: '#e8e9f3',
          120: '#dedfee',
          150: '#d5d6ea',
          200: '#c1c2d9',
          300: '#a3a4bf',
          400: '#81859f',
          500: '#6a6b83',
          600: '#4f5167',
          700: '#36384a',
          800: '#2e2f40',
          880: '#252736',
          900: '#1d1f2c',
          930: '#161722',
          950: '#12131d',
          970: '#0d0d18',
          1000: '#000000'
        }
      },
      spacing: {
        wordmark: 'theme(spacing.6)',
        header: '64px',
        content: 'calc(100vh - theme(spacing.header))'
      },
      boxShadow: {
        DEFAULT: '0px 2px 4px rgba(0,0,0,0.1)',
        'border-bottom': 'inset 0 -1px 0 0 rgba(0,0,0,0.1)',
        'border-bottom-dark': 'inset 0 -1px 0 0 rgba(255,255,255,0.1)'
      },
      content: {
        link: `url(
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-testid='geist-icon' fill='none' height='17px' shape-rendering='geometricPrecision' stroke='%2381859f' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' viewBox='0 0 24 24' width='17px' style='color: %2381859f;'%3E%3Cpath d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'%3E%3C/path%3E%3Cpath d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'%3E%3C/path%3E%3C/svg%3E"
        )`
      }
    }
  }
};
