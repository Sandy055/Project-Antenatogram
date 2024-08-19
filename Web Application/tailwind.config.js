export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter", "sans-serif"]
      },
      colors:{
        gradstart : '#e1b7c4',
        gradend : '#c6bbdd'
      }
    },
  },
  plugins: [],
}
