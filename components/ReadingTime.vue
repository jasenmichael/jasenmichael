<template>
  <span>{{ readingTime }} min read</span>
</template>

<script>
export default {
  name: 'ReadingTime',
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    readingTime() {
      let minutes = 0
      const contentString = JSON.stringify(this.content)
      const words = contentString.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    },
  },
}
</script>
