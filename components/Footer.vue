<template>
  <div>
    <div
      class="bg-green-500 text-xl font-bold text-gray-900 text-shadow min-h-36"
    >
      <div class="relative w-full flex items-center invisible md:visible">
        <button
          class="z-30 absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
          @click="decrement()"
        >
          &#8592;
        </button>
        <img
          v-for="(image, i) in images.slice(0, 6)"
          :key="i"
          class="w-1/6 hover:opacity-75 transition-all ease-in-out duration-1000 transform translate-x-0"
          :src="image"
        />
        <!-- <div></div> -->
        <button
          class="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
          @click="increment()"
        >
          &#8594;
        </button>
      </div>
      <div>footer</div>
    </div>

    <!-- <div class="bg-green-500 h-12"></div> -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
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
  },
}
</script>
