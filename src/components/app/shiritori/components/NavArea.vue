<script setup>
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="absolute w-full top-0 bg-gray-200 dark:bg-dark-900 p-2 flex">
    <div class="flex-none w-14 items-start justify-start gap-1 mt-3">
      <button @click="hideChatWindow()">
        <ChevronLeftIcon class="size-8 text-blue-700" />
      </button>
    </div>

    <div class="flex-1 flex justify-center items-center gap-5 me-14">
      <div class="flex flex-col items-center justify-center gap-1">
        <div class="size-12 rounded-full flex items-center justify-center text-2xl uppercase"
          :class="badgeColor(gameSaves.difficulty)">{{ gameSaves.difficulty.at(0) }}</div>
        <!-- <img class="size-12 rounded-full" :src="imgSrc(gameSaves.name)" alt="Profile image"> -->
        <span class="font-semibold capitalize">{{ gameSaves.difficulty }}</span>
      </div>

      <div v-show="gameSaves.isGameStart" class="flex font-semibold text-2xl">
        {{ gameSaves.score.bot }}-{{ gameSaves.score.me }}
      </div>
      <div v-show="gameSaves.isGameStart" class="flex flex-col items-center justify-center gap-1">
        <div class="size-12 rounded-full flex items-center justify-center text-2xl uppercase bg-rose-500 text-rose-300">
          M
        </div>
        <!-- <img class="size-12 rounded-full" src="@/assets/images/me.webp" alt="Profile image"> -->
        <span class="font-semibold">Me</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    badgeColor(difficulty) {
      switch (difficulty) {
        case 'help':
          return 'bg-yellow-100 text-yellow-900';
        case 'easy':
          return 'bg-emerald-300 text-emerald-900';
        case 'medium':
          return 'bg-blue-300 text-blue-900';
        case 'hard':
          return 'bg-rose-300 text-rose-900';
        case 'extreme':
          return 'bg-violet-300 text-violet-900';
      }
    },
    hideChatWindow() {
      this.$emit('hide-chat', false)
    },
    imgSrc(image) {
      return new URL(`../assets/images/profile/${image}.webp`, import.meta.url).href;
    },
  },
  props: ['gameSaves']
}
</script>