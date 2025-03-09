/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf6f3',
          100: '#f0e6e0',
          200: '#e1cfc3',
          300: '#d2b7a6',
          400: '#c39f89',
          500: '#b4876c',
          600: '#a56f4f',
          700: '#8b5739',
          800: '#714523',
          900: '#57330d',
        }
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        manrope: ['var(--font-manrope)'],
        marcellus: ['var(--font-marcellus)'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
