<template>
  <div>
    <Gallery :images="images" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const images = await $content('images').sortBy('date_taken', 'desc').fetch()
    return { images }
  },
}
</script>
