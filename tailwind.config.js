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
        /* Semantic aliases (01): prefer these in new/edited code */
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        text: "var(--text)",
        textMuted: "var(--text-muted)",
        border: "var(--border)",
        borderSoft: "var(--border-soft)",
        borderStrong: "var(--border-strong)",
        ring: "var(--ring)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--on-primary)",
          border: "var(--primary-border)",
          hover: "var(--primary-hover)",
          strong: "var(--primary-strong)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        info: "var(--info)",
        night: {
          bg: "var(--night-bg)",
          surface: "var(--night-surface)",
          text: "var(--night-text)",
          muted: "var(--night-muted)",
          border: "var(--night-border)",
          danger: "var(--night-danger)",
        },
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
        card: "var(--shadow-card)",
        modal: "var(--shadow-modal)",
      },
      zIndex: {
        header: "var(--z-header)",
        menu: "var(--z-menu)",
        "sticky-cta": "var(--z-sticky-cta)",
        modal: "var(--z-modal)",
        toast: "var(--z-toast)",
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
