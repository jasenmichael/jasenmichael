<template>
  <div class="min-h-screen items-center bg-green-800">
    <div class="flex-1 md:px-2 py-2">
      <!-- <div> -->
      <transition-group
        name="fade"
        mode="out-in"
        class="grid md:gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row-dense overflow-hidden transition-all duration-1000 ease-in-out"
      >
        <div
          v-for="(image, i) in loadedImages"
          :key="i + 420"
          class="flex flex-cols items-center mx-auto w-full h-full"
          :class="image.view === 'landscape' && 'col-span-2'"
        >
          <img
            v-if="image.loaded"
            v-lazy-load
            :data-src="
              $config.isDev
                ? image.imgThumb
                : `${$config.cloudinaryUrl}/${image.imgThumb}`
            "
            alt=""
            class="w-full h-full object-cover hover:opacity-100 hover:shadow-md hover:z-30 hover:ring-2 hover:ring-gray-600 hover:scale-101 transition-all duration-1000 ease-in-out"
            :class="!image.loaded ? 'opacity-0' : 'opacity-75'"
          />
          <div v-else class="w-full h-full bg-red-900"></div>
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
            img:
              'https://64.media.tumblr.com/04e45bc6c3dfef36d5e1fa9dabe5a7b4/tumblr_nmeq6tZ6Qy1qfnq1do1_r2_1280.jpg',
            imgThumb:
              'https://64.media.tumblr.com/04e45bc6c3dfef36d5e1fa9dabe5a7b4/tumblr_nmeq6tZ6Qy1qfnq1do1_r2_1280.jpg',
            height: 1170,
            width: 779,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/26fa18afe8cd0791b5c233c3599c6e0a/tumblr_natqqjdHUG1qb9u1ho1_1280.jpg',
            imgThumb:
              'https://64.media.tumblr.com/26fa18afe8cd0791b5c233c3599c6e0a/tumblr_natqqjdHUG1qb9u1ho1_1280.jpg',
            height: 2574,
            width: 3861,
            view: 'landscape',
          },
          {
            img:
              'https://64.media.tumblr.com/31f81a6692e66b654e6db3425a0864ae/tumblr_n1idrzrq5B1r4or01o1_1280.jpg',
            imgThumb:
              'https://64.media.tumblr.com/31f81a6692e66b654e6db3425a0864ae/tumblr_n1idrzrq5B1r4or01o1_1280.jpg',
            height: 1920,
            width: 1280,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/867f8b50641ccead368e849238e19ecb/tumblr_n399lfhbqR1trhz08o1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/867f8b50641ccead368e849238e19ecb/tumblr_n399lfhbqR1trhz08o1_500.jpg',
            height: 750,
            width: 500,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/8f8245d47382a9976f9824be472c17f5/tumblr_mw0h0h07wZ1qzrk5xo1_1280.jpg',
            imgThumb:
              'https://64.media.tumblr.com/8f8245d47382a9976f9824be472c17f5/tumblr_mw0h0h07wZ1qzrk5xo1_1280.jpg',
            height: 713,
            width: 960,
            view: 'landscape',
          },
          {
            img:
              'https://64.media.tumblr.com/79891f81897ca387ccb5ff1b54697158/tumblr_mtv58kMOQx1qhno2go1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/79891f81897ca387ccb5ff1b54697158/tumblr_mtv58kMOQx1qhno2go1_500.jpg',
            height: 640,
            width: 428,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/4ef1fd80e4e808d33db154dc0ca713f5/tumblr_mtlqcnIrME1qhno2go1_640.jpg',
            imgThumb:
              'https://64.media.tumblr.com/4ef1fd80e4e808d33db154dc0ca713f5/tumblr_mtlqcnIrME1qhno2go1_640.jpg',
            height: 866,
            width: 600,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/7d7d6ae554c9a31fa37b999565850fa4/tumblr_mtlqh7dXQS1qhno2go1_640.jpg',
            imgThumb:
              'https://64.media.tumblr.com/7d7d6ae554c9a31fa37b999565850fa4/tumblr_mtlqh7dXQS1qhno2go1_640.jpg',
            height: 960,
            width: 640,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/3baf7849f9c51b3f66834470b163dd7f/tumblr_mt55ploLiE1qhno2go1_400.jpg',
            imgThumb:
              'https://64.media.tumblr.com/3baf7849f9c51b3f66834470b163dd7f/tumblr_mt55ploLiE1qhno2go1_400.jpg',
            height: 600,
            width: 400,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/2b2f68bd47d76b26ab19d60f41143abf/tumblr_mt55o91i0y1qhno2go1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/2b2f68bd47d76b26ab19d60f41143abf/tumblr_mt55o91i0y1qhno2go1_500.jpg',
            height: 721,
            width: 481,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/59ee94454e24c20fcb7d2a89dcbf20e1/tumblr_mt55m8Yuci1qhno2go1_640.jpg',
            imgThumb:
              'https://64.media.tumblr.com/59ee94454e24c20fcb7d2a89dcbf20e1/tumblr_mt55m8Yuci1qhno2go1_640.jpg',
            height: 400,
            width: 600,
            view: 'landscape',
          },
          {
            img:
              'https://64.media.tumblr.com/d2d2f9f3c31e69daeb3308f80021d983/tumblr_mt559ejaf11qhno2go1_640.jpg',
            imgThumb:
              'https://64.media.tumblr.com/d2d2f9f3c31e69daeb3308f80021d983/tumblr_mt559ejaf11qhno2go1_640.jpg',
            height: 427,
            width: 640,
            view: 'landscape',
          },
          {
            img:
              'https://64.media.tumblr.com/1b41fec40cb205e9594524f32aa2e3b9/tumblr_mt55l2pb0h1qhno2go1_400.jpg',
            imgThumb:
              'https://64.media.tumblr.com/1b41fec40cb205e9594524f32aa2e3b9/tumblr_mt55l2pb0h1qhno2go1_400.jpg',
            height: 600,
            width: 400,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/8861de2b560bcb87388dc37609d2b62c/tumblr_mt55fjEB1P1qhno2go1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/8861de2b560bcb87388dc37609d2b62c/tumblr_mt55fjEB1P1qhno2go1_500.jpg',
            height: 640,
            width: 427,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/32f68468e5f066130f98962c6ee31241/tumblr_mr31lzIN6u1qdutjeo1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/32f68468e5f066130f98962c6ee31241/tumblr_mr31lzIN6u1qdutjeo1_500.jpg',
            height: 750,
            width: 496,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/f9b1355733e32621bcab86e79bb25397/tumblr_mh9elslM5P1qctyjdo1_1280.jpg',
            imgThumb:
              'https://64.media.tumblr.com/f9b1355733e32621bcab86e79bb25397/tumblr_mh9elslM5P1qctyjdo1_1280.jpg',
            height: 2534,
            width: 1689,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/a8b96686de9f60b274df390bbf54d872/tumblr_mord6me6dc1qhno2go1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/a8b96686de9f60b274df390bbf54d872/tumblr_mord6me6dc1qhno2go1_500.jpg',
            height: 333,
            width: 500,
            view: 'landscape',
          },
          {
            img:
              'https://64.media.tumblr.com/65d3273244d5cd01c1e30c67286bef9d/tumblr_mg0ru6KCWK1rho1pco1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/65d3273244d5cd01c1e30c67286bef9d/tumblr_mg0ru6KCWK1rho1pco1_500.jpg',
            height: 710,
            width: 500,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/e013ef4eda7209e7c8002fd522cbd5cf/tumblr_miu6tyrRGl1s1nlqpo1_540.jpg',
            imgThumb:
              'https://64.media.tumblr.com/e013ef4eda7209e7c8002fd522cbd5cf/tumblr_miu6tyrRGl1s1nlqpo1_540.jpg',
            height: 800,
            width: 530,
            view: 'portrait',
          },
          {
            img:
              'https://64.media.tumblr.com/6ed001f01f456bd3b6e786008a99b13f/tumblr_meqsbg4biP1qgfvpro1_500.jpg',
            imgThumb:
              'https://64.media.tumblr.com/6ed001f01f456bd3b6e786008a99b13f/tumblr_meqsbg4biP1qgfvpro1_500.jpg',
            height: 500,
            width: 500,
            view: 'landscape',
          },
        ]
      },
    },
  },
  data: () => {
    return {
      loadedImages: [],
      timer: 400,
    }
  },
  mounted() {
    this.images.forEach((image, i) => {
      setTimeout(() => {
        this.loadedImages.push(image)
        setTimeout(() => {
          this.loadedImages[i].loaded = true
        }, 200)
      }, this.timer * i)
    })
  },
}
</script>

<style>
/* .isLoaded {
  opacity: 0.75;
}
.notLoaded {
  opacity: 0;
} */

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
