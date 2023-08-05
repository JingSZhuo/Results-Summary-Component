/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': ' hsla(241, 72%, 46%, 0)',

        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-grey-blue' : 'hsl(224, 30%, 27%)', 'dark-grey-blue-t' : 'hsl(224, 30%, 27%, 0.5)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'HankenGrotesk': 'HankenGrotesk',
        'HGBold' : 'HankenGroteskBold',
        'HGMedium': 'HankenGroteskMedium',
      },
      fontSize: {
        'head' : '50px',
      }
    },
  },
  plugins: [],
}

