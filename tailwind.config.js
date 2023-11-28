const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        'torch-red': {
          DEFAULT: '#FF0037',
          50: '#FFB8C7',
          100: '#FFA3B7',
          200: '#FF7A97',
          300: '#FF5277',
          400: '#FF2957',
          500: '#FF0037',
          600: '#C7002B',
          700: '#8F001F',
          800: '#570013',
          900: '#1F0007',
          950: '#030001'
        },
        'electric-blue': {
          DEFAULT: '#96FFF5',
          50: '#FCFFFF',
          100: '#E8FFFD',
          200: '#BFFFF9',
          300: '#96FFF5',
          400: '#5EFFF0',
          500: '#26FFEA',
          600: '#00EDD6',
          700: '#00B5A3',
          800: '#007D71',
          900: '#00443E',
          950: '#002825'
        },
        'midnight-express': {
          DEFAULT: '#141928',
          50: '#BAC3DD',
          100: '#ADB7D6',
          200: '#919FC8',
          300: '#7687BB',
          400: '#5B70AD',
          500: '#4A5D95',
          600: '#3D4C7A',
          700: '#2F3B5E',
          800: '#222A43',
          900: '#141928',
          950: '#0B0D15'
        },
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities)
    })
  ],
};
