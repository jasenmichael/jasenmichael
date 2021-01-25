<template>
  <div
    class="pb-10 px-4 md:px-16 lg:px-40 overflow-hidden"
    style="height: calc(100vh)"
  >
    <h1
      class="pb-4 text-5xl md:text-7xl lg:text-9xl text-transparent bg-gradient-to-r bg-clip-text from-green-500 via-yellow-50 to-gray-500"
    >
      Hi, I'm Jasen
    </h1>
    <div class="h-1/3 text-3xl md:text-4xl lg:text-6xl text-gray-300">
      {{ currentLine }}
      <span>{{ curser ? '_' : '&nbsp;' }}</span>
    </div>
    <!-- <div v-if="done">{{ done }}</div> -->
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
    }
  },
  mounted() {
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
