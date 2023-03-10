/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html.html",
    "./src/components/Navbar/Navbar.jsx",
    "./src/components/Sections/MobileMenu/MobileMenu.jsx",
    "./src/Pages/GreetingPage/GreetingPage.jsx",
    "./src/components/Cards/AboutMeCard/AboutMeCard.jsx",
    "./src/Pages/ProjectsPage/ProjectsPage.jsx",
    "./src/components/buttons/BasicBtn.jsx",
    "./src/components/buttons/LinkBtn.jsx",
    "./src/components/buttons/IconLink.jsx",
    "./src/components/Sections/ProjectSection/ProjectSection.jsx",
    "./src/components/ContactBox/ContactBox.jsx",
    "./src/components/Footer/Footer.jsx",
  ],
  theme: {
    colors: {
      white: "white",
      black: "black",
      primary: {
        light: "rgba(112,204,192,0.4)",
        dark: "rgba(139, 255, 234, 0.1)",
      },
      secondary: {
        light: "rgba(19, 26, 43, 0.7)",
        dark: "rgba(19, 26, 83, 0.3)",
      },
      primaryText: "#5eead4",
      blue500: "#3b82f6",
      sky300: "#7dd3fc",
      fuchsia400: "#e879f9",
      gray: "#9ca3af",
    },
    extend: {
      boxShadow: {
        "3xl": "-5px 5px 6px 0px rgba(0, 0, 0, 0.458);",
      },
      keyframes: {
        levitation: {
          "50%": { transform: "translateY(0.4rem)" },
        },
      },
    },
  },
  plugins: [],
};
