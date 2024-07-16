import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      // metal: '#565584',
      metal: {
        100: "#dddde6",
        200: "#bbbbce",
        300: "#9a99b5",
        400: "#78779d",
        500: "#565584",
        600: "#45446a",
        700: "#34334f",
        800: "#222235",
        900: "#11111a"
},
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubblegum: '#ff77e9',
      bermuda: '#78dcca',
    },
    screens: {
      mob: { 'max': '435px' },
      tab: { 'min': '436px', 'max': '1024px' },
      dt: { 'min': '1025px', 'max': '1440px' },
      fw: '1441px',
    },
    extend: {
      width: {
        95: '95%'
      },
      height: {
        95: '95%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
