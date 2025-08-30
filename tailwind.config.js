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
          'dark': '#0a0a0a',
          'bg': '#1a1a1a',
          'card': '#2a2a2a',
          'green': '#00ff41',
          'cyan': '#00ffff',
          'pink': '#ff00ff',
          'purple': '#8b00ff',
          'yellow': '#ffff00',
        }
      },
      animation: {
        'blink': 'blink 1s infinite',
        'flicker': 'flicker 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
          },
          '100%': { 
            'box-shadow': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
          },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      },
      backgroundImage: {
        'retro-grid': 'linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)',
        'retro-stars': 'radial-gradient(2px 2px at 20px 30px, #00ff41, transparent), radial-gradient(2px 2px at 40px 70px, #00ffff, transparent), radial-gradient(1px 1px at 90px 40px, #ff00ff, transparent)',
      },
      backgroundSize: {
        'grid': '40px 40px',
        'stars': '100px 100px',
      }
    },
  },
  plugins: [],
}
