/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'button': {
        'padding': '.5rem 1rem',
        'borderRadius': '.25rem',
        'fontSize': '1rem',
        'fontWeight': '600',
        'color': '#FFF',
        'backgroundColor': '#FF5733',
        '&:hover': {
          'backgroundColor': '#E8480A',
        },
      },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
}
