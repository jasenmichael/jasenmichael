export default {
  target: 'static',
  head: {
    title: 'Jasen Michael',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Let's create something together!",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }],
  },
  css: [],
  plugins: [{ src: './plugins/smooth-scroll', mode: 'client' }],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  pwa: {
    manifest: {
      theme_color: '#111827',
    },
  },
  axios: {},
  content: {},
  build: {},
  publicRuntimeConfig: {
    isDev: process.env.NODE_ENV === 'development',
    cloudinaryUrl:
      'https://res.cloudinary.com/jasenmichael/image/fetch/c_fill/q_auto/f_auto/c_scale,w_auto:breakpoints',
  },
}
