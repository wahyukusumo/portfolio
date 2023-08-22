<template>
  <div v-if="startupShow" class="w-screen h-screen z-[1000] bg-black absolute flex flex-col gap-6 justify-center items-center">
      <img src="public/vite.svg" width="80" alt="">
      <!-- <img src="public/loading.png" class="absolute animate-spin-slow" width="200" alt=""> -->
      <div class="w-6/12 lg:w-1/12 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 animate-fill"></div>
      </div>
  </div>

  <nav class="hidden lg:grid grid-cols-3 px-8 bg-gray-200/30 dark:bg-black/30 p-1 z-[999]
    top-0 left-0 right-0 fixed text-sm font-medium dark:text-white font-inter backdrop-blur-sm shadow-md">
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

    </div>
  </nav>

  <div class="md:container md:px-72 flex flex-col mx-auto h-screen m-0 px-5 pt-2 pb-5 font-inter text-white" @click="dropdownPopoverShow = false">
    <div id="apps" class="lg:hidden">
      <div class="grid grid-cols-4 gap-6 md:grid-cols-2 my-10 justify-items-center">
        <!-- <Icon v-for="app in appdata.apps" :key="app.index" :appName="app.name"/> -->
        <ClockDate />

        <div class="col-span-4">
          <Toggle @wasClicked="toggleTheme" :forIdKey="'dmode'" :isChecked="dark" />
        </div>

        <!-- <Clock />
        <Icon :appName="'Languages'" :bgImage="'bg-[url(./app-icon/translate-2365238.svg)]'">
          <div class="grid grid-cols-4 md:grid-cols-6">
            <Card v-for="language in appdata.languages" class="text-center" :key="language.index">
              <img :src="language.icon" />
              <span class="text-sm">{{ language.name }}</span>
            </Card>
          </div>
        </Icon>
        <Icon :appName="'Calendar'" :bgImage="'bg-[url(./app-icon/calendar-2365233.svg)]'" />
        <Icon :appName="'Notes'" :bgImage="'bg-[url(./app-icon/notes-2365245.svg)]'">
          <Card>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wahyukusumo&langs_count=10&hide_border=true"/>
          </Card>
        </Icon> -->

      </div>
    </div>

    <div id="main" class="mt-auto lg:mb-5 flex justify-center">
      <div class="flex justify-center gap-8 xl:gap-4 xl:bg-gray-200/30 xl:dark:bg-black/30 xl:p-3 xl:rounded-3xl xl:w-auto transition-all xl:shadow-xl">
        <Photo :appdata="appdata" @appID="windowZIndex" />
        <Project :appdata="appdata" @appID="windowZIndex" /> <!-- Projects App -->
        <About :appdata="appdata" @appID="windowZIndex" /> <!-- Profile App -->
        <Experience :appdata="appdata" @appID="windowZIndex" />
        <!-- <Pro :appdata="appdata" @appID="windowZIndex" /> -->

        <!-- <div class="hidden md:block">
          <Education :appdata="appdata" @appID="windowZIndex" />
        </div>
        <div class="hidden md:block">
          <Terminal :appdata="appdata" @appID="windowZIndex" />
        </div> -->
        <!-- <div class="border-r border-white/50 hidden xl:block"></div>-->
      </div>
    </div>

  </div>
</template>

<script>
import Icon from './components/Icon.vue';
import Card from './components/Card.vue';
import Accordion from './components/Accordion.vue';
import Widget from './components/Widget.vue';
import TopBar from './components/TopBar.vue';
import Toggle from './components/ToggleButton.vue';


// Import Apps
import Clock from './components/app/Clock.vue';
import ClockDate from './components/app/ClockDate.vue';
import About from './components/app/About.vue';
import Project from './components/app/Project.vue';
import Pro from './components/app/Pro.vue';
import Photo from './components/app/Photo.vue';
import Experience from './components/app/Experience.vue';
import Terminal from './components/app/Terminal.vue';
import Education from './components/app/Education.vue';

// Import Data
import AppData from '../public/data.json'

export default {
  data() {
    return {
      appdata: AppData,
      startupShow: true,
      hours: 0,
      minutes: 0,
      seconds: 0,
      dropdownPopoverShow: false,
      date: new Date().toDateString(),
      lang: (localStorage.getItem('en') === 'true'),
      dark: (localStorage.getItem('darkTheme') === 'true'),
      openWindows: [],
      currentZIndex: undefined,
    };
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    siteTheme() {
      if (localStorage.darkTheme === "true" || (!('darkTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
    startLoad() {
      setTimeout(() => {
        this.startupShow = false
      }, 800)
    },
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
    },
  },
  beforeMount() {
    this.siteTheme()
  },
  created() {
    this.startLoad()
  },
  components: {
    Accordion,
    Icon,
    Card,
    Widget,
    TopBar,
    Toggle,
    // Apps
    Clock,
    ClockDate,
    Photo,
    Project,
    Education,
    Terminal,
    Experience,
    About,
    Pro
  }
};
</script>