/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F3F4F6', // background primary
        bgSecondary: '#DADBDD', // background secondary
        primary: '#000000', // button color / icon hover
        secondary: '#6B7280', // button color / icon hover
        tertiary: '#A3A3A3', // button color / icon hover
        border: '#484848', // border / line color
        link: '#4A8FFF', // link color
        bgwhite: '#FFFFFF',//background in main section
        footercolor:'#111828',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}