<template>
  <div>
    <div class="py-14 lg:pt-32 relative max-w-7xl mx-auto">
      <h1
        class="text-center text-green-300 text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        jasen.blogs()
      </h1>
      <div
        class="pt-10 px-2 md:px-4 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:max-w-none"
      >
        <div
          v-for="(blog, i) in blogs"
          :key="i"
          class="flex flex-col rounded-lg bg-gray-50 shadow-lg overflow-hidden"
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
  async asyncData({ $content, error }) {
    const blogs = await $content('blog')
      .only([
        'title',
        'description',
        'slug',
        'cover',
        'category',
        'tags',
        'updatedAt',
        'author',
      ])
      .fetch()
    return { blogs }
  },
}
</script>
