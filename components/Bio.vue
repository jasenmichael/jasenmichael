<template>
  <div
    class="text-yellow-50 mt-10 md:mt-12 lg:mt-14 px-4 md:px-16 lg:px-52 mb-6 md:mb-0 lg:mb-2 overflow-hidden"
  >
    <!-- animation image -->
    <!-- document section -->
    <!-- <div class="max-w-md rounded-xl overflow-hidden">
      <MeSvg />
    </div> -->
    <nuxt-content
      :document="bio"
      class="prose-lg lg:prose-xl pt-10 prose-yellow"
    />
    <!-- links section -->
    <ul class="flex">
      <div class="mx-auto flex space-x-5 items-center md:mb-20">
        <li>
          <a
            href="https://twitter.com/jasen_michael"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
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
          <a
            href="https://www.linkedin.com/in/jasenmichael/"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
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
        <li>
          <a
            href="https://github.com/jasenmichael"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Github</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
// import MeSvg from '~/assets/me-animation3.svg?inline'
export default {
  // components: {
  //   MeSvg,
  // },
  props: {
    bio: {
      type: Object,
      default: null,
    },
  },
  // data: () => {
  //   return {
  //     scrollY: 0,
  //     mounted: false,
  //   }
  // },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  //   this.mounted = true
  // },
  // methods: {
  //   handleScroll() {
  //     this.scrollY = window.scrollY
  //   },
  // },
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
