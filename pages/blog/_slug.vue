<template>
  <div
    class="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-10 lg:pb-16"
  >
    <div class="hover:opacity-75 object-cover">
      <img
        class="object-cover pb-6 prose"
        src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
      />
    </div>
    <h1
      class="text-center text-green-300 text-4xl md:text-5xl lg:text-6xl font-bold"
    >
      {{ blog.title }}
    </h1>
    <nuxt-content
      class="prose lg:prose-xl prose-yellow content"
      :document="blog"
    ></nuxt-content>
    <!-- <pre class="overflow-hidden">{{ blog }}</pre> -->
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
