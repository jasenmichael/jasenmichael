<template>
  <div class="bg-gray-900 text-white">
    <div class="flex flex-col min-h-screen">
      <Nav />
      <Breadcrumbs
        v-if="showOn.some((el) => $route.path.includes(el))"
        class="pt-16 lg:pt-20"
      />
      <Nuxt class="flex-grow" />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showOn: ['/photos', '/blog', '/projects'],
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

  /* transition: opacity 0.5s; */
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate3d(0, 15px, 0);

  /* opacity: 0; */
}
</style>
