<template>
  <div>
    <Bio :bio="bio" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const bio = await $content('bio').fetch()
    return { bio }
  },
}
</script>
