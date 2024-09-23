<template>
  <Widget class="col-span-4 row-span-2 md:row-span-1" :widgetName="''">
    <div class="flex flex-col items-center justify-center">
      <span class="md:hidden text-7xl font-light">{{ hours }}:{{ minutes }}</span>
      <span class="md:hidden text-base font-normal">{{ date }}</span>
      <!-- <span>{{ seconds }}</span> -->
    </div>
  </Widget>
</template>

<script>
export default {
  name: 'DigitalClock',
  data() {
    return {
      date: new Date().toDateString(),
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
  components: {}
}
</script>
