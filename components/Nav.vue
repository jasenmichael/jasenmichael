<template>
  <div>
    <nav
      class="flex px-4 md:px-16 lg:px-40 items-center w-screen z-50 fixed transition-colors duration-500 border-b-4 border-red-900"
      :class="scrollY <= 12 ? 'dark ' : 'light shadow-md'"
    >
      <div class="flex items-center w-full" @click="isOpen = false">
        <!-- brand/logo -->
        <nuxt-link to="/">
          <div class="flex items-center">
            <div class="text-6xl mb-1">&#60;</div>
            <IconLogo
              class="text-green-400 bg-clip-text fill-current h-14 w-14"
            />
            <div class="text-6xl ml-1 mb-1">&#62;</div>
          </div>
        </nuxt-link>

        <!-- md pages/routes -->
        <div
          class="hidden md:flex font-semibold tracking-tight uppercase items-center ml-auto space-x-2"
        >
          <div
            v-for="(link, i) in links"
            :key="i"
            class="transform duration-300 ease-in-out hover:rotate-2 hover:scale-110 cursor-pointer hover:ring-1 hover:shadow-md ring-green-400 p-2 rounded-xl md:text-xl lg:text-2xl xl:text-4xl"
          >
            <nuxt-link :to="`/${link}`">
              {{ link }}
            </nuxt-link>
          </div>
        </div>

        <!-- social -->
        <div
          class="flex items-center ml-auto md:ml-4 space-x-2 md:space-x-4"
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
                class="items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14 fill-current duration-200 transform hover:rotate-6 hover:scale-110 hover:text-blue-500"
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
                class="items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14 fill-current duration-200 transform hover:rotate-6 hover:scale-110 hover:text-pink-700"
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
                class="items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 xl:h-14 xl:w-14 fill-current duration-200 transform hover:rotate-6 hover:scale-110"
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
import IconLogo from '@/assets/jm-logo2.svg?inline'

export default {
  components: {
    IconInstagram,
    IconTwitter,
    IconGithub,
    IconLogo,
  },
  data: () => {
    return {
      links: ['blog', 'projects', 'photos', 'contact'],
      scrollY: 0,
      isOpen: false,
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

<style>
.light {
  @apply bg-yellow-50 text-gray-700 bg-gradient-to-r from-yellow-50 via-yellow-50 to-green-400;
}

.dark {
  @apply bg-gray-900 text-yellow-50;
}

.links {
  @apply items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 fill-current transform hover:rotate-6 hover:scale-110;
}
</style>
