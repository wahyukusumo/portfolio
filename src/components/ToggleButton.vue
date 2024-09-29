<template>
  <label :for="forIdKey" class="inline-flex relative items-center cursor-pointer">
    <input @click="$emit('wasClicked')" type="checkbox" value="" :id="forIdKey" :checked="isChecked"
      class="sr-only peer" />
    <div class="w-9 h-5 rounded-full bg-sky-500 dark:bg-gray-700 peer-checked:bg-indigo-700 peer-checked:after:translate-x-full
        after:absolute after:top-[2px] after:left-[2px] after:w-4 after:h-4 after:bg-white after:rounded-full
        after:transition-all peer-focus:outline-none" />
  </label>
</template>

<script>
export default {
  props: ['forIdKey', 'isChecked']
}
</script>
