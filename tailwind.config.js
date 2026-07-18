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
          bg: '#0B0F19',
          ink: '#0c111c',
          black: '#090d16',
          text: '#F3F4F6',
          muted: '#71717a',
          dim: '#4B5563',
          line: 'rgba(243, 244, 246, 0.12)',
          hairline: 'rgba(243, 244, 246, 0.08)',
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
        tracker: '0 0 18px rgba(243, 244, 246, 0.28)',
      },
    },
  },
  plugins: [],
}
