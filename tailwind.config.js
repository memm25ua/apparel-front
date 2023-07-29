module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "512px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
        'brand': ['Hurricane', 'sans-serif']
      },
      colors: {
          'prelude': {
            '50': '#fbf7fc',
            '100': '#f5eef9',
            '200': '#ecdcf2',
            '300': '#d7b2e0',
            '400': '#cc9cd6',
            '500': '#b374c1',
            '600': '#9755a4',
            '700': '#7e4487',
            '800': '#68396f',
            '900': '#58335c',
            '950': '#36183a',
        },
      }
        
    },
  },
  plugins: [],
}
