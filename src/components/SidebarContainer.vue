<template>
  <div class="flex">
    <aside class="lg:w-[28rem] sticky top-0 h-[90vh] overflow-y-scroll thin-scrollbar"
      :class="{ 'h-fit lg:w-full': !isFull }">
      <slot name="sidebar" />
    </aside>

    <div class="flex-1" :class="{ 'absolute w-full h-full themes': !isFull && showMain, 'flex-1 relative': isFull }">
      <slot v-if="showMain" name="main" />

      <span v-else class="flex justify-center items-center h-full w-full text-2xl font-semibold
        text-gray-400 dark:text-gray-500" :class="{ 'hidden': !isFull }">
        {{ emptyMsg }}
      </span>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['showMain', 'emptyMsg', 'isFull']
}
</script>