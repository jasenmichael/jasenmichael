<template>
  <div
    id="homeabout"
    class="bg-red-800 pt-20 text-yellow-50 px-4 md:px-16 lg:px-40 overflow-hidden flex flex-col"
    :style="scrollY >= 200 ? 'min-height: calc(100vh)' : 'height: 200px'"
  >
    <div v-show="scrollY >= 200">yo</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      scrollY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
  },
}
</script>
