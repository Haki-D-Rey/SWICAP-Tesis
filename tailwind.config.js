/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(325deg, #ffffff 0, #d7e8ff 50%, #89aad3 100%)',
      },
      colors: {
        primary: '#FFF', // Aquí defines el color "primary"
        primary_text: '#EEE',
        secondary: '#003485'
      },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
}
