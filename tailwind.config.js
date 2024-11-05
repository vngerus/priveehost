/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C3A6E', // Azul Oscuro
          light: '#29497F',   // fondos o secciones
          dark: '#14254B',    // contrastes
        },
        accent: {
          DEFAULT: '#3CCB8B', // acentos
          dark: '#2BA56E',    // destacados
        },
        neutral: {
          light: '#E5E5E5',   // fondos y áreas secundarias
          DEFAULT: '#FFFFFF', // texto o fondos
          dark: '#B3B3B3',    // detalles y bordes
        },
      },
    },
  },
};