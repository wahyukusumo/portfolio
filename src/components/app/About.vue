<template>
  <Icon :appName="appdata.apps[0].name.en"
        :bgImage="'bg-[url(./icon/about.png)]'"
        @windowFull="(isFull) => this.isFull = isFull">

    <div class="flex flex-col" :class="{'md:grid-cols-1': this.isFull}">

      <Card class="flex flex-col justify-center items-center py-5 h-full lg:border-b-0">
        <!-- Cover image -->
        <div class="bg-[url('./avatar.png')] bg-center bg-cover w-full z-10" :class="{'xl:h-[20vh] 2xl:h-[30vh]': this.isFull, 'xl:h-[20vh]': !this.isFull}"></div>

        <!-- Info Container -->
        <div class="flex justify-center flex-col items-center" :class="{'xl:absolute xl:mt-[45vh]': this.isFull, 'xl:absolute xl:mt-[43vh]': !this.isFull}">
          <!-- Profile image -->
          <div class="bg-[url('@/assets/profile/avatar.png')] bg-center bg-cover h-64 w-64 md:w-48 md:h-48 z-20 rounded-full border-8 border-white dark:border-[#231d26]"
          :class="{'border-white dark:border-[#231d26]': this.isFull}" />

          <!-- About -->
          <p class="my-6 text-center z-20" :class="{'relative mx-[60vh]': this.isFull}" v-html="appdata.profile.about.en"></p>

          <!-- Contact -->
          <div :class="{'flex gap-4': this.isFull, 'flex flex-wrap gap-4 justify-center mt-5': !this.isFull}">
            <div class="flex items-center gap-4 col-start-2 text-white bg-sky-500 dark:text-black dark:bg-gray-500 p-1 px-3 rounded-md" v-for="social in appdata.socials" :key="social.index">
              <ion-icon size="large" :name="social.icon"></ion-icon>
              <span class="font-semibold text-base">{{ social.username }}</span>
              <a :href="social.url" target="_blank">
                <ion-icon name="open-outline"></ion-icon>
              </a>
            </div>
          </div>

        </div>

      </Card>

      <!-- <div :class="{'hidden': this.isFull, 'block': !this.isFull}">
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
import Icon from '@/components/Icon.vue';
import Card from '@/components/Card.vue';


export default {
  data() {
    return {
      isFull: undefined
    };
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText('mail@wahyukusumo.com');
    },
  },
  components: {
    Icon,
    Card
  },
  props: ['appdata']
};
</script>