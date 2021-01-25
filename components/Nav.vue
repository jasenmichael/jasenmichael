<template>
  <nav
    class="flex px-10 md:px-12 lg:px-24 items-center w-screen z-50 fixed transition-all duration-500"
    :class="scrollY <= 16 ? ' light py-4' : 'py-0 dark'"
  >
    <!-- brand/logo -->
    <nuxt-link to="/">
      <div class="px-2 flex items-center">
        <div class="text-6xl">&#60;</div>
        <IconLogo
          class="fill-current h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24"
          :class="scrollY >= 16 ? 'text-green-300 ' : ''"
        />
        <div class="text-6xl ml-1">&#62;</div>
      </div>
    </nuxt-link>
    <!-- brand/logo -->
    <!-- <pre class="pt-1">{{ scrollY }}</pre> -->

    <!-- pages/routes -->
    <ul
      class="hidden md:flex font-semibold tracking-tight uppercase md:text-lg items-center ml-auto space-x-2"
    >
      <li
        v-for="(link, i) in links"
        :key="i"
        class="transform duration-300 ease-in-out hover:rotate-2 hover:scale-110 cursor-pointer hover:ring-1 hover:shadow-md ring-green-400 p-2 rounded-xl md:text-xl lg:text-3xl"
      >
        {{ link }}
      </li>
    </ul>

    <!-- social -->
    <ul
      class="flex items-center ml-auto md:ml-4 space-x-2 md:space-x-4"
      :class="scrollY >= 16 && 'text-green-300'"
    >
      <li>
        <a
          href="https://www.twitter.com/jasen_michael/"
          target="_blank"
          aria-label="Jasen Michael Twitter link"
          ><IconTwitter
            class="items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 fill-current duration-200 transform hover:rotate-6 hover:scale-110 hover:text-blue-500"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/jasen.michael/"
          target="_blank"
          aria-label="Jasen  Michael Instagram link"
          class=""
          ><IconInstagram
            class="items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 fill-current duration-200 transform hover:rotate-6 hover:scale-110 hover:text-pink-700"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/jasenmichael/"
          target="_blank"
          aria-label="Jasen  Michael Github link"
          ><IconGithub
            class="items-center h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 fill-current duration-200 transform hover:rotate-6 hover:scale-110"
            :class="scrollY <= 16 ? 'hover:text-black' : 'hover:text-white'"
          />
        </a>
      </li>
    </ul>
    <!-- hamburger menu -->
    <div class="md:hidden ml-4 tham tham-e-squeeze tham-w-8">
      <div class="tham-box">
        <div class="bg-current tham-inner" />
      </div>
    </div>
  </nav>
</template>

<script>
// import IconEmail from '@/assets/icons/email.svg?inline'
// import IconFacebook from '@/assets/icons/facebook.svg?inline'
import IconTwitter from '@/assets/icons/twitter.svg?inline'
import IconInstagram from '@/assets/icons/instagram.svg?inline'
import IconGithub from '@/assets/icons/github.svg?inline'
// import IconLogo from '@/assets/jm-logo-2.svg?inline'
import IconLogo from '@/assets/jm-hammer-icon.svg?inline'

export default {
  components: {
    IconInstagram,
    IconTwitter,
    IconGithub,
    IconLogo,
  },
  data: () => {
    return {
      links: ['Blog', 'Projects', 'Photos', 'Contact'],
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
