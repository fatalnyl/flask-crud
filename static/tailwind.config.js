/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../templates/**/*.html", "./src/**/*.js", "./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [
    require("tw-elements/dist/plugin")  
  ],
  theme: {
    extend: {},
  },
  
}
