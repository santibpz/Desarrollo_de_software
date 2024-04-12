/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#20253f",
        slategray: "#545973",
        tertiary: "#f8f9fa",
        marco: "rgba(32, 37, 63, 0.5)",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        paragraph: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        'xl': '1rem',
      },
    },
    fontSize: {
      lg: "18px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
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
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
      },
  },
  corePlugins: {
    preflight: false,
  },
};
