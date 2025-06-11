/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2D3A52", // Azul escuro (principal para header, botões e fundo de componentes)
        accent: "#F45E4D", // Laranja avermelhado (botões e destaques)
        background: "#FFFFFF", // Branco (background principal)
        cardBackground: "#F1F3F6", // Cinza claro (background de cartões e listas)
        subtleHighlight: "#E0E5EC", // Cinza azulado claro (contornos e áreas de destaque sutil)
        secondaryText: "#C9CDD9", // Cinza médio (texto secundário)
        text: "#000000", // Preto (textos principais, ícones)
      },
    },
  },
  plugins: [],
};
