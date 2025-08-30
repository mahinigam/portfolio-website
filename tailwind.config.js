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
      },
      colors: {
        'retro': {
          'black': '#000000',
          'dark': '#000000',
          'bg': '#0a0a0a',
          'card': '#1a1a1a',
          'blue': '#00FFFF',
          'pink': '#FF00FF',
          'green': '#39FF14',
          'green-dim': '#2BCC11',  
          'green-soft': '#1F9908', 
          'yellow': '#FFFF00',
          'white': '#FFFFFF',
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
