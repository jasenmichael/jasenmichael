<template>
  <div
    class="pb-10 px-4 md:px-16 lg:px-40 overflow-hidden flex flex-col"
    style="min-height: calc(100vh - 4rem)"
  >
    <div class="my-auto">
      <div class="h-44 md:h-52 lg:h-96">
        <h1
          class="pb-4 text-5xl md:text-7xl lg:text-9xl text-transparent bg-gradient-to-r bg-clip-text from-green-500 via-yellow-50 to-gray-500"
        >
          Hi, I'm Jasen
        </h1>
        <div class="h-1/3 text-3xl md:text-4xl lg:text-6xl text-yellow-50">
          {{ currentLine }}
          <span>{{ curser ? '_' : '&nbsp;' }}</span>
        </div>
      </div>

      <!-- more btn -->
      <div
        class="btn w-16 h-16 flex mx-auto pr-20 items-center justify-center cursor-pointer"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
      >
        <div
          v-if="done"
          v-smooth-scroll="{ duration: 700 }"
          href="#homeabout"
          class="block p-7 relative transition-all ease-in-out duration-700"
        >
          <span
            class="btn__circle absolute ring-offset-green-700 ring-4 ring-green-700"
          ></span>
          <span class="h-12 w-12 btn__white-circle absolute bg-red-700">
            <svg
              id="icon-arrow-right"
              class="w-8 h-8 text-green-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 12"
            >
              <path
                d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"
              ></path>
            </svg>
          </span>
          <span
            class="btn__text absolute z-50 text-shadow text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            :class="
              !isHovering
                ? 'text-yellow-100 animate-pulse'
                : 'text-green-400 animate-none'
            "
          >
            More...</span
          >
        </div>
      </div>

      <!-- eye button -->
      <!-- <div
        class="w-20 h-20 mx-auto flex items-center justify-center"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
      >
        <a
          v-show="done"
          v-smooth-scroll="{ duration: 1000 }"
          href="#homeabout"
          class="bg-clip-text cursor-pointer"
        >
          <div
            class="flex flex-col items-center transition-all text-green-200 hover:text-red-800 duration-700 ease-in-out transform translate-y-1 opacity-100 animate-pulse hover:animate-none"
          >
            <div :class="isHovering ? 'block' : 'hidden'">
              <svg viewBox="0 0 193.5 116">
                <circle
                  class="eye pupil pupil--open"
                  cx="96.8"
                  cy="58"
                  r="24"
                />
                <path
                  class="eye lid lid--open"
                  d="M5,58L5,58C23.4,26.3,57.6,5,96.8,5c39.3,0,73.8,21.3,91.8,53l0,0c0,0-26.7,53-91.8,53S5,58,5,58z"
                />
              </svg>
            </div>
            <div class="" :class="isHovering && 'hidden'">
              <svg viewBox="0 0 193.5 116">
                <circle
                  class="eye pupil pupil--close"
                  cx="96.8"
                  cy="58"
                  r="24"
                />
                <path
                  class="eye lid lid--close"
                  d="M5,58L5,58C23.4,26.3,57.6,5,96.8,5c39.3,0,73.8,21.3,91.8,53l0,0c0,0-26.7,53-91.8,53S5,58,5,58z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      lines: [
        "The 'e' is for efficiency.",
        'I like to build stuff, and manifest things.',
        "Let's create something together, and change the world!",
      ],
      currentLine: '',
      currentLineIndex: 0,
      text: '',
      timer: 0,
      typeSpeed: 70,
      index: 0,
      curser: false,
      flashing: null,
      loop: null,
      done: false,
      isHovering: false,
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.done = true
    // }, 1000)
    this.flashCurser()
    this.text = this.lines[0]
    this.typeWriter(this.text)
    this.startLoop()
  },
  beforeDestroy() {
    clearInterval(this.flashing)
    clearInterval(this.loop)
  },
  methods: {
    scrollTo(id) {
      this.$smoothScroll({
        scrollTo: '#homeabout',
        duration: 1000,
      })
    },
    flashCurser() {
      this.flashing = setInterval(() => {
        this.curser = !this.curser
      }, 300)
    },
    startLoop() {
      if (this.loop) {
        clearInterval(this.loop)
        this.loop = null
      }
      this.loop = setInterval(() => {
        this.startTyping()
      }, 30000)
    },
    startTyping() {
      this.flashCurser()
      this.currentLineIndex = 0
      this.currentLine = ''
      this.index = 0
      this.text = this.lines[0]
      this.typeWriter(this.text)
    },
    async typeWriter() {
      if (this.index < this.text.length) {
        this.currentLine += this.text.charAt(this.index)
        this.index++
        setTimeout(this.typeWriter, this.typeSpeed)
      } else {
        // if (this.currentLineIndex < this.lines.length) {
        await setTimeout(async () => {
          await this.clearLine()
          await this.typeNextLine()
        }, 1200)
        // }
      }
    },
    clearLine() {
      if (this.index !== 0 && this.currentLineIndex + 1 !== this.lines.length) {
        this.currentLine = this.currentLine.slice(0, -1)
        this.index--
        setTimeout(this.clearLine, 25)
      }
      if (this.currentLineIndex + 1 === this.lines.length) {
        this.done = true
      }
    },
    typeNextLine() {
      // TODO: if line ends with ++ append
      if (this.currentLineIndex + 1 !== this.lines.length) {
        setTimeout(() => {
          this.currentLineIndex = this.currentLineIndex + 1
          this.currentLine = ''
          this.index = 0
          this.text = this.lines[this.currentLineIndex]
          setTimeout(this.typeWriter, 500)
        }, 1500)
      } else {
        clearInterval(this.flashing)
        this.curser = false
      }
    },
  },
}

