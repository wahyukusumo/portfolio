<script setup>
import Icon from '@/components/Icon.vue'
import Card from '@/components/Card.vue'
import MyButton from '@/components/DefaultButton.vue'
</script>

<template>
  <Icon :appName="appdata.apps[0].name.en" :bgImage="'bg-[url(@/assets/icons/about.webp)]'"
    @windowFull="(isParentFull) => (isFull = isParentFull)">
    <div class="flex flex-col" :class="{ 'md:grid-cols-1': isFull }">
      <Card class="flex flex-col justify-center items-center py-5 h-full lg:border-b-0">
        <!-- Cover image -->
        <div class="bg-[url('@/assets/profile/profile_banner_small.webp')] bg-center bg-cover w-full z-10"
          :class="{ 'xl:h-[20vh] 2xl:h-[30vh]': isFull, 'xl:h-[20vh]': !isFull }"></div>

        <!-- Info Container -->
        <div class="flex justify-center flex-col items-center" :class="{
          'xl:absolute xl:mt-[45vh]': isFull,
          'xl:absolute xl:mt-[43vh]': !isFull
        }">
          <!-- Profile image -->
          <div
            class="bg-[url('@/assets/profile/avatar.webp')] bg-center bg-white bg-dark-800 bg-cover h-64 w-64 md:w-48 md:h-48 z-20 rounded-full border-8 border-white dark:border-[#231d26]"
            :class="{ 'border-white dark:border-[#231d26]': isFull }" />

          <!-- About -->
          <p class="my-6 text-center z-20" :class="{ 'relative mx-[60vh]': isFull }"
            v-html="appdata.profile.about.en" />

          <!-- Contact -->
          <div :class="{ 'flex gap-4': isFull, 'flex flex-wrap gap-4 justify-center mt-5': !isFull }">
            <MyButton v-for="social in appdata.socials" :key="social" class="gap-1">
              <ion-icon size="small" :name="social.icon" />
              {{ social.username }}
            </MyButton>
          </div>
        </div>
      </Card>

      <!-- <div :class="{'hidden': isFull, 'block': !isFull}">
        <div class="flex flex-col items-center">
          <Card class="flex justify-center gap-3">
            <ion-icon size="large" name="logo-html5"></ion-icon>
            <ion-icon size="large" name="logo-css3"></ion-icon>
            <ion-icon size="large" name="logo-javascript"></ion-icon>
            <ion-icon size="large" name="logo-python"></ion-icon>
            <ion-icon size="large" name="logo-vue"></ion-icon>
          </Card>
        </div>

        <Card class="flex items-center gap-4 col-start-2" v-for="social in appdata.socials" :key="social.index">
          <ion-icon size="large" :name="social.icon"></ion-icon>
          <span class="font-semibold text-base">{{ social.username }}</span>
          <a :href="social.url" target="_blank">
            <ion-icon name="open-outline"></ion-icon>
          </a>
        </Card>
      </div> -->
    </div>
  </Icon>
</template>

<script>
export default {
  data() {
    return {
      isFull: false
    }
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText('hi@wahyukusumo.com')
    }
  },
  props: ['appdata']
}
</script>
