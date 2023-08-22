<template>
  <Icon :appName="'Photos'" :bgImage="'bg-[url(./icon/camera_alt.png)]'"
        @windowFull="(isFull) => this.isFull = isFull">

    <div class="p-2 gap-2 grid grid-cols-1 md:grid-cols-3 xl:gap-4 xl:p-4 relative" :class="{'xl:grid-cols-5': this.isFull}">
      <div class="container mx-auto relative" v-for="image in appdata.galleries">

        <!-- <img ref="imageRef"
          class="h-auto max-w-full rounded-lg relative"
          :class="{'col-span-full': fullImage}"
          :key="image.index"
          :src="image" alt="" title="flksajflk">

        <figcaption class="absolute px-4 text-base text-center text-white bottom-6 bg-black/30 hidden hover:block">
          <p>Do you want to get notified when a new component is added to Flowbite?</p>
        </figcaption> -->

        <div class="h-80 xl:h-56 relative rounded-lg" :class="{'xl:h-[22rem]': this.isFull}">
          <div class="absolute inset-0 bg-cover bg-center z-0 rounded-lg" :style="{ backgroundImage: `url(${image.image})` }"></div>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-center text-base text-white bg-black/30">
            <p>{{ image.caption }}</p>
          </div>
        </div>

      </div>

    </div>

    <!-- <Card class="grid grid-cols-2 xl:grid-cols-3 divide-x divide-y divide-inherit transition-all"
          :class="{'xl:grid-cols-5': this.isFull}">
      <img ref="imageRef"
          @click="seeFullImage"
          v-for="image in appdata.galleries"
          :class="{'col-span-full': fullImage}"
          :key="image.index"
          :src="image" alt="">
    </Card> -->

  </Icon>
</template>

<script>
import Icon from '../Icon.vue';
import Card from '../Card.vue';

export default {
  data() {
    return {
      fullImage: false,
      isFull: undefined,
    };
  },
  methods: {
    seeFullImage() {
      this.fullImage = !this.fullImage
      console.log(this.fullImage)
    },
    checkFull(isFull) {
      console.log('photos ' + isFull)
    },
  },
  components: {
    Icon,
    Card
  },
  props: ['appdata']
};
</script>