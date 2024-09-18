/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./public/**/*{html,js,css}"],
    theme: {
      extend: {
        fontSize: {
          xs: '0.8rem'
        },
        colors: {
          dark : "#3c3c3c",
          darken : "#282828",
          darker: "#0f0f0f",
          yellow: "#fbbc06",
          hot: "#eb3963",
          greenhok: "#47eec8",
          bluehok: "#0ccef4"
        }
      },
    },
    plugins: [],
  }