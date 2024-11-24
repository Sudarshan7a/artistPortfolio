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
    },
  },
  plugins: [],
};
