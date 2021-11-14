module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': '#c8561a',
        'secondary': '#f39c12',
        'third': 'b4bcc2',
        'forth': '#563700',
        'fifth': '#e08e0b',
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
