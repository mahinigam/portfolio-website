/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'glass': ['Inter', 'Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'glass-heading': ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        'glass-body': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'retro': {
          'black': '#000000',
          'dark': '#000000',
          'bg': '#0a0a0a',
          'card': '#1a1a1a',
          'blue': '#00FFFF',
          'cyan': '#00FFFF',  // Alias for blue for consistency
          'pink': '#FF00FF',
          'purple': '#9F00FF', // Adding purple color
          'green': '#39FF14',
          'green-dim': '#2BCC11',  
          'green-soft': '#1F9908', 
          'yellow': '#FFFF00',
          'white': '#FFFFFF',
        },
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
        'bounce-retro': 'bounceRetro 0.3s infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite',
        'loading': 'loading 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        bounceRetro: {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14',
          },
          '100%': { 
            'box-shadow': '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14',
          },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        loading: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      backgroundImage: {
        'retro-grid': 'linear-gradient(rgba(57,255,20,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.1) 1px, transparent 1px)',
        'retro-stars': 'radial-gradient(2px 2px at 20px 30px, #39FF14, transparent), radial-gradient(2px 2px at 40px 70px, #00FFFF, transparent), radial-gradient(1px 1px at 90px 40px, #FF00FF, transparent)',
      },
      backgroundSize: {
        'grid': '40px 40px',
        'stars': '100px 100px',
      }
    },
  },
  plugins: [],
}
