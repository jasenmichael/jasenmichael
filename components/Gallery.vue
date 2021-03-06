<template>
  <div class="gallery min-h-screen items-center bg-gray-900">
    <!-- <pre>{{ images[0] }}</pre> -->
    <!-- selected popup modal -->
    <!-- <pre>selected:{{ selected }}</pre> -->
    <div
      v-if="selected !== null"
      class="bg-black bg-opacity-70 z-40 fixed w-full flex-col items-center -mt-44 pr-2"
      style="height: calc(100vh + 38px)"
      @keyup="changeImage"
      @click="selected = null"
    >
      <div
        class="border-gray-900 border-t-4 border-l-4 border-r-4 text-white pl-4 rounded-t-lg md:pl-0 md:text-center mt-20 pb-6 bg-black"
      >
        <div
          class="text-gray-500 opacity-80 hover:opacity-100 hover:text-gray-300 relative flex flex-row items-center text-center p-2 cursor-pointer"
          @click="selected = null"
        >
          <div class="ml-auto">
            <div
              class="xl:mx-40 border-2 border-gray-500 hover:border-gray-300 font-bold rounded text-lg pl-2 bg-clip-border h-8 w-8 flex flex-row items-center"
            >
              X
            </div>
          </div>
        </div>
        {{ images[selected.index].title || images[selected.index].slug }}
        <!-- <pre class="text-left">{{ images[selected.index] }}</pre> -->
      </div>
      <div
        class="mx-auto flex flex-col w-full h-2/3 border-gray-900 border-l-4 border-r-4"
      >
        <img
          v-lazy-load
          :data-src="
            $config.isDev
              ? selected.image
              : `${$config.cloudinaryUrl}/https://jasenmichael.com${selected.image}`
          "
          alt=""
          class="w-full h-full object-contain bg-black"
        />
      </div>
      <div
        class="h-32 border-gray-900 border-b-4 border-r-4 border-l-4 bg-black text-white px-4 md:px-10 lg:px-40 xl:px-52 py-6 w-full rounded-b-lg"
        :class="
          images[selected.index].caption.length > 100 && 'overflow-scroll'
        "
      >
        <hr class="border-gray-600 opacity-60" />
        <!-- footer -->
        <!-- <div>
          {{ images[selected.index].caption || 'yoyo' }}
        </div> -->
        <div>
          Photo Taken:
          {{ dateTaken() }}
          <span
            >by:
            <a
              href="https://www.instagram.com/jasen.michael/"
              rel="nofollow"
              target="_blank"
            >
              @{{ images[selected.index].author }}
            </a>
          </span>
        </div>
      </div>
    </div>
    <!-- selected popup modal -->

    <!-- gallery list -->
    <div class="flex-1 md:px-2 py-2">
      <!-- <div> -->
      <transition-group
        name="fade"
        mode="out-in"
        class="mx-auto grid gap-1 md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense overflow-hidden transition-all duration-1000 ease-in-out"
      >
        <!-- :to="'/photos/' + image.slug" -->

        <div
          v-for="(image, i) in images"
          :key="i + 420"
          class="flex flex-cols"
          :class="
            (i === 0 || i % 5 === 1) && image.orientation === 'landscape'
              ? 'col-span-2 row-span-2'
              : image.orientation === 'portrait' && 'row-span-2'
          "
          @click.prevent="selected = { index: i, image: image.image }"
        >
          <!-- :class="
            image.orientation === 'landscape' ? 'col-span-2' : 'row-span-2'
          " -->
          <!-- {{ image.image }} -->
          <!-- v-if="image.loaded" -->
          <img
            v-lazy-load
            :data-src="
              $config.isDev
                ? image.image
                : `${$config.cloudinaryUrl}/https://jasenmichael.com${image.imgthumb}`
            "
            alt=""
            class="w-full h-full object-cover opacity-75 hover:opacity-100 hover:shadow-md hover:z-30 transition-all duration-1000 ease-in-out"
          />
          <!-- :class="!image.loaded ? 'opacity-0' : 'opacity-75'" -->
          <!-- v-else -->
          <!-- <div class="w-full h-full bg-green-800"></div> -->
          <!-- loading="lazy" -->
        </div>
      </transition-group>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      //   default: null,
      default: () => {
        return [
          {
            image:
              'https://64.media.tumblr.com/04e45bc6c3dfef36d5e1fa9dabe5a7b4/tumblr_nmeq6tZ6Qy1qfnq1do1_r2_1280.jpg',
            imageThumb:
              'https://64.media.tumblr.com/04e45bc6c3dfef36d5e1fa9dabe5a7b4/tumblr_nmeq6tZ6Qy1qfnq1do1_r2_1280.jpg',
            height: 1170,
            width: 779,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/26fa18afe8cd0791b5c233c3599c6e0a/tumblr_natqqjdHUG1qb9u1ho1_1280.jpg',
            imageThumb:
              'https://64.media.tumblr.com/26fa18afe8cd0791b5c233c3599c6e0a/tumblr_natqqjdHUG1qb9u1ho1_1280.jpg',
            height: 2574,
            width: 3861,
            orientation: 'landscape',
          },
          {
            image:
              'https://64.media.tumblr.com/31f81a6692e66b654e6db3425a0864ae/tumblr_n1idrzrq5B1r4or01o1_1280.jpg',
            imageThumb:
              'https://64.media.tumblr.com/31f81a6692e66b654e6db3425a0864ae/tumblr_n1idrzrq5B1r4or01o1_1280.jpg',
            height: 1920,
            width: 1280,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/867f8b50641ccead368e849238e19ecb/tumblr_n399lfhbqR1trhz08o1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/867f8b50641ccead368e849238e19ecb/tumblr_n399lfhbqR1trhz08o1_500.jpg',
            height: 750,
            width: 500,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/8f8245d47382a9976f9824be472c17f5/tumblr_mw0h0h07wZ1qzrk5xo1_1280.jpg',
            imageThumb:
              'https://64.media.tumblr.com/8f8245d47382a9976f9824be472c17f5/tumblr_mw0h0h07wZ1qzrk5xo1_1280.jpg',
            height: 713,
            width: 960,
            orientation: 'landscape',
          },
          {
            image:
              'https://64.media.tumblr.com/79891f81897ca387ccb5ff1b54697158/tumblr_mtv58kMOQx1qhno2go1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/79891f81897ca387ccb5ff1b54697158/tumblr_mtv58kMOQx1qhno2go1_500.jpg',
            height: 640,
            width: 428,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/4ef1fd80e4e808d33db154dc0ca713f5/tumblr_mtlqcnIrME1qhno2go1_640.jpg',
            imageThumb:
              'https://64.media.tumblr.com/4ef1fd80e4e808d33db154dc0ca713f5/tumblr_mtlqcnIrME1qhno2go1_640.jpg',
            height: 866,
            width: 600,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/7d7d6ae554c9a31fa37b999565850fa4/tumblr_mtlqh7dXQS1qhno2go1_640.jpg',
            imageThumb:
              'https://64.media.tumblr.com/7d7d6ae554c9a31fa37b999565850fa4/tumblr_mtlqh7dXQS1qhno2go1_640.jpg',
            height: 960,
            width: 640,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/3baf7849f9c51b3f66834470b163dd7f/tumblr_mt55ploLiE1qhno2go1_400.jpg',
            imageThumb:
              'https://64.media.tumblr.com/3baf7849f9c51b3f66834470b163dd7f/tumblr_mt55ploLiE1qhno2go1_400.jpg',
            height: 600,
            width: 400,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/2b2f68bd47d76b26ab19d60f41143abf/tumblr_mt55o91i0y1qhno2go1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/2b2f68bd47d76b26ab19d60f41143abf/tumblr_mt55o91i0y1qhno2go1_500.jpg',
            height: 721,
            width: 481,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/59ee94454e24c20fcb7d2a89dcbf20e1/tumblr_mt55m8Yuci1qhno2go1_640.jpg',
            imageThumb:
              'https://64.media.tumblr.com/59ee94454e24c20fcb7d2a89dcbf20e1/tumblr_mt55m8Yuci1qhno2go1_640.jpg',
            height: 400,
            width: 600,
            orientation: 'landscape',
          },
          {
            image:
              'https://64.media.tumblr.com/d2d2f9f3c31e69daeb3308f80021d983/tumblr_mt559ejaf11qhno2go1_640.jpg',
            imageThumb:
              'https://64.media.tumblr.com/d2d2f9f3c31e69daeb3308f80021d983/tumblr_mt559ejaf11qhno2go1_640.jpg',
            height: 427,
            width: 640,
            orientation: 'landscape',
          },
          {
            image:
              'https://64.media.tumblr.com/1b41fec40cb205e9594524f32aa2e3b9/tumblr_mt55l2pb0h1qhno2go1_400.jpg',
            imageThumb:
              'https://64.media.tumblr.com/1b41fec40cb205e9594524f32aa2e3b9/tumblr_mt55l2pb0h1qhno2go1_400.jpg',
            height: 600,
            width: 400,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/8861de2b560bcb87388dc37609d2b62c/tumblr_mt55fjEB1P1qhno2go1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/8861de2b560bcb87388dc37609d2b62c/tumblr_mt55fjEB1P1qhno2go1_500.jpg',
            height: 640,
            width: 427,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/32f68468e5f066130f98962c6ee31241/tumblr_mr31lzIN6u1qdutjeo1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/32f68468e5f066130f98962c6ee31241/tumblr_mr31lzIN6u1qdutjeo1_500.jpg',
            height: 750,
            width: 496,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/f9b1355733e32621bcab86e79bb25397/tumblr_mh9elslM5P1qctyjdo1_1280.jpg',
            imageThumb:
              'https://64.media.tumblr.com/f9b1355733e32621bcab86e79bb25397/tumblr_mh9elslM5P1qctyjdo1_1280.jpg',
            height: 2534,
            width: 1689,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/a8b96686de9f60b274df390bbf54d872/tumblr_mord6me6dc1qhno2go1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/a8b96686de9f60b274df390bbf54d872/tumblr_mord6me6dc1qhno2go1_500.jpg',
            height: 333,
            width: 500,
            orientation: 'landscape',
          },
          {
            image:
              'https://64.media.tumblr.com/65d3273244d5cd01c1e30c67286bef9d/tumblr_mg0ru6KCWK1rho1pco1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/65d3273244d5cd01c1e30c67286bef9d/tumblr_mg0ru6KCWK1rho1pco1_500.jpg',
            height: 710,
            width: 500,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/e013ef4eda7209e7c8002fd522cbd5cf/tumblr_miu6tyrRGl1s1nlqpo1_540.jpg',
            imageThumb:
              'https://64.media.tumblr.com/e013ef4eda7209e7c8002fd522cbd5cf/tumblr_miu6tyrRGl1s1nlqpo1_540.jpg',
            height: 800,
            width: 530,
            orientation: 'portrait',
          },
          {
            image:
              'https://64.media.tumblr.com/6ed001f01f456bd3b6e786008a99b13f/tumblr_meqsbg4biP1qgfvpro1_500.jpg',
            imageThumb:
              'https://64.media.tumblr.com/6ed001f01f456bd3b6e786008a99b13f/tumblr_meqsbg4biP1qgfvpro1_500.jpg',
            height: 500,
            width: 500,
            orientation: 'landscape',
          },
        ]
      },
    },
  },
  data: () => {
    return {
      loadedImages: [],
      timer: 400,
      selected: null,
    }
  },
  computed: {},
  mounted() {
    document.addEventListener('keyup', this.changeImage)
  },
  methods: {
    dateTaken() {
      return new Date(
        this.images[this.selected.index].date_taken
      ).toLocaleDateString('en-US')
    },
    plusImage() {
      this.selected =
        this.selected.index !== this.images.length - 1
          ? {
              image: this.images[this.selected.index + 1].image,
              index: this.selected.index + 1,
            }
          : {
              image: this.images[0].image,
              index: 0,
            } // null
    },
    minusImage() {
      this.selected =
        this.selected.index !== 0
          ? {
              image: this.images[this.selected.index - 1].image,
              index: this.selected.index - 1,
            }
          : {
              image: this.images[this.images.length - 1].image,
              index: this.images.length - 1,
            } // null
    },
    changeImage() {
      // console.log('yo', event.keyCode)

      // is left key 37
      if (event.keyCode === 37 && this.selected) {
        // console.log('yo', event.keyCode)
        this.minusImage()
      }
      //  is right key 39 or enter 13
      else if (
        (event.keyCode === 39 || event.keyCode === 13) &&
        this.selected
      ) {
        // console.log('yo', event.keyCode)
        this.plusImage()
      }
      //  is escape 27
      else if (event.keyCode === 27 && this.selected) {
        // console.log('yo', event.keyCode)
        this.selected = null
      }
    },
  },
}
</script>

<style>
::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
}

.gallery {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.gallery::-webkit-scrollbar {
  display: none;
}
.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter,
.fade-in-leave-to {
  position: absolute;
  opacity: 0;
}
</style>
