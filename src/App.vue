<script setup>
import SplashScreen from '@/components/SplashScreen.vue';
import Clock from '@/components/app/Clock.vue';
import ClockDate from '@/components/app/ClockDate.vue';
import About from '@/components/app/About.vue';
import Project from '@/components/app/Project.vue';
import Photo from '@/components/app/Photo.vue';
import Experience from '@/components/app/Experience.vue';
import Shiritori from '@/components/app/shiritori/App.vue';
import Terminal from '@/components/app/Terminal.vue';
import Education from '@/components/app/Education.vue';
import NavBar from './components/NavBar.vue';
import Icon from '@/components/Icon.vue';
import Card from '@/components/Card.vue';
import Widget from '@/components/Widget.vue';
import TopBar from '@/components/TopBar.vue';
import Toggle from '@/components/ToggleButton.vue';
</script>

<template>
  <SplashScreen v-if="showSplashScreen" />

  <NavBar>
    <template v-slot:left>
      <ion-icon name="location"></ion-icon>
      <span>Tangerang City, Indonesia</span>
    </template>
    <template v-slot:center>
      <span>{{ dateTime.date }}</span>
      <span>{{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</span>
    </template>
    <template v-slot:right>
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="relative inline-flex w-full shadow-lg">
            <button @click="toggleDropdown">Settings</button>

            <div v-if="dropdownPopoverShow"
              class="animate-zoom-out fixed bg-gray-200/30 dark:bg-black/30 backdrop-blur-sm z-50 p-2 rounded-md shadow-lg mt-7 right-0 mr-5">
              <div class="grid grid-cols-1 gap-2 font-medium text-sm">
                <!-- <div class="flex gap-3 p-2 bg-white/50 rounded-md">
                  <Toggle :forIdKey="'lang'"/>
                  <span>EN/ID</span>
                </div> -->

                <div class="flex gap-3 p-2 bg-white/50 rounded-md">
                  <Toggle @wasClicked="toggleTheme" :forIdKey="'dmode'" :isChecked="dark" />
                  <span>Dark Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NavBar>

  <div class="md:container md:px-72 flex flex-col mx-auto h-[100dvh] m-0 px-5 pt-2 pb-5 font-inter text-white"
    @click="dropdownPopoverShow = false">
    <div id="apps" class="lg:hidden">
      <div class="grid grid-cols-4 gap-6 md:grid-cols-2 my-10 justify-items-center">
        <!-- <Icon v-for="app in appdata.apps" :key="app.index" :appName="app.name"/> -->
        <ClockDate class="mb-32" />

        <!-- <div class="col-span-4">
          <Toggle @wasClicked="toggleTheme" :forIdKey="'dmode'" :isChecked="dark" />
        </div> -->

        <!-- Toggle Theme -->
        <div class="flex flex-col justify-center items-center col-start-2">
          <!-- ICON -->
          <div @click="toggleTheme" class="w-14 h-14 mx-auto p-2 rounded-[13.3px] cursor-pointer bg-no-repeat bg-cover xl:hover:-translate-y-6
          xl:transition-all xl:hover:scale-[3] xl:hover:mx-5" :class="'bg-[url(@/assets/icons/theme.webp)]'" />
          <p class="text-center text-xs pt-1 xl:hidden">Theme</p>
        </div>

        <Shiritori :appdata="appdata" @appID="windowZIndex" />

        <!-- <Clock />
        <Icon :appName="'Languages'" :bgImage="'bg-[url()]'">
          <div class="grid grid-cols-4 md:grid-cols-6">
            <Card v-for="language in appdata.languages" class="text-center" :key="language.index">
              <img :src="language.icon" />
              <span class="text-sm">{{ language.name }}</span>
            </Card>
          </div>
        </Icon>
        <Icon :appName="'Calendar'" :bgImage="'bg-[url()]'" />
        <Icon :appName="'Notes'" :bgImage="'bg-[url()]'">
          <Card>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wahyukusumo&langs_count=10&hide_border=true"/>
          </Card>
        </Icon> -->
      </div>
    </div>

    <div id="main" class="mt-auto lg:mb-5 flex justify-center">
      <div
        class="flex justify-center gap-8 xl:gap-4 xl:bg-gray-200/30 xl:dark:bg-black/30 xl:p-3 xl:rounded-3xl xl:w-auto transition-all xl:shadow-xl">
        <Photo :appdata="appdata" @appID="windowZIndex" />
        <Project :appdata="appdata" @appID="windowZIndex" />
        <About :appdata="appdata" @appID="windowZIndex" />
        <Experience :appdata="appdata" @appID="windowZIndex" />

        <div class="hidden md:block">
          <Shiritori :appdata="appdata" @appID="windowZIndex" />
          <!-- <Education :appdata="appdata" @appID="windowZIndex" /> -->
        </div>
        <!-- <div class="hidden md:block">
          <Terminal :appdata="appdata" @appID="windowZIndex" />
        </div> -->
        <!-- <div class="border-r border-white/50 hidden xl:block"></div>-->

      </div>
    </div>
  </div>
</template>

<script>
// Import Data
import AppData from '@/assets/data.json'

export default {
  data() {
    return {
      appdata: AppData,
      showSplashScreen: true,
      dateTime: {
        date: new Date().toDateString(),
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      dropdownPopoverShow: false,
      lang: localStorage.getItem('en') === 'true',
      dark: localStorage.getItem('darkTheme') === 'true',
      openWindows: [],
      currentZIndex: undefined
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    siteTheme() {
      if (
        localStorage.darkTheme === 'true' ||
        (!('darkTheme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkTheme', true)
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkTheme', false)
      }
    },
    // siteLang(){
    //   if (localStorage.en === "true" || (!('en' in localStorage))) {
    //     localStorage.setItem('en', true)
    //     let lang = setLang(2)
    //     return lang.name
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //     localStorage.setItem('darkTheme', false)
    //   }
    // },
    // setLang() {
    //   this.appdata.apps[i]
    // },
    playSplashScreen() {
      setTimeout(() => {
        this.showSplashScreen = false
      }, 800)
    },
    setTime() {
      const date = new Date()

      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()

      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds

      this.dateTime.hours = hours
      this.dateTime.minutes = minutes
      this.dateTime.seconds = seconds
    },
    toggleDropdown() {
      this.dropdownPopoverShow = !this.dropdownPopoverShow

      setTimeout(() => {
        this.dropdownPopoverShow = false
      }, 5000)

      // if (this.dropdownPopoverShow) {
      //   this.dropdownPopoverShow = false;
      // } else {
      //   this.dropdownPopoverShow = true;
      //   createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
      //     placement: "bottom-start"
      //   });
      // }
    },
    closeSetting() {
      this.dropdownPopoverShow = false
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
    },
    // Function to make open windows go to front when onclick
    windowZIndex(id) {
      if (!(id in this.openWindows)) {
        this.openWindows.push(id)
        // console.log(id)
        for (let i = 0; i < this.openWindows.length; i++) {
          let getId = document.getElementById(this.openWindows[i])
          // console.log(getId)
          getId.style.zIndex = i
          this.currentZIndex = i
        }
      }
    }
  },
  beforeMount() {
    this.siteTheme()
  },
  created() {
    this.playSplashScreen()
  }
}
</script>
