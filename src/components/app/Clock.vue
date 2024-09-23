<template>
  <Widget class="col-span-2 row-span-2 md:row-span-1" :widgetName="'Clock'"
    :bgColor="'bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'">
    <div class="flex flex-col items-center justify-center font-medium">
      <span class="hidden md:flex text-4xl">{{ hours }}:{{ minutes }}:{{ seconds }}</span>
      <span class="md:hidden text-6xl">{{ hours }}</span>
      <span class="md:hidden text-6xl">{{ minutes }}</span>
      <!-- <span>{{ seconds }}</span> -->
    </div>
  </Widget>
</template>

<script>
import Widget from '@/components/Widget.vue'

export default {
  name: 'DigitalClock',
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date()

      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()

      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds

      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
    }
  },
  components: {
    Widget
  }
}
</script>
