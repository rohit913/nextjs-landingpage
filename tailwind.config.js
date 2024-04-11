/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#262626",
          "200": "#001e42",
          "300": "#031831",
          "400": "rgba(255, 255, 255, 0.61)",
          "500": "rgba(255, 255, 255, 0.57)",
        },
        white: "#fff",
        olivedrab: {
          "100": "#80ad47",
          "200": "#66952e",
        },
        darkslategray: "#122d51",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
          "300": "rgba(230, 230, 230, 0.09)",
          "400": "rgba(230, 230, 230, 0.57)",
        },
        black: "#000",
        darkslateblue: {
          "100": "#002b52",
          "200": "#002559",
        },
        lightgreen: "#74cd76",
        darkolivegreen: "#3f6619",
      },
      spacing: {},
      fontFamily: {
        "libre-caslon-text": "'Libre Caslon Text'",
        "krona-one": "'Krona One'",
      },
      borderRadius: {
        "29xl": "48px",
        "46xl": "65px",
        "12xs": "1px",
        "76xl": "95px",
        "33xl": "52px",
        "16xl": "35px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      smi: "13px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "5xl": "24px",
      "42xl": "61px",
      "18xl": "37px",
      "30xl": "49px",
      "4xl": "23px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
