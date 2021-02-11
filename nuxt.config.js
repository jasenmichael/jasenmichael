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
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/svg',
    'nuxt-lazy-load',
  ],
  pwa: {
    manifest: {
      theme_color: '#111827',
    },
  },
  feed: [
    // A default feed configuration object
    {
      path: '/blog-feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          generator: 'nuxtjs/feed',
          title: 'Jasen Michael Blog',
          link: 'https://jasenmichael.com/blog-feed.xml',
          description: 'Jasen Michael blog feed!',
        }

        const { $content } = require('@nuxt/content')
        // const baseUrl = 'https://jasenmichael.com'
        const baseUrl = 'https://jasenmichael.netlify.app'
        // blogs
        const blogs = await $content('blog')
          .only([
            'title',
            'slug',
            'category',
            'description',
            'link',
            'tags',
            'img',
            'createdAt',
            'author',
            'cover',
          ])
          .sortBy('date', 'asc')
          .fetch()
        blogs.forEach((blog) => {
          feed.addItem({
            // <title>
            title: blog.title,
            //  <uuid>
            id: blog.slug,
            //  <link>
            link: baseUrl + '/blog/' + blog.slug,
            description: blog.description,
            // <content:encoded>
            content: JSON.stringify(blog),
            // <enclosure type="image/jpg">
            image: baseUrl + blog.cover,
            // <pubDate>
            date: new Date(blog.createdAt),
          })
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2', // Can be: rss2, atom1, json1
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
