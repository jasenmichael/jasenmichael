<template>
  <div
    id="homeabout"
    class="bg-red-800 text-yellow-50 px-4 md:px-16 lg:px-40 overflow-hidden flex flex-col"
  >
    <!-- :style="scrollY >= 200 ? 'min-height: calc(100vh)' : 'height: 200px'" -->
    <!-- <div v-show="scrollY >= 200"> -->
    <div>
      <div class="md:grid lg:grid-cols-3 md:items-start sm:gap-6">
        <!-- Image -->
        <!-- <div class="aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9">
          <img
            class="object-cover border-b-2 border-t-2 bg-green-200 rounded-3xl lg:rounded-none transform rotate-90 border-yellow-100"
            src="/me.png"
            alt=""
          />
        </div> -->

        <!-- animation image -->
        <div
          class="md:row-span-2 w-screen md:w-full h-full flex flex-col items-center my-auto md:col-span-2 lg:col-span-1"
        >
          <MeSvg v-if="mounted" />
        </div>
        <div class="">
          <!-- head -->
          <div class="space-y-4">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="text-green-200">Jasen Michael</h3>
              <p class="text-yellow-100">
                Software Engineer - Builder - Cunsultant - Educator.
              </p>
            </div>
          </div>
        </div>

        <!-- document section -->
        <div class="md:col-span-3">
          <div class="text-lg">
            <div class="text-gray-200 text-shadow-md text-3xl">
              <nuxt-content :document="bio" />
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
</template>

<script>
import MeSvg from '~/assets/me-animation3.svg?inline'
export default {
  components: {
    MeSvg,
  },
  props: {
    bio: {
      type: Object,
      default: null,
    },
  },
  data: () => {
    return {
      scrollY: 0,
      mounted: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.mounted = true
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
  },
}
</script>

<style scoped>
#ekahqn7auo2 {
  animation: ekahqn7auo2_c_o 4000ms linear 1 normal forwards;
}
@keyframes ekahqn7auo2_c_o {
  0% {
    opacity: 0;
  }
  47.500000% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
#ekahqn7auo3 {
  animation-name: ekahqn7auo3_f_o, ekahqn7auo3_s_o, ekahqn7auo3_s_do;
  animation-duration: 4000ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-direction: normal;
  animation-iteration-count: 1;
}
@keyframes ekahqn7auo3_f_o {
  0% {
    fill-opacity: 0;
  }
  47.500000% {
    fill-opacity: 0;
  }
  62.500000% {
    fill-opacity: 0.37;
  }
  75% {
    fill-opacity: 0;
  }
  100% {
    fill-opacity: 0;
  }
}
@keyframes ekahqn7auo3_s_o {
  0% {
    stroke-opacity: 1;
  }
  62.500000% {
    stroke-opacity: 1;
  }
  75% {
    stroke-opacity: 0.25;
  }
  100% {
    stroke-opacity: 0.09;
  }
}
@keyframes ekahqn7auo3_s_do {
  0% {
    stroke-dashoffset: 24010.09;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  15% {
    stroke-dashoffset: 22809.59;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  47.500000% {
    stroke-dashoffset: 14663.31;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
