<template>
  <div ref="draggableContainer" :id="`${appName.toLowerCase()}-window`"
    @mousedown="this.$emit('appID', this.$refs.draggableContainer.id)"
    class="h-[100dvh] w-screen left-0 top-0 xl:left-32 xl:top-24 fixed lg:top-7 lg:drop-shadow-2xl lg:shadow-2xl animate-zoom-out lg:max-w-[40%] lg:h-auto lg:border-2 border-gray-400 dark:lg:border-[#151217] lg:rounded-xl"
    :class="{
      'lg:max-w-[100%] lg:h-full w-full h-full top-7 left-0 absolute transition-all ease-linear border-none':
        isFull,
      'transition-all ease-linear': minSize
    }">

    <!-- App Navbar -->
    <div @mousedown="dragMouseDown"
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
        <ion-icon @click="makeMinSize" name="remove" size="small"
          class="bg-yellow-400 hover:bg-yellow-600 rounded-full text-yellow-400 hover:text-black hover:scale-110 transition-all">
        </ion-icon>
        <ion-icon @click="makeFullScreen" name="add" size="small"
          class="bg-green-500 hover:bg-green-700 rounded-full text-green-500 hover:text-black hover:scale-110 transition-all">
        </ion-icon>
      </div>

      <!-- AppName -->
      <div class="text-black dark:text-gray-200 flex justify-center items-center font-semibold cursor-default">
        <span>{{ appName }}</span>
      </div>
    </div>

    <!-- Content -->
    <div style="scrollbar-width: thin" :class="{ 'lg:max-h-[60vh]': !isFull, 'lg:max-h-[90vh]': isFull }"
      class="relative text-black bg-white h-[90dvh] lg:h-[90vh] lg:min-h-[40vh] overflow-y-scroll lg:pb-0 dark:bg-[#231d26] dark:text-white">
      <slot></slot>
    </div>

    <div
      class="relative p-5 lg:rounded-b-xl border-t border-gray-300 dark:border-black bg-white dark:bg-[#231d26] dark:text-white">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openApp: this.openApp,
      isFull: false,
      minSize: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
        currentX: undefined,
        currentY: undefined
      }
    }
  },
  methods: {
    makeFullScreen() {
      this.isFull = true
      this.$emit('windowFull', this.isFull)
      this.$refs.draggableContainer.style.top = '1.75rem'
      this.$refs.draggableContainer.style.left = '0px'
    },
    makeMinSize() {
      this.isFull = false
      this.minSize = true
      this.$emit('windowFull', this.isFull)
      this.$refs.draggableContainer.style.top = this.positions.currentY + 'px'
      this.$refs.draggableContainer.style.left = this.positions.currentX + 'px'
    },
    openingApp() {
      // this.openApp = !this.openApp
      this.$emit('closeApp', (this.openApp = !this.openApp))
    },
    dragMouseDown: function (event) {
      if (!this.isFull) {
        event.preventDefault()
        this.minSize = false
        // get the mouse cursor position at startup:
        this.positions.clientX = event.clientX
        this.positions.clientY = event.clientY
        document.onmousemove = this.elementDrag
        document.onmouseup = this.closeDragElement
      }
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop - this.positions.movementY + 'px'
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft - this.positions.movementX + 'px'
      this.positions.currentX = this.$refs.draggableContainer.offsetLeft - this.positions.movementX
      this.positions.currentY = this.$refs.draggableContainer.offsetTop - this.positions.movementY
    },
    closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    }
  },
  components: {},
  props: ['appName', 'openApp', 'classes']
}
</script>
