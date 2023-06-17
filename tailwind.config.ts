
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '7px 10px 14px -4px rgba(0, 0, 0, 0.65)',
        '4xl':'0px 0px 67px 31px rgba(0, 0, 0, 1)'
      },
      height:{
        "120":"30rem"
      }
    },
    colors: {
      'default': '#000000',
      'primary':"#333333",
      'secondary': '#ffffff',
      'tertiary':"#ffa500",
      'tertiary-alternate':"#25D366",
      'secondary-alternate':"#f1f1f1"
    },
  },
  plugins: [],
}