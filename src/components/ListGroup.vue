<template>
  <div class="themes py-4 lg:py-3 px-6 mx-3 cursor-pointer border-b"
    :class="{ 'item-themes rounded-lg border-none': selected }">
    <div class="flex items-center mb-3">
      <div class="flex-shrink-0">
        <img v-if="thumbnail" :src="thumbnail" class="size-12 rounded-lg bg-white" alt="thumbnail image">
        <slot name="thumbnail" />
      </div>
      <div class="flex-1 min-w-0 ms-4">
        <p class="text-md font-semibold capitalize truncate">
          {{ title }}
        </p>
        <p class="text-sm line-clamp-2 text-gray-400" :class="{ 'text-white': selected }">
          {{ description }}
        </p>
        <slot name="header" />
      </div>
    </div>
    <slot name="under" />
  </div>
</template>


<script>
export default {
  data() {
    return {
    };
  },
  props: ['thumbnail', 'title', 'description', 'selected']
}
</script>