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
  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/feed'],
  pwa: {
    manifest: {
      theme_color: '#111827',
    },
  },
  feed: [
    // A default feed configuration object
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          generator: '',
          title: 'My blog',
          link: 'https://lichter.io/feed.xml',
          description: 'This is my personal feed!',
        }

        const { $content } = require('@nuxt/content')
        const posts = await $content('blog').fetch()
        posts.forEach((post) => {
          feed.addItem({
            title: post.title,
            id: post.category,
            link: post.link,
            description: post.description,
            content: post.content,
            image: post.link + post.img,
            category: post.category,
            tags: ['yo', 'wazzuh'],
            data: 'Some additional data',
            date: new Date(post.createdAt),
            author: [
              {
                name: 'Jane Doe',
                email: 'janedoe@example.com',
                link: 'https://example.com/janedoe',
              },
              {
                name: 'Joe Smith',
                email: 'joesmith@example.com',
                link: 'https://example.com/joesmith',
              },
            ],
            contributor: [
              {
                name: 'Shawn Kemp',
                email: 'shawnkemp@example.com',
                link: 'https://example.com/shawnkemp',
              },
              {
                name: 'Reggie Miller',
                email: 'reggiemiller@example.com',
                link: 'https://example.com/reggiemiller',
              },
            ],
          })
        })

        // feed.addCategory('Nuxt.js')

        feed.addContributor({
          name: 'Alexander Lichter',
          email: 'example@lichter.io',
          link: 'https://lichter.io/',
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'], // Will be passed as 2nd argument to `create` function
    },
  ],
  axios: {},
  content: {},
  build: {},
  publicRuntimeConfig: {
    isDev: process.env.NODE_ENV === 'development',
    cloudinaryUrl:
      'https://res.cloudinary.com/jasenmichael/image/fetch/c_fill/q_auto/f_auto/c_scale,w_auto:breakpoints',
  },
}
