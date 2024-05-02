/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      dropShadow: {
             'full': '20px 20px 0px #000000',
             'mid': '10px 10px 0px #000000',
              'low': '5px 5px 0px #000000',
           }
    }
  },
  plugins: [require("daisyui")]
};
