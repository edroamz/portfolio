const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
        sans: ['IBM Plex Sans', ...fontFamily.sans]
      },
      fontSize: {
        sm: [
          '0.875rem',
          {
            lineHeight: '1.9rem',
            letterSpacing: '0.0175rem'
          }
        ],
        base: ['1rem', '1.85rem'],
        lg: [
          '1.125rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0.0025rem'
          }
        ],
        xl: [
          '1.275rem',
          {
            lineHeight: '2.1rem',
            letterSpacing: '-0.035rem'
          }
        ],
        '2xl': [
          '1.65rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.065rem'
          }
        ],
        '3xl': [
          '2.1rem',
          {
            lineHeight: '2.35rem',
            letterSpacing: '-0.075rem'
          }
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.085rem'
          }
        ],
        '5xl': [
          '3.35rem',
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
        },
        header: 'hsla(0,0%,100%,.8)',
        'header-dark': 'hsla(240,29.7%,7.3%,.8)'
      },
      spacing: {
        wordmark: 'theme(spacing.6)',
        header: '76px',
        content: 'calc(100vh - theme(spacing.header))'
      },
      boxShadow: {
        DEFAULT: '0px 2px 4px rgba(0,0,0,0.1)',
        'border-bottom': 'inset 0 -1px 0 0 rgba(0,0,0,0.1)',
        'border-bottom-dark': 'inset 0 -1px 0 0 rgba(255,255,255,0.1)'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      const fonts = {
        '@font-face': [
          {
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'normal',
            fontWeight: '100 900',
            fontDisplay: 'optional',
            src: 'url(/fonts/ibm-plex-sans-var.woff2) format("woff2");'
          },
          {
            fontFamily: 'IBM Plex Sans',
            fontStyle: 'italic',
            fontWeight: '100 900',
            fontDisplay: 'optional',
            src: 'url(/fonts/ibm-plex-sans-var-italic.woff2) format("woff2");'
          }
        ]
      };
      addBase(fonts);
    })
  ]
};
