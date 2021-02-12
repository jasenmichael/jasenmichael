<template>
  <div
    class="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-10 lg:pb-16"
  >
    <div class="shadow-lg mb-6">
      <img
        class="object-cover h-32 sm:h-40 md:h-52 lg:h-72 w-screen rounded-t-lg"
        :src="blog.cover || '/img/blog.jpg'"
      />
      <hr class="rounded-b-lg border-2 border-green-500" />
    </div>
    <div>
      <h1
        class="text-center text-green-300 text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        {{ blog.title }}
      </h1>
      <ReadingTime :content="blog" />
      <nuxt-content
        class="prose sm:prose-lg md:prose-xl lg:prose-2xl prose-yellow"
        :document="blog"
      ></nuxt-content>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const blog = await $content('blog', params.slug).fetch()
    return { blog }
  },
}
</script>

<style scoped>
>>> .nuxt-content * {
  @apply text-yellow-100;
}
>>> .nuxt-content img {
  @apply rounded-lg;
  @apply shadow-lg;
}
>>> .nuxt-content a {
  @apply text-yellow-300;
}

>>> .nuxt-content h1,
>>> .nuxt-content h2,
>>> .nuxt-content h3,
>>> .nuxt-content h4 {
  @apply text-green-300;
}
</style>
