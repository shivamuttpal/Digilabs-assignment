/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-400": "#5a6475",
        "pri-purple-400": "#582066",
        white: "#fff",
        gray: "#121417",
        "pri-purple-900": "#f4eff6",
        ghostwhite: "#faf9ff",
        mediumpurple: "rgba(197, 152, 255, 0.5)",
        lavender: "#efe4f2",
        "neutral-100": "#24282f",
        "neutral-1200": "#eeefef",
        "neutral-1000": "#e6e7e9",
        "neutral-200": "#363c46",
        "neutral-1300": "#f1f1f2",
      },
      spacing: {},
      fontFamily: {
        "h05-12-medium": "Inter",
        "h700-62-semibold": "Manrope",
      },
      borderRadius: {
        "221xl": "240px",
        smi: "13px",
        "4xs-2": "8.2px",
      },
    },
    fontSize: {
      sm: "0.78rem",
      base: "0.89rem",
      lg: "1rem",
      "43xl": "3.44rem",
      "21xl": "2.22rem",
      smi: "0.72rem",
      "13xl-5": "1.81rem",
      "lgi-5": "1.08rem",
      "29xl": "2.67rem",
      "13xl": "1.78rem",
      xs: "0.67rem",
      "4xs-2": "0.46rem",
      "xl-6": "1.14rem",
      "smi-4": "0.69rem",
      xl: "1.11rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
