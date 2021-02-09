<template>
  <div class="flex flex-col">
    <!-- image -->
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        alt=""
      />
    </div>
    <div class="flex-grow p-6 flex flex-col justify-between">
      <div class="flex-grow">
        <!-- category -->
        <p class="text-sm font-medium text-indigo-600">
          <a href="#" class="hover:underline"> {{ blog.category }} </a>
        </p>
        <!-- title -->
        <a href="#" class="block mt-2 mb-auto">
          <p class="text-xl font-semibold text-gray-900">
            {{ blog.title }}
          </p>
          <!-- descrition -->
          <p class="mt-3 text-base text-gray-500">
            {{ blog.description }}
          </p>
        </a>
      </div>

      <!-- author -->
      <div class="mt-6 flex items-center">
        <!-- avatar -->
        <div class="mt-auto">
          <img
            class="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/30030129?s=60&v=4"
            alt=""
          />
        </div>
        <!-- author -->
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline"> {{ blog.author }} </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-10"> {{ formatDate(blog.updatedAt) }}</time>
            <span aria-hidden="true"> &middot; </span>
            <span> 4 min read </span>
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
