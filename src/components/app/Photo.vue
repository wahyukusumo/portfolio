<script setup>
import Icon from '@/components/Icon.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <Icon :appName="'Photos'" :bgImage="'bg-[url(@/assets/icons/camera_alt.webp)]'"
    @windowFull="(isParentFull) => (isFull = isParentFull)">

    <!-- Full Image View -->
    <div v-show="imgFullScreen" class="flex items-center justify-center w-full h-full">
      <img :src="imgFullScreen" class="absolute z-20 shadow-md overflow-x-auto"
        :class="{ 'h-[90vh]': isFull, 'h-[60vh]': !isFull }">
      <div class="w-full h-[60vh] bg-gray-400 dark:bg-gray-700 blur-xl cursor-pointer" @click="imgFullScreen = false" />
    </div>

    <!-- Gallery View -->
    <div v-show="!imgFullScreen" class="p-2 gap-2 grid grid-cols-1 md:grid-cols-3 xl:p-4 relative"
      :class="{ 'xl:grid-cols-5': isFull }">
      <div class="container mx-auto relative cursor-pointer" v-for="image in appdata.galleries">

        <div class="h-80 xl:h-56 relative rounded-lg" :class="{ 'xl:h-[22rem]': isFull }"
          @click="imgFullScreen = image.image">
          <!-- Image -->
          <div class="absolute inset-0 bg-cover bg-center z-0 rounded-lg"
            :style="{ backgroundImage: `url(${image.image})` }" />
          <!-- Description on Hover -->
          <div class="opacity-0 hover:opacity-100 hover:rounded-lg duration-300 absolute inset-0
            z-10 flex justify-center items-center text-center text-base text-white bg-black/30">
            <p>{{ image.caption }}</p>
          </div>
        </div>
      </div>
    </div>

  </Icon>
</template>

<script>
export default {
  data() {
    return {
      imgFullScreen: false,
      fullImage: false,
      isFull: undefined
    }
  },
  methods: {
    seeFullImage() {
      this.fullImage = !this.fullImage
      console.log(this.fullImage)
    }
  },
  props: ['appdata']
}
</script>
