/* 绿影寻踪网站的 Tailwind 配置：取 5 个页面原本内联配置的并集 */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#BACFA8",
        secondary: "#679684",
        accent: "#4ECDC4",
        neutral: "#F7FFF7",
        dark: "#292F36",
        c_primary: "#2E7D32",
        c_secondary: "#81C784",
        c_tertiary: "#A5D6A7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
