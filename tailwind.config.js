/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**.html", "./*/**.html"],
  theme: {
    extend: {
      colors: {
        primary: "#346DF6",
        "primary-800": "#3A89FF",
        secondary: "",
        "dark-900": "#212121",
        "dark-800": "#848484",
        "dark-600": "#737373",
        "dark-500": "#7B7B7B",
      },
      fontFamily: {
        "my-gotham": "'Gotham'",
      },
      backgroundImage: {
        "header-jumbotron": "url('/assets/header jumbotron.png')",
        "jumbotron-mobile": "url('/assets/jumbotron mobile.png')",
        "background-balls": "url('/assets/big image bg.png')",
        "header-image": "url('/assets/header2.png')",
      },
      boxShadow: {
        footer: "-1px 0 10px 61px rgb(0 0 0 / 0.08)"
      }
    },
  },
  plugins: [],
};
