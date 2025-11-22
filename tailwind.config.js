/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'glass': ['Inter', 'Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'glass-heading': ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        'glass-body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'glass': {
          'bg': '#000000',
          'bg-secondary': '#111111',
          'dark': 'rgba(10, 10, 10, 0.9)',
          'card': 'rgba(20, 20, 20, 0.3)',
          'card-hover': 'rgba(30, 30, 30, 0.4)',
          'card-light': 'rgba(40, 40, 40, 0.3)',
          'border': 'rgba(255, 255, 255, 0.1)',
          'border-hover': 'rgba(255, 255, 255, 0.2)',
          'text': '#ffffff',
          'text-secondary': '#b0b0b0',
          'text-muted': '#808080',
          'text-dim': '#666666',
          'light': 'rgba(255, 255, 255, 0.9)',
          'accent': '#ffffff',
          'accent-light': '#e5e5e5',
          'accent-dark': '#d4d4d4',
          'nav': 'rgba(0, 0, 0, 0.8)',
        }
      },
      animation: {
        'blink': 'blink 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'loading': 'loading 1s infinite',
        'liquid': 'liquid 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
          },
          '100%': {
            'box-shadow': '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
          },
        },
        loading: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        liquid: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(2%, 2%) rotate(1deg)' },
          '50%': { transform: 'translate(0, 4%) rotate(-1deg)' },
          '75%': { transform: 'translate(-2%, 2%) rotate(0deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
      },
      backgroundSize: {
      }
    },
  },
  plugins: [],
}
