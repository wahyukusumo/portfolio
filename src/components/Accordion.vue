<template>
  <Card class="flex items-center gap-4 cursor-pointer" @click="toggleAlbum">
    <div>
      <div :style="{ backgroundImage: `url(${this.thumbnail})` }" class="bg-center bg-cover h-16 w-16"></div>
    </div>

    <div class="flex flex-col">
      <div class="flex items-center">
        <ion-icon name="caret-up-outline" v-show="albumShow"></ion-icon>
        <ion-icon name="caret-down-outline" v-show="!albumShow"></ion-icon>
        <span class="font-semibold text-base ml-2">{{ title }}</span>
      </div>
      <slot name="badge"></slot>
    </div>
  </Card>

  <Card v-if="albumShow" class="animate-sliding">
    <slot name="content"></slot>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  data() {
    return {
      albumShow: false
    }
  },
  methods: {
    toggleAlbum() {
      this.albumShow = !this.albumShow
    }
  },
  components: {
    Card
  },
  props: ['title', 'thumbnail']
}
</script>
