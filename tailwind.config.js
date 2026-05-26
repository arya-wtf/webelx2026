/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        card: '#FFFFFF',
        soft: '#F2F1EC',
        ink: '#101010',
        'ink-soft': '#4A4A48',
        muted: '#8A8A85',
        line: '#E6E5DF',
        'line-soft': '#F0EFEA',
        primary: '#2853FF',
        'primary-soft': '#EEF2FF',
        accent: '#D8FF5C',
        success: '#2BAE66',
        danger: '#E55D43',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      maxWidth: {
        page: '1240px',
      },
      boxShadow: {
        soft: '0 1px 0 rgba(0,0,0,.02)',
        card: '0 4px 12px rgba(0,0,0,.04)',
      },
    },
  },
  plugins: [],
}