// lines
// currentLine
// loadLines(lines)
// typeLine(line)
</script>

<style scoped>
.btn__circle {
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 100%;
  width: 100%;

  /* box-shadow: 0 0 1px 1px red; */
  transition: 0.3s linear;
}
.btn__white-circle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);

  /* width: 56px;
  height: 56px; */
  border-radius: 100%;

  /* background: #fff; */
  display: flex;
  transition: 0.3s ease-in-out;
}
.btn__white-circle svg {
  /* width: 24px;
  height: 24px; */
  margin: auto;
}
.btn__text {
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  z-index: 2;
  padding: 0 18px;
  transition: 0.3s linear;
}
.btn:hover .btn__circle {
  transform: scale(0);
}
.btn:hover .btn__white-circle {
  transform: translate(-50%, -50%) scale(1);
}
.btn:hover .btn__text {
  transform: translate(1rem, -50%);
}

/* .eye {
  fill: none;

  stroke: currentColor;
  stroke-width: 10;
  stroke-miterlimit: 10;
  stroke-linecap: round;
}

svg {
  display: block;
  margin: 35px auto;
  width: 70px;
}

.lid {
  stroke-dasharray: 222;
  stroke-dashoffset: 0;
}

.pupil {
  stroke-dasharray: 150;
  stroke-dashoffset: 0;
  -webkit-transform: rotate(170deg);
  -moz-transform: rotate(170deg);
  -o-transform: rotate(170deg);
  -ms-transform: rotate(170deg);
  transform: rotate(170deg);
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

.lid--close {
  animation: lid--close 0.5s ease-in-out forwards;
}
.lid--open {
  animation: lid--open 0.5s ease-in-out forwards;
}

.pupil--close {
  animation: pupil--close 0.5s ease-in-out forwards;
}
.pupil--open {
  animation: pupil--open 0.5s ease-in-out forwards;
}

@keyframes lid--close {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -222;
  }
}

@keyframes lid--open {
  from {
    stroke-dashoffset: -222;
  }
  to {
    stroke-dashoffset: -444;
  }
}

@keyframes pupil--close {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -150;
  }
}

@keyframes pupil--open {
  from {
    stroke-dashoffset: -150;
  }
  to {
    stroke-dashoffset: -300;
  } 
}  */
</style>
