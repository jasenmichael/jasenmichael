<template>
  <!-- class="flex flex-col flex-wrap" -->
  <div
    class="opacity-90 hover:opacity-100 flex flex-col rounded-lg h-full bg-gray-50 shadow-lg overflow-hidden transform transition-all hover:scale-101"
  >
    <!-- image -->

    <img
      class="h-48 w-full object-cover"
      :src="blog.cover || '/img/blog.jpg'"
      alt=""
    />

    <!-- card content -->
    <div class="flex-grow">
      <div class="flex flex-col mx-4 md:mx-6">
        <div class="flex-1 pt-1">
          <!-- <div class="border"> -->
          <!-- category -->
          <p class="text-sm font-medium text-gray-800">
            <span class="uppercase text-xs"> Category: </span>
            <nuxt-link
              :to="'/blog/?category=' + blog.category"
              class="font-bold text-green-700 hover:underline"
            >
              {{ blog.category }}
            </nuxt-link>
            <br />
            <span class="uppercase text-xs"> Tags:</span>
            <nuxt-link
              v-for="tag in blog.tags"
              :key="tag"
              :to="'/blog/?tag=' + tag"
              class="font-bold text-green-700 hover:underline"
            >
              <span> #{{ tag }}</span>
              <!-- {{ blog.tags.length && '#' + blog.tags.join(' #') }} -->
            </nuxt-link>
          </p>
          <!-- title -->
          <a href="#" class="block mt-2 mb-auto">
            <p class="text-xl font-semibold text-gray-900">
              {{ blog.title }}
            </p>
            <!-- descrition -->
            <p class="mt-3 text-base text-gray-600">
              {{ blog.description }}
            </p>
          </a>
        </div>
      </div>
    </div>

    <!-- author -->
    <div class="my-4 mx-6">
      <div class="flex">
        <!-- avatar -->
        <div class="mt-auto">
          <img class="h-10 w-10 rounded-full" :src="blog.avatar" alt="" />
        </div>
        <!-- author -->
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline"> {{ blog.author }} </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-10"> {{ formatDate(blog.updatedAt) }}</time>
            <span aria-hidden="true"> &middot; </span>
            <!-- <ReadingTime :content="blog.body" /> -->
            <!-- <span> 4 min read </span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
