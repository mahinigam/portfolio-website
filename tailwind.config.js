/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#F7F5F0',
          ink: '#111111',
          black: '#000000',
          text: '#1C1C1C',
          muted: '#52525B',
          dim: '#A1A1AA',
          line: 'rgba(28, 28, 28, 0.12)',
          hairline: 'rgba(28, 28, 28, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
        mono: ['"Monaspace Argon"', 'ui-monospace', 'monospace'],
        argon: ['"Monaspace Argon"', 'ui-monospace', 'monospace'],
        xenon: ['"Monaspace Xenon"', 'ui-monospace', 'monospace'],
        krypton: ['"Monaspace Krypton"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        terminal: 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      boxShadow: {
        tracker: '0 0 18px rgba(28, 28, 28, 0.15)',
      },
    },
  },
  plugins: [],
}
