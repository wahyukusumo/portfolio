<template>
  <div class="flex flex-col justify-center items-center">

    <!-- TOOLTIP -->
    <div ref="tooltipRef" v-bind:class="{'xl:hidden': !tooltipShow, 'xl:block': tooltipShow}"
      class="hidden xl:block xl:-translate-y-[120px] absolute border-0 mb-3 leading-normal text-sm max-w-xs text-left no-underline break-words">
        <div class="bg-black/50 text-white font-semibold py-1 px-3 mb-0 rounded-lg backdrop-blur-sm">
          {{ appName }}
        </div>
    </div>

    <!-- ICON -->
    <div @click="openingApp" :class="[bgColor, bgImage, {'lg:-translate-y-1': openApp}]"
          ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()"
          class="w-14 h-14 mx-auto p-2 rounded-[13.3px] cursor-pointer bg-no-repeat bg-cover
                xl:hover:-translate-y-6 xl:transition-all xl:hover:scale-[3] xl:hover:mx-5" />

    <!-- <span :class="{'block': openApp, 'hidden': !openApp}" class="bg-white h-0.5 w-6/12 rounded-full mt-1"></span> -->

    <p class="text-center text-xs pt-1 xl:hidden">{{ appName }}</p>
  </div>

  <WindowApp v-show="openApp" :openApp="openApp" :appName="appName" @closeApp="openingApp" @appID="(id) => this.$emit('appID', id)" @windowFull="checkFull">
    <slot></slot>
  </WindowApp>
</template>

<script>
import WindowApp from '@/components/WindowApp.vue';

export default {
  data() {
    return {
      openApp: false,
      tooltipShow: false
    };
  },
  methods: {
    openingApp() {
      this.openApp = !this.openApp

    },
    checkFull(isFull) {
      console.log('icon ' + isFull)
      this.$emit('windowFull', isFull)
    },
    toggleTooltip: function () {
      if (this.tooltipShow) {
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        // createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
        //   placement: "top"
        // });
      }
    }
  },
  components: {
    WindowApp,
  },
  props: ['appName', 'bgColor', 'bgImage']
};
</script>