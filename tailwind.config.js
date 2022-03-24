module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
