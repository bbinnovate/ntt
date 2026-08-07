import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A4B9B',
          indigo: '#2e3191',
          violet: '#3a3eb8',
          green: '#1b8a73',
          emerald: '#03ad7e',
          deepGreen: '#0f5e50',
          teal: '#008aa4',
          gold: '#1b8a73',
          ink: '#12154a',
          muted: '#5a5f8a',
          light: '#eef0fa',
          off: '#f7f8fd',
          border: '#d4d7ef',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        title: ['var(--font-title)', 'sans-serif'],
        subtitle: ['var(--font-subtitle)', 'sans-serif'],
        extra: ['var(--font-extra)', 'sans-serif'],
      },
      borderRadius: { brand: '14px', card: '16px', button: '8px' },
      boxShadow: { brand: '0 8px 32px rgba(46,49,145,.1)', nav: '0 2px 20px rgba(46,49,145,.08)' },
      spacing: { section: '72px', page: '2.5rem' },
    },
  },
  plugins: [],
};

export default config;
