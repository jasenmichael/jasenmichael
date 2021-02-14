<template>
  <div>
    <div class="py-10 relative max-w-7xl mx-auto">
      <h1
        class="text-center text-green-300 text-4xl md:text-5xl lg:text-6xl font-bold"
      ></h1>
      <!-- <pre class="text-base text-left">{{ $config.isDev }}</pre> -->
      <!-- <pre class="text-base text-left">{{ blogs }}</pre> -->
      <div
        class="px-2 md:px-4 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:max-w-none"
      >
        <!--  only show not published in dev -->
        <div
          v-for="(blog, i) in blogs"
          v-show="$config.isDev ? blog : blog.published"
          :key="i"
        >
          <nuxt-link :to="`/blog/${blog.slug}`">
            <BlogListCard :blog="blog" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- <pre class="overflow-hidden">{{ blogs }}</pre> -->
  </div>
</template>

<script>
export default {
  transition: 'page',
  async asyncData({ $content, error, $config }) {
    const blogs = await $content('blog')
      .only([
        'title',
        'description',
        'slug',
        'cover',
        'category',
        'tags',
        'updatedAt',
        'createdAt',
        'author',
        'published',
      ])
      .where(
        $config.isDev
          ? { published: { $in: [true, false] } }
          : { published: true }
      )
      // .where({ published: false })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { blogs }
  },
}
</script>
