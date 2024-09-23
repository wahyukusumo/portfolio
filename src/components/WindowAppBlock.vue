<template>
  <div
    class="bg-gray-400/60 dark:bg-gray-900/60 w-screen h-screen top-0 left-0 fixed lg:rounded-xl lg:z-30 lg:p-20 lg:flex lg:justify-center lg:items-center">
    <div class="lg:drop-shadow-lg animate-zoom-out"
      :class="{ 'lg:w-4/6 2xl:w-3/5': !isFull, 'w-full h-full top-7 absolute': isFull }">
      <!-- App Navbar -->
      <div
        class="bg-white relative w-full border-b border-gray-300 dark:border-black p-2 grid grid-cols-3 text-xl dark:bg-[#231d26] dark:text-white"
        :class="{ 'lg:rounded-t-xl': !isFull, 'lg:rounded-t-none': isFull }">
        <!-- Mobile View Exit Button -->
        <button @click="openingApp" class="flex items-center text-blue-500 dark:text-blue-300 lg:hidden">
          <ion-icon size="large" name="chevron-back-outline"></ion-icon>
          <span>Back</span>
        </button>

        <!-- Large View Exit Button -->
        <div class="hidden lg:flex gap-1.5 items-center">
          <ion-icon @click="openingApp" name="close" size="small"
            class="bg-red-600 hover:bg-red-400 rounded-full text-red-600 hover:text-black hover:scale-110 transition-all">
          </ion-icon>
          <ion-icon @click="this.isFull = false" name="remove" size="small"
            class="bg-yellow-400 hover:bg-yellow-600 rounded-full text-yellow-400 hover:text-black hover:scale-110 transition-all">
          </ion-icon>
          <ion-icon @click="this.isFull = true" name="add" size="small"
            class="bg-green-500 hover:bg-green-700 rounded-full text-green-500 hover:text-black hover:scale-110 transition-all">
          </ion-icon>
        </div>

        <!-- AppName -->
        <div class="text-black dark:text-gray-200 flex justify-center items-center font-semibold">
          <span>{{ appName }}</span>
        </div>
      </div>

      <!-- Content -->
      <div
        class="relative2 text-black bg-white h-screen lg:h-full lg:min-h-[40vh] overflow-y-scroll lg:pb-0 dark:bg-[#231d26] dark:text-white"
        style="scrollbar-width: thin" :class="{ 'lg:max-h-[60vh]': !isFull, 'lg:max-h-screen': isFull }">
        <slot></slot>
      </div>

      <div
        class="relative p-5 lg:rounded-b-xl border-t border-gray-300 dark:border-black bg-white dark:bg-[#231d26] dark:text-white">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openApp: this.openApp,
      pickedUp: false,
      isFull: false
    }
  },
  methods: {
    openingApp() {
      // this.openApp = !this.openApp
      this.$emit('closeApp', (this.openApp = !this.openApp))
      console.log(this.openApp)
    }
  },
  components: {},
  props: ['appName', 'openApp', 'classes']
}
</script>
