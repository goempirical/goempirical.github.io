module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Hind', 'system-ui', 'sans-serif'],
        body: ['Red Hat Text', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#4A5CFF',
        secondary: '#080C1F',
      },
      // These values are from the Text-Styles frame on Figma. Suggestion: Normalize values.
      fontSize: {
        h1: ['3.125rem', '1.24'],
        h2: ['2.25rem', '1.38'],
        h3: ['1.625rem', '1.6'],
        h4: ['1.375rem', '1.1'],
        p: ['1.125rem', '1.9'],
        highlighted: ['3.5rem', '1'],
        quote: ['2.125rem', '1.3'],
      },
      maxWidth: {
        u1280: '1280px',
      },
      padding: {
        18: '4.25rem',
      },
      gap: {
        30: '7.75rem',
      },
      screens: {
        lg: '1100px',
      },
      spacing: {
        '1/5': '20%',
        '1/6': '16.667%',
      },
    },
  },
  plugins: [],
};
