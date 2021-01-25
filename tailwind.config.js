module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
      },
      scale: {
        101: '1.01',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
    require('tailwind-hamburgers'),
  ],
}
