/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // 'fade-blue':'#F8F9FD'
        'fade-blue': '#ebefff',
        'custom-blue': '#1353FE',
        secondary:{
          DEFAULT:'#1353FE'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}