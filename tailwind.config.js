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
        "dark-850": "#313131",
        "dark-820": "#404040",
        "dark-800": "#848484",
        "dark-750": "#828282",
        "dark-600": "#737373",
        "dark-500": "#7B7B7B",
        "dark-200": "#D8D8D8",
        "dark-50": "#BDBDBD",
        "blue-900": "#12294A"
      },
      fontFamily: {
        "plans-gotham-bold": "'GothamBold'",
      },
      backgroundImage: {
        "header-jumbotron": "url('/assets/header jumbotron.png')",
        "jumbotron-mobile": "url('/assets/jumbotron mobile.png')",
        "background-balls": "url('/assets/big image bg.png')",
        "header-image": "url('/assets/header2.png')",
        "header-ivf": "url('/assets/ivf header.png')"
      },
      boxShadow: {
        footer: "-1px 0 20px 6px rgb(0 0 0 / 0.08)"
      },
      fontSize: {
        "plans-heading": ["1rem"],
        // sm: ["14px"],
      },
      letterSpacing: {
        '-6': '-0.06em', 
        '-3': '-0.03em', 
        '-2': '-0.02em', 
      },
      lineHeight: {
        'plans-md': '3.2rem', // 51.2px
        'plans-nmd': '3rem', // 48px
        'plans-normal': '2.4rem', // 38.4px
        'plans-sxl': '2rem', // 32px
        'plans-smd': '1.8rem', // 28.8px
        'plans-sm': '1.607rem', // 25.7px
        'plans-xs': '1.4rem', // 22.4px
        'plans-xsm': '1.043rem', // 16.7px
      },
    },
  },
  plugins: [],
};
