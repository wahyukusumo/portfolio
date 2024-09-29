<template>
  <a :href="link" target="_blank" type="button"
    class="item-themes flex items-center p-1 px-3 rounded-lg cursor-pointer">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['link']
}
</script>
