module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': '#A67B92',
        'secondary': '#544F73',
        'third': '#1E3040',
        'forth': '#060C0D',
        'fifth': '#D99414',
      },
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
