<template>
  <!-- eslint-disable max-len -->
  <div>
    <nav
      class="flex px-4 md:px-16 lg:px-40 items-center w-screen z-40 fixed transition-colors duration-500 border-b-4 border-red-900"
      :class="scrollY <= 12 ? 'dark ' : 'light shadow-md'"
    >
      <div class="flex items-center w-full py-3" @click="isOpen = false">
        <!-- brand/logo -->
        <nuxt-link to="/" aria-label="Home Page ">
          <!-- <span class="sr-only">Home Page</span> -->
          <div class="flex items-center -ml-64 transition-none">
            <!-- <div class="text-6xl mb-1">&#60;</div> -->
            <IconLogo
              v-show="isMounted"
              class="text-green-400 bg-green-400 bg-clip-text fill-current h-10 z-50"
            />

            <!-- <div class="text-6xl ml-1 mb-1">&#62;</div> -->
          </div>
        </nuxt-link>

        <!-- md pages/routes -->
        <div
          class="hidden md:flex font-semibold tracking-tight uppercase items-center ml-auto space-x-2"
        >
          <div
            v-for="(link, i) in links"
            :key="i"
            class="transform duration-300 ease-in-out hover:rotate-2 hover:scale-110 cursor-pointer hover:ring-1 hover:shadow-md ring-green-400 p-2 rounded-xl md:text-xl lg:text-2xl xl:text-3xl"
          >
            <nuxt-link :to="`/${link}`">
              {{ link }}
            </nuxt-link>
          </div>
        </div>

        <!-- social -->
        <div
          class="flex items-center ml-auto md:ml-4 space-x-2 lg:space-x-4"
          :class="scrollY >= 12 ? 'text-gray-700' : 'text-green-300'"
        >
          <div>
            <a
              href="https://www.twitter.com/jasen_michael/"
              target="_blank"
              rel="noreferrer"
              aria-label="Jasen Michael Twitter link"
              class="z-50"
              @click="isOpen = false"
            >
              <IconTwitter
                class="items-center h-6 w-6 lg:h-8 lg:w-8 fill-current duration-200 transform hover:rotate-6 hover:scale-110 hover:text-blue-500"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/jasen.michael/"
              aria-label="Jasen  Michael Instagram link"
              rel="noreferrer"
              target="_blank"
              @click="isOpen = false"
            >
              <IconInstagram
                class="items-center h-6 w-6 lg:h-8 lg:w-8 fill-current duration-200 transform hover:rotate-6 hover:scale-110 hover:text-pink-700"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.github.com/jasenmichael/"
              aria-label="Jasen  Michael Github link"
              target="_blank"
              rel="noreferrer"
              @click="isOpen = false"
            >
              <IconGithub
                class="items-center h-6 w-6 lg:h-8 lg:w-8 fill-current duration-200 transform hover:rotate-6 hover:scale-110"
                :class="scrollY <= 12 ? 'hover:text-white' : 'hover:text-black'"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- mobile side panel pages/routes -->
      <aside
        class="md:hidden transform top-16 right-0 w-56 bg-gray-800 border-t-4 border-red-900 fixed h-full overflow-auto ease-in-out transition-all duration-400 z-30"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full '"
      >
        <div class="border-l-4 border-green-400 w-full h-full space-y-2">
          <div
            v-for="(link, i) in links"
            :key="i"
            class="flex flex-col uppercase font-black transform duration-300 ease-in-out text-gray-100 hover:bg-yellow-50 hover:text-gray-900 cursor-pointer py-2 mx-1 px-2 text-2xl"
            @click="isOpen = false"
          >
            <nuxt-link :to="`/${link}`" @click="isOpen = false">
              {{ link }}
            </nuxt-link>
          </div>
        </div>
      </aside>

      <!-- hamburger menu -->
      <div
        class="md:hidden ml-4 tham tham-e-squeeze tham-w-8"
        :class="isOpen && 'tham-active'"
        @click="isOpen = !isOpen"
      >
        <div class="tham-box">
          <div class="bg-current tham-inner" />
        </div>
      </div>
    </nav>

    <!-- transparent layer for click to close menu -->
    <transition
      enter-active-class="ease-in-out duration-700"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in-out duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-show="isOpen"
        class="md:hidden z-10 fixed w-screen h-screen inset cursor-default bg-black bg-opacity-70 transition-opacity"
        aria-hidden="true"
        @click="isOpen = false"
      ></button>
    </transition>
  </div>
</template>

<script>
import IconTwitter from '@/assets/icons/twitter.svg?inline'
import IconInstagram from '@/assets/icons/instagram.svg?inline'
import IconGithub from '@/assets/icons/github.svg?inline'
import IconLogo from '@/assets/logo3.svg?inline'

export default {
  components: {
    IconInstagram,
    IconTwitter,
    IconGithub,
    IconLogo,
  },
  data: () => {
    return {
      isMounted: false,
      links: ['bio', 'projects', 'blog', 'photos'],
      scrollY: 0,
      isOpen: false,
    }
  },
  mounted() {
    this.isMounted = true
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    },
  },
}
</script>

<style scoped>
.light {
  @apply bg-yellow-50 text-gray-700 bg-gradient-to-r from-yellow-50 via-yellow-50 to-green-400;
}

.dark {
  @apply bg-gray-900 text-green-300;
}

.links {
  @apply items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 fill-current transform hover:rotate-6 hover:scale-110;
}
</style>

<style>
#logo-path1_to {
  animation: logo-path1_to__to 3000ms linear 1 normal forwards;
}
@keyframes logo-path1_to__to {
  0% {
    transform: translate(-1356.467057px, 424.059038px);
    animation-timing-function: cubic-bezier(0.25, 1, 0.25, 1);
  }
  30% {
    transform: translate(750.5px, 426.000574px);
    animation-timing-function: cubic-bezier(0.25, 1, 0.25, 1);
  }
  40% {
    transform: translate(750.5px, 426.000574px);
  }
  100% {
    transform: translate(750.5px, 426.000574px);
  }
}
#logo-path1_tk {
  animation: logo-path1_tk__tk 3000ms linear 1 normal forwards;
}
@keyframes logo-path1_tk__tk {
  0% {
    transform: skewX(20deg) skewY(0deg);
  }
  20% {
    transform: skewX(0deg) skewY(0deg);
  }
  23.333333% {
    transform: skewX(-10deg) skewY(0deg);
  }
  30% {
    transform: skewX(0deg) skewY(0deg);
  }
  100% {
    transform: skewX(0deg) skewY(0deg);
  }
}
#logo-path1 {
  animation-name: logo-path1__tt, logo-path1_f_o, logo-path1_s_w;
  animation-duration: 3000ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-direction: normal;
  animation-iteration-count: 1;
}
@keyframes logo-path1__tt {
  0% {
    transform: translate(-753.24181px, -426.00058px);
  }
  40% {
    transform: translate(-751.502026px, -426.00058px);
  }
  100% {
    transform: translate(-751.502026px, -426.00058px);
  }
}
@keyframes logo-path1_f_o {
  0% {
    fill-opacity: 0;
    animation-timing-function: cubic-bezier(0.25, 1, 0.25, 1);
  }
  66.666667% {
    fill-opacity: 1;
  }
  100% {
    fill-opacity: 1;
  }
}
@keyframes logo-path1_s_w {
  0% {
    stroke-width: 10;
    animation-timing-function: cubic-bezier(0.25, 1, 0.25, 1);
  }
  66.666667% {
    stroke-width: 0;
  }
  100% {
    stroke-width: 0;
  }
}
</style>
