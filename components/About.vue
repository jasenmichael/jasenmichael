<template>
  <div
    id="homeabout"
    class="bg-red-800 pt-20 text-yellow-50 px-4 md:px-16 lg:px-40 overflow-hidden flex flex-col"
    :style="scrollY >= 200 ? 'min-height: calc(100vh)' : 'height: 200px'"
  >
    <div v-show="scrollY >= 200">
      <div
        class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"
      >
        <!-- Image -->
        <div
          class="aspect-w-16 aspect-h-9 sm:aspect-w-3 sm:aspect-h-4 md:aspect-w-16 md:aspect-h-9"
        >
          <img class="object-cover shadow-lg rounded-lg" src="/me.jpg" alt="" />
        </div>
        <div class="sm:col-span-2">
          <div class="space-y-4">
            <div class="text-lg leading-6 font-medium space-y-1">
              <!-- <h3>Leslie Alexander</h3> -->
              <!-- <p class="text-indigo-600">Co-Founder / CEO</p> -->
            </div>
            <div class="text-lg">
              <div class="text-gray-200 text-shadow-md text-3xl">
                first and last name <br />
                Mention any associated brand name you might use. <br />
                State your current position and what you do. Include at least
                one professional accomplishment. <br />
                Describe your values and how they inform your career. <br />
                Briefly tell your readers who you are outside of work. <br />
                <hr />
                Linux user 20+ years <br />
                Fullstack Software Engineer <br />
                <!-- CEO and Founder of Tech512 <br /> -->
                Builder, father, wanna-be farmer. <br />
                OMG, I ❤️ Vue.js, Nuxt.js, and Tailwindcss
              </div>
            </div>
            <ul class="flex space-x-5">
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <span class="sr-only">LinkedIn</span>
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
