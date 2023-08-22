<template>
  <Icon :appName="'Projects'" :bgImage="'bg-[url(./icon/projects.png)]'" @windowFull="(isFull) => this.isFull = isFull">
    <Accordion v-for="project in appdata.projects" :key="project.index" :title="project.name" :thumbnail="project.thumbnail">

      <!-- Badge -->
      <template v-slot:badge>
        <div class="flex flex-row flex-wrap gap-1 pl-6">
          <Badge v-for="badge in project.tags" :title="appdata.tags[badge].name" :key="badge.index" :class="appdata.tags[badge].color"/>
        </div>
      </template>

      <template v-slot:content>
        <div class="mx-2 text-justify"  :class="{'mx-48': this.isFull}">
          <div class="flex flex-row gap-2">
            <a v-if="project.github" :href="project.github" target="_blank" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-800 dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-black">Github</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-800 dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-black">Demo</a>
          </div>

          <!-- <span v-if="project.github" class="mb-5"><b>Github:</b> <a :href="project.github" target="_blank" class="text-blue-600 dark:text-blue-400">{{ project.github }}</a></span><br>
          <span v-if="project.demo" class="mb-5"><b>Demo:</b> <a :href="project.demo" target="_blank" class="text-blue-600 dark:text-blue-400">{{ project.demo }}</a></span> -->

          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">

          <p>{{ project.content }}</p>

          <div v-if="project.images != 0" class="mt-2">

            <nav class="flex flex-row justify-between my-2">
              <b @click="fullWidthImages = !fullWidthImages">Images:</b>
            </nav>

            <div v-if="fullWidthImages" class="flex gap-2 overflow-x-auto pb-2 thin-scrollbar">
              <img v-for="image in project.images" :key="image.index" :src="image" alt="project-image" class="h-52 rounded-md">
            </div>

            <div v-if="!fullWidthImages" class="flex flex-col gap-4 overflow-y-auto pb-2 thin-scrollbar">
              <img v-for="image in project.images" :key="image.index" :src="image" alt="project-image" class="rounded-md">
            </div>

          </div>
        </div>
      </template>
    </Accordion>
  </Icon>
</template>
<!--
PT Perusahaan Listrik Negara (Persero) is an Indonesian government-owned corporation which has a monopoly on electric power distribution in Indonesia and generates the majority of the country's electrical power.
I created program for monitoring contract.
This program has 7 type user permission

Saya membuat sebuah program prototype untuk memonitor kontrak yang ada di PT PLN.
Program ini memiliki 7 tipe user permission. Program ini mengamati sebuah kontrak dari kontrak tersebut dibuat oleh bagian pengadaan,
lalu diapprove oleh bagian perencanaan, setelah itu kontrak akan dijalankan oleh bagian pengawas (konstruksi, jaringan, transaksi energi),
dan pembayaran yang dilakukan oleh bagian keuangan. -->

<script>
import Accordion from '../Accordion.vue';
import Icon from '../Icon.vue';
import Badge from '../Badge.vue';

export default {
  data() {
    return {
      isFull: undefined,
      fullWidthImages: false
    };
  },
  methods: {
  },
  components: {
    Accordion,
    Icon,
    Badge
  },
  props: ['appdata']
};
</script>