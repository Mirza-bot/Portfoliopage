/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html.html",
    "./src/Pages/GreetingPage/GreetingPage.jsx",
    "./src/Pages/AboutMePage.jsx/AboutMePage.jsx",
    "./src/components/buttons/BasicBtn.jsx",
  ],
  theme: {
    colors: {
      primary: {
        light: "rgba(139, 255, 234, 0.3)",
        dark: "rgba(0, 160, 131, 0.55)",
      },
      secondary: "rgba(15, 118, 110, 0.3)",
      primaryText: "#5eead4",
      blue500: "#3b82f6",
      sky300: "#7dd3fc",
      fuchsia400: "#e879f9",
      gray: "#9ca3af",
    },
    extend: {},
  },
  plugins: [],
};
