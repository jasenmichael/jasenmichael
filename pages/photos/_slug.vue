<template>
  <div
    class="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-10 lg:pb-16"
  >
    <div>
      <img :src="image.image" :alt="image.description" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const image = await $content('images', params.slug).fetch()
    return { image }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
