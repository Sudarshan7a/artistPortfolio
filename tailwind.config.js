/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        accentColorYellow: "var(--accentColorYellow)",
        accentColorRed: "var(--accentColorRed)",
        extraColorCyan: "var(--extraColorCyan)",
        extraColorPurple: "var(--extraColorPurple)",
      },
      fontFamily: {
        title: "var(--titleFont)",
        subtitle: "var(--subtitleFont)",
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        nav: "var(--navFontSize)",
        button: "var(--buttonFontSize)",
        body: "var(--bodyFontSize)",
        footer: "var(--footerFontSize)",
      },
      lineHeight: {
        h1: "var(--h1LetterHeight)",
        h2: "var(--h2LetterHeight)",
        h3: "var(--h3LetterHeight)",
        nav: "var(--navLetterHeight)",
        button: "var(--buttonLetterHeight)",
        body: "var(--bodyLetterHeight)",
        footer: "var(--footerLetterHeight)",
      },
      letterSpacing: {
        h1: "var(--h1LetterSpacing)",
        h2: "var(--h2LetterSpacing)",
        h3: "var(--h3LetterSpacing)",
        nav: "var(--navLetterSpacing)",
      },
      fontWeight: {
        bold: "var(--bold)",
        semiBold: "var(--semiBold)",
        medium: "var(--medium)",
        regular: "var(--regular)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(0, 90, 225, 0.80) 0%, rgba(102, 205, 170, 0.80) 30.5%, rgba(139, 92, 246, 0.80) 55.5%, rgba(255, 215, 0, 0.80) 71.5%, rgba(255, 76, 76, 0.80) 100%)",
      },
      boxShadow: {
        "custom-light": "0px 0px 8.4px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
