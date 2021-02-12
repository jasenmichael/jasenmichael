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
            <!-- <IconLogo
              v-show="isMounted"
              class="text-green-400 bg-green-400 bg-clip-text fill-current h-10 z-50"
            /> -->
            <svg
              class="e7h61dww922a1 text-green-400 fill-current h-10 z-50"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-3000 0 4500 472"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
            >
              <g
                class="e7h61dww922a2_to"
                transform="translate(-1356.467057,424.059038)"
              >
                <g class="e7h61dww922a2_tk" transform="skewX(20) skewY(0)">
                  <path
                    class="e7h61dww922a2 text-green-400 fill-current"
                    d="M1214,411C1200.220000,399.130000,1188.480000,386.590000,1177.630000,372C1126.180000,302.830000,1119.410000,210.680000,1157.750000,134C1162.280000,124.940000,1166.270000,117.430000,1172.030000,109C1179.960000,97.390000,1189.280000,86.100000,1199.090000,76.040000L1208,67.970000C1211.760000,64.420000,1224.960000,52.750000,1229,50.760000C1230.320000,50.110000,1231.370000,49.730000,1232.830000,50.250000C1235.790000,51.310000,1244.850000,64.730000,1247.140000,68C1248.370000,69.770000,1250.530000,72.580000,1250.430000,74.830000C1250.280000,78.250000,1240.750000,84.880000,1238,87.290000C1228.400000,95.700000,1216.330000,108.840000,1208.500000,119C1186.020000,148.170000,1172.590000,183.330000,1169.910000,220L1169,230C1168.470000,275.430000,1179.640000,313.220000,1206.730000,350C1213.750000,359.520000,1228.260000,376.010000,1237,383.720000C1239.690000,386.090000,1250.650000,395.160000,1251.100000,398.090000C1251.500000,400.670000,1248.590000,404.030000,1247.130000,406L1233,425C1226.920000,422.400000,1219.150000,415.440000,1214,411ZM1375,375C1429.250000,320.750000,1447.580000,243.340000,1421.310000,171C1413.400000,149.230000,1395.900000,122.660000,1379.960000,106L1359,85.040000C1356.800000,82.940000,1351.140000,78.690000,1350.440000,75.990000C1349.780000,73.450000,1351.790000,70.940000,1353.160000,69L1362.870000,56C1364.080000,54.400000,1366.480000,50.920000,1368.300000,50.160000C1371.050000,49.020000,1373.980000,51.660000,1376,53.210000L1395,69.170000C1421.170000,92.830000,1438.580000,120.910000,1452.280000,153C1460.560000,172.400000,1467.970000,204.920000,1468,226L1468,250L1467.080000,260C1463.790000,301.200000,1446.920000,341.020000,1422.370000,374C1411.750000,388.270000,1400.580000,400.110000,1387,411.580000C1381.470000,416.250000,1374.730000,422.380000,1368,425C1363.350000,416.910000,1351.960000,404.950000,1350,397C1360.090000,390.240000,1366.540000,383.460000,1375,375ZM154.595325,76.040000C168.995325,92.510000,161.215325,121.580000,138.925325,125.740000C126.975325,127.970000,114.305325,122.980000,108.335325,112C102.815325,101.830000,104.345325,84.710000,112.135325,76.040000C116.325325,71.380000,121.945325,68.890000,127.925325,67.470000C137.645325,66.110000,147.895325,68.370000,154.595325,76.040000ZM285,149.610000L313,146.910000C327.440000,145.920000,335.450000,145.520000,350,147.920000C363.700000,150.180000,380.080000,155.730000,389.830000,166.040000C400.510000,177.340000,406.340000,192.640000,407.960000,208L407.960000,216L409,226L409,340C409,342.610000,409.380000,347.180000,407.260000,349.050000C405.470000,350.620000,394.910000,351.940000,392,352.410000L348,357L332,358L322,357.090000C302.630000,355.760000,286.840000,354.210000,270,343.300000C249.930000,330.300000,245.740000,311.220000,246,289C246.080000,282.160000,247.720000,274.250000,250.510000,268C253.830000,260.580000,260.650000,252.510000,267,247.520000C283.750000,234.340000,304.360000,230.860000,325,229.960000L334,229.320000L349,230.170000L372,234C372,223.680000,372.490000,213.950000,368.910000,204C361.660000,183.840000,342.480000,177.980000,323,178L311,178.910000C302.430000,179.500000,294.450000,180.250000,286,182L271,186L267,154L285,149.610000ZM493,317.660000C508.470000,322.620000,525.720000,326.180000,542,326C551.720000,325.890000,568.730000,323.820000,577,318.790000C591.280000,310.110000,591.340000,295.740000,579,285.320000C562.520000,271.430000,524.780000,263.310000,503,252.240000C487.970000,244.610000,474.250000,233.100000,470.420000,216C469.150000,210.320000,468.690000,205.830000,469.090000,200C469.510000,193.840000,471.620000,185.510000,474.370000,180C492.770000,143.210000,544.140000,144.110000,579,147.840000C587.810000,148.780000,596.370000,150.030000,605,152.130000C607.320000,152.690000,612.590000,153.610000,613.780000,155.560000C615.490000,157.730000,614.090000,162.530000,613.780000,165L609,188L590,182.650000C577.600000,179.720000,562.720000,177.850000,550,178C538.690000,178.140000,523.220000,179.760000,514,186.710000C504.880000,193.580000,502.370000,206.270000,511.180000,214.540000C519.460000,222.300000,531.570000,226.770000,542,230.810000C560.860000,238.120000,580.990000,243.730000,598,255C613.290000,265.140000,624.910000,277.740000,625,297L625,304C624.690000,330.510000,604.800000,346.340000,581,352.850000C551.750000,360.850000,513.070000,359.010000,484,350.850000L465,344L472,310L493,317.660000ZM835.130000,337C835.670000,339.600000,836.640000,344.060000,835.130000,346.350000C833.620000,348.290000,830.190000,349.210000,828,349.860000L812,354C800.200000,356.360000,788.040000,358.020000,776,358L764,357.090000C756.180000,356.540000,748.630000,355.880000,741,353.850000C732.010000,351.450000,724.080000,348.200000,716,343.570000C685.910000,326.350000,670.050000,292.030000,670,258L670,244C670.320000,216.830000,682.700000,187.300000,703,169.170000C719.610000,154.340000,741.880000,146.520000,764,146.010000C768.870000,145.900000,770.500000,146.400000,775,146.830000C793.270000,148.600000,807.790000,152.890000,822,165.290000C841.030000,181.890000,849.960000,213.370000,850,238L850,262L707,262C708.540000,273.700000,709.710000,281.190000,715.120000,292C732.490000,326.700000,778.960000,327.820000,812,320.790000L831,315C833.450000,321.720000,834.090000,329.860000,835.130000,337ZM899,165C899,162.920000,898.770000,159.260000,900.020000,157.560000C901.510000,155.540000,906.590000,154.720000,909,154.210000L934,149.750000L962,147C989.400000,146.680000,1016.760000,147.190000,1036.910000,169C1049.540000,182.670000,1055.780000,205.650000,1056,224L1056,353L1020,353L1020,243C1019.980000,230.350000,1018.130000,211.150000,1012.100000,200C1002.090000,181.500000,984.940000,179.780000,966,180L946,182.050000C943.530000,182.330000,939.390000,182.720000,937.600000,184.580000C935.670000,186.580000,936.010000,190.400000,936,193L936,353L899,353L899,165ZM146,151L167,151C168.950000,151.040000,171.630000,150.900000,172.980000,152.600000C174.230000,154.190000,174,158.010000,174,160L174,352C173.940000,391.300000,151.500000,425.930000,109,426C90.290000,426.030000,73.020000,425.090000,55,419.260000C51.210000,418.030000,39.970000,414.550000,38.690000,410.790000C37.820000,408.230000,39.870000,403.470000,40.810000,401L48,380C62.130000,384.900000,81.860000,393.770000,97,392.910000C107.530000,392.310000,118.900000,390.100000,126.960000,382.790000C140.090000,370.870000,137,343.470000,137,327L137,182L56,182L56,151L146,151ZM808.540000,207C796.630000,176.570000,759.550000,170.130000,734,187.100000C718.790000,197.210000,710.390000,214.300000,708,232L813,232C812.930000,224.410000,811.300000,214.070000,808.540000,207ZM372,273C371.990000,270.490000,372.360000,266.720000,370.400000,264.850000C368.540000,263.080000,362.620000,262.350000,360,261.920000C351.170000,260.460000,342.940000,259.900000,334,260C318.880000,260.180000,299.650000,262.970000,289.210000,275.010000C280.420000,285.160000,281.760000,305.480000,291.180000,314.810000C295.710000,319.300000,304.760000,322.570000,311,323.740000C321,325.620000,330.850000,326.110000,341,326L372,323L372,273Z"
                    transform="translate(-753.241810,-426.000580)"
                    fill="current"
                    fill-opacity="0"
                    stroke="rgb(0,0,0)"
                    stroke-width="10"
                    stroke-linecap="square"
                    stroke-linejoin="bevel"
                    stroke-dasharray="7183.850000"
                  />
                </g>
              </g>
            </svg>

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
// import IconLogo from '@/assets/logo2.svg?inline'

export default {
  components: {
    IconInstagram,
    IconTwitter,
    IconGithub,
    // IconLogo,
  },
  data: () => {
    return {
      isMounted: false,
      links: ['blog', 'projects', 'photos', 'contact'],
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
.e7h61dww922a2_to {
  animation: e7h61dww922a2_to__to 3000ms linear 1 normal forwards;
}
@keyframes e7h61dww922a2_to__to {
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
.e7h61dww922a2_tk {
  animation: e7h61dww922a2_tk__tk 3000ms linear 1 normal forwards;
}
@keyframes e7h61dww922a2_tk__tk {
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
.e7h61dww922a2 {
  animation-name: e7h61dww922a2__tt, e7h61dww922a2_f_o, e7h61dww922a2_s_w;
  animation-duration: 3000ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-direction: normal;
  animation-iteration-count: 1;
}
@keyframes e7h61dww922a2__tt {
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
@keyframes e7h61dww922a2_f_o {
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
@keyframes e7h61dww922a2_s_w {
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
