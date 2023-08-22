<template>
  <nav class="hidden lg:grid grid-cols-3 px-8 bg-gray-200/30 dark:bg-black/30 p-1 z-40
  top-0 left-0 right-0 fixed text-sm font-medium dark:text-white font-sfpro backdrop-blur-sm shadow-md">
    <div class="flex items-center justify-start gap-1">
      <ion-icon name="location"></ion-icon>
      <span>Tangerang City, Indonesia</span>
    </div>
    <div class="flex items-center justify-center gap-5">
      <span>{{ date }}</span>
      <span>{{ hours }}:{{ minutes }}:{{ seconds }}</span>
    </div>
    <div class="flex items-center justify-end gap-1">

      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="relative inline-flex w-full shadow-lg">
            <button @click="toggleDropdown">Settings</button>

              <div v-if="dropdownPopoverShow" class="animate-zoom-out fixed bg-gray-200/30 dark:bg-black/30 backdrop-blur-sm z-50 p-2 rounded-md shadow-lg mt-7 right-0 mr-5">

                <div class="grid grid-cols-1 gap-2 font-medium text-sm">
                  <div class="flex gap-3 p-2 bg-white/50 rounded-md">
                    <Toggle :forIdKey="'lang'" />
                    <span>EN/ID</span>
                  </div>

                  <div class="flex gap-3 p-2 bg-white/50 rounded-md">
                    <Toggle @wasClicked="toggleTheme" :forIdKey="'dmode'" :isChecked="dark" />
                    <span>Dark Mode</span>
                  </div>
                </div>


              </div>

          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
import { createPopper } from "@popperjs/core";
import Toggle from './ToggleButton.vue';

export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      dropdownPopoverShow: false,
      date: new Date().toDateString(),
      dark: (localStorage.getItem('darkTheme') === 'true')
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;

      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    },
    toggleDropdown() {
      this.dropdownPopoverShow = !this.dropdownPopoverShow

      setTimeout(() => { this.dropdownPopoverShow = false }, 5000)

      // if (this.dropdownPopoverShow) {
      //   this.dropdownPopoverShow = false;
      // } else {
      //   this.dropdownPopoverShow = true;
      //   createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
      //     placement: "bottom-start"
      //   });
      // }
    },
    toggleTheme() {
      this.dark = !this.dark
      if (this.dark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkTheme', true)
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkTheme', false)
      }
    }
  },
  components: {
    Toggle
  }
}
</script>