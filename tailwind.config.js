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
    },
  },
  plugins: [],
};
