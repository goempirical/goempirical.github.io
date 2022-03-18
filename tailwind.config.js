module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Hind', 'system-ui', 'sans-serif'],
      body: ['Red Hat Text', 'system-ui', 'sans-serif'],
    },
    extend: {
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
        highlighted: ['3.5rem', '1'],
        quote: ['2.125rem', '1.3'],
      },
      maxWidth: {
        u1260: '1260px',
      },
    },
  },
  plugins: [],
};
