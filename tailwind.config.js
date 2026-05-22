/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ink: '#05080D',
      'deep-sea': '#0A1628',
      midnight: '#0F2238',
      horizon: '#1B3A5B',
      brass: '#B8945A',
      'brass-light': '#D4B47C',
      pearl: '#F5F1EA',
      mist: '#8A95A5',
      signal: '#4FD1C5',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      display: ['Fraunces', 'Georgia', 'serif'],
      sans: ['Inter Tight', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      fontSize: {
        'display-xl': [
          'clamp(43px, 6.3vw, 86px)',
          { lineHeight: '0.95', letterSpacing: '-0.04em' },
        ],
        'display-l': [
          'clamp(36px, 5.4vw, 65px)',
          { lineHeight: '0.95', letterSpacing: '-0.03em' },
        ],
        'display-m': [
          'clamp(29px, 4.5vw, 50px)',
          { lineHeight: '0.95', letterSpacing: '-0.025em' },
        ],
        h1: [
          'clamp(25px, 3.6vw, 43px)',
          { lineHeight: '1', letterSpacing: '-0.02em' },
        ],
        h2: [
          'clamp(22px, 3.2vw, 36px)',
          { lineHeight: '1', letterSpacing: '-0.015em' },
        ],
        h3: [
          'clamp(18px, 2.7vw, 29px)',
          { lineHeight: '1.1', letterSpacing: '-0.01em' },
        ],
        h4: [
          'clamp(16px, 2.3vw, 25px)',
          { lineHeight: '1.1', letterSpacing: '-0.005em' },
        ],
        h5: ['clamp(14px, 1.8vw, 22px)', { lineHeight: '1.2' }],
        'body-l': ['clamp(14px, 1.25vw, 18px)', { lineHeight: '1.5' }],
        body: ['clamp(12px, 1vw, 16px)', { lineHeight: '1.5' }],
        'body-s': ['clamp(11px, 0.9vw, 14px)', { lineHeight: '1.5' }],
        eyebrow: [
          'clamp(9px, 0.7vw, 11px)',
          { lineHeight: '1.5', letterSpacing: '0.2em' },
        ],
        caption: [
          'clamp(8px, 0.5vw, 10px)',
          { lineHeight: '1.4', letterSpacing: '0.1em' },
        ],
      },
      spacing: {
        gutter: '120px',
        section: '160px',
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        site: '1440px',
      },
      borderColor: {
        hairline: 'rgba(245, 241, 234, 0.08)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        entrance: '700ms',
        hover: '200ms',
      },
      animation: {
        'pulse-brass': 'pulseBrass 2.5s ease-in-out infinite',
      },
      keyframes: {
        pulseBrass: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.8)' },
        },
      },
    },
  },
  plugins: [],
};
