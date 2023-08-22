<template>
    <!-- bg-rose-100 text-rose-800 dark:bg-rose-800 dark:text-rose-100
    bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100
    bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100
    bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100
    bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100
    bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100
    bg-violet-100 text-violet-800 dark:bg-violet-800 dark:text-violet-100
    bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 -->
  <span class="text-xs font-semibold px-2.5 py-0.5 rounded">
    {{ title }}
  </span>
</template>

<script>

export default {
  props: ['title']
};
</script>