/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'android': {
          DEFAULT: '#3DDC84',
          light: '#5be398',
          glow: '#36EA66',
          dark: '#1b8c4c',
          muted: '#1e3828',
        },
        'cyber': {
          cyan: '#00F0FF',
          orange: '#FF7300',
          amber: '#FFB700',
          purple: '#BF00FF',
          pink: '#FF0055',
        },
        'pixel': {
          bg: '#0A090F',
          surface: '#111118',
          card: '#14141E',
          cardHover: '#181824',
          border: '#232332',
          borderLight: '#323246',
          yellow: '#FFD600',
        }
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-tech': '0.25em',
      },
      animation: {
        'blink': 'tw-blink 1s step-start infinite',
        'pulse-glow': 'pulse-glow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'tw-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}

