<template>
  <div>
    <div class="bg-gray-900 text-xl font-bold text-gray-900 text-shadow">
      <!-- <div
        class="min-h-36 relative w-full flex items-center invisible md:visible"
      >
        <button
          v-if="isMounted"
          class="z-30 absolute bg-red-700 opacity-60 hover:animate-pulse text-white text-2xl font-bold hover:shadow rounded-full w-12 h-12 ml-12"
          @click="decrement()"
        >
          &#8592;
        </button>
        <img
          v-for="(image, i) in images.slice(0, 6)"
          :key="i"
          class="w-1/6 opacity-60 hover:opacity-100 transition-all ease-in-out duration-1000 transform translate-x-0"
          :src="image"
        />
        <button
          v-if="isMounted"
          class="absolute right-0 bg-red-700 opacity-60 hover:animate-pulse text-white text-2xl font-bold hover:shadow rounded-full w-12 h-12 mr-12"
          @click="increment()"
        >
          &#8594;
        </button>
      </div> -->
      <div
        class="flex items-center uppercase text-grey-800 text-base text-shadow bg-green-500 justify-center"
      >
        Copyright © all rights reserved {{ getYear() }}
      </div>
    </div>

    <!-- <div class="bg-green-500 h-12"></div> -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isMounted: false,
      images: [
        'https://source.unsplash.com/collection/1346951/800x800?sig=1',
        'https://source.unsplash.com/collection/1346951/800x800?sig=2',
        'https://source.unsplash.com/collection/1346951/800x800?sig=3',
        'https://source.unsplash.com/collection/1346951/800x800?sig=4',
        'https://source.unsplash.com/collection/1346951/800x800?sig=5',
        'https://source.unsplash.com/collection/1346951/800x800?sig=6',
        'https://source.unsplash.com/collection/1346951/800x800?sig=7',
        'https://source.unsplash.com/collection/1346951/800x800?sig=8',
        'https://source.unsplash.com/collection/1346951/800x800?sig=0',
      ],
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    increment() {
      // this.images.push(this.images.shift())
      const next = [...this.images]
      next.push(next.shift())
      this.images = next
    },
    decrement() {
      const prev = [...this.images]
      prev.unshift(prev.pop())
      this.images = prev
    },
    getYear() {
      const date = new Date()
      const year = date.getFullYear()
      return year
    },
  },
}
</script>
