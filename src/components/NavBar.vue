<template>
  <nav
    class="hidden lg:grid grid-cols-3 px-8 bg-gray-200/30 dark:bg-black/30 p-1 z-[999] top-0 left-0 right-0 fixed text-sm font-medium dark:text-white font-inter backdrop-blur-sm shadow-md">
    <!-- Left Bar -->
    <div class="flex items-center justify-start gap-1">
      <slot name="left" />
    </div>
    <!-- Center Bar -->
    <div class="flex items-center justify-center gap-5">
      <slot name="center" />
    </div>
    <!-- Right Bar -->
    <div class="flex items-center justify-end gap-1">
      <slot name="right" />
    </div>
  </nav>
</template>