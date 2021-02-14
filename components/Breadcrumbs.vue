<template>
  <div
    class="text-xl mt-4 text-white pt-10 px-2 md:px-4 md:mx-10 lg:mx-40 max-w-7xl flex"
  >
    <!-- {{ $route }}
    <br />
    {{ $route.path.split('/') }}
    <br /> -->
    <!-- <nuxt-link to="/">HOME</nuxt-link> > {{ $route.name.toUpperCase() }} -->
    <nuxt-link to="/">HOME</nuxt-link>
    <div v-for="(path, i) in $route.path.split('/')" :key="i">
      <nuxt-link :to="path">{{ path.toUpperCase() }} </nuxt-link>
      <span class="text-gray-500 px-2">
        {{ i !== $route.path.split('/').length - 1 ? ' > ' : '' }}
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-green-300;
}
</style>
