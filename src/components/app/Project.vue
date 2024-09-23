<script setup>
import Accordion from '@/components/Accordion.vue'
import Icon from '@/components/Icon.vue'
import Badge from '@/components/Badge.vue'
</script>

<template>
  <Icon :appName="'Projects'" :bgImage="'bg-[url(@/assets/icons/projects.webp)]'"
    @windowFull="(isFull) => (this.isFull = isFull)">


    <!-- Small Screen -->
    <Accordion v-if="!isFull" v-for="project in appdata.projects" :key="project.index" :title="project.name"
      :thumbnail="project.thumbnail">
      <!-- Badge -->
      <template v-slot:badge>
        <div class="flex flex-row flex-wrap gap-1 pl-6">
          <Badge v-for="badge in project.tags" :title="appdata.tags[badge].name" :key="badge.index"
            :class="appdata.tags[badge].color" />
        </div>
      </template>

      <template v-slot:content>
        <div class="mx-2 text-justify" :class="{ 'mx-48': this.isFull }">
          <div class="flex flex-row gap-2">
            <a v-if="project.github" :href="project.github" target="_blank" type="button"
              class="px-3 py-2 text-xs font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-800 dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-black">Github</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" type="button"
              class="px-3 py-2 text-xs font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-800 dark:bg-gray-500 dark:hover:bg-gray-700 dark:text-black">Demo</a>
          </div>

          <!-- <span v-if="project.github" class="mb-5"><b>Github:</b> <a :href="project.github" target="_blank" class="text-blue-600 dark:text-blue-400">{{ project.github }}</a></span><br>
          <span v-if="project.demo" class="mb-5"><b>Demo:</b> <a :href="project.demo" target="_blank" class="text-blue-600 dark:text-blue-400">{{ project.demo }}</a></span> -->

          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <p v-html="project.content"></p>

          <div v-if="project.images != 0" class="mt-2">
            <nav class="flex flex-row justify-between my-2">
              <b @click="fullWidthImages = !fullWidthImages">Images:</b>
            </nav>

            <!-- Photo scroll horizontal -->
            <div v-if="fullWidthImages" class="flex gap-2 overflow-x-auto pb-2 thin-scrollbar">
              <img v-for="image in project.images" :key="image.index" :src="image" alt="project-image"
                class="h-52 rounded-md" />
            </div>

            <div v-if="!fullWidthImages" class="flex flex-col gap-4 overflow-y-auto pb-2 thin-scrollbar">
              <img v-for="image in project.images" :key="image.index" :src="image" alt="project-image"
                class="rounded-md" />
            </div>
          </div>
        </div>
      </template>
    </Accordion>

    <!-- Full Screen -->
    <div class="flex" v-else>
      <aside class="w-64 text-white sticky top-0 h-screen overflow-scroll thin-scrollbar">
        <div v-for="(project, index) in projects" :key="index" @click="projectID = projects[index]" class="flex flex-col flex-wrap items-center
        cursor-pointer border border-gray-200 md:flex-row md:max-w-xl
          hover:bg-gray-100 dark:border-[#171118] dark:hover:bg-[#322b39]">
          <div class="basis-2/12 w-16 h-16 mx-2 bg-contain bg-no-repeat bg-center"
            :style="{ backgroundImage: `url(${project.thumbnail})` }" />
          <div class="basis-9/12 flex flex-col justify-between p-1 leading-normal">
            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
              {{ project.name }}
            </h5>
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
              {{ project.content }}
            </p>
          </div>
          <div class="basis-full flex flex-row flex-wrap gap-1 p-2">
            <Badge v-for="badge in project.tags" :title="appdata.tags[badge].name" :key="badge.index"
              :class="appdata.tags[badge].color" />
          </div>
        </div>
      </aside>

      <div v-show="projectID" class="flex-1 p-4 overflow-y-scroll">
        <!-- Header -->
        <div class="py-5 mx-20 flex gap-4 items-center">
          <img :src="projectID.thumbnail" alt="" class="w-32">
          <div class="p-2">
            <h1 class="text-4xl font-semibold">{{ projectID.name }}</h1>
            <div class="basis-full flex flex-row flex-wrap gap-1 py-4">
              <Badge v-for="badge in projectID.tags" :title="appdata.tags[badge].name" :key="badge.index"
                :class="appdata.tags[badge].color" />
            </div>

            <a v-if="projectID.github" :href="projectID.github" type="button"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <ion-icon name="logo-github" class="size-4 me-2" />
              Github
            </a>
          </div>
        </div>
        <hr class="border-gray-200 dark:border-[#171118]">
        <div>
          <div class="p-4 mx-60 mb-20">
            <h1 class="text-2xl font-semibold">Descriptions</h1>
            <p class="py-10 indent-8" v-html="projectID.content"></p>
            <hr class="border-gray-200 dark:border-[#171118]">
          </div>
          <div class="flex flex-col gap-4 overflow-y-auto pb-2 thin-scrollbar">
            <img v-for="image in projectID.images" :key="image.index" :src="image" alt="project-image"
              class="rounded-md" />
          </div>
        </div>
      </div>
    </div>

  </Icon>
</template>

<script>
export default {
  data() {
    return {
      isFull: undefined,
      fullWidthImages: false,
      projects: this.appdata.projects,
      projectID: 0
    }
  },
  methods: {},
  props: ['appdata']
}
</script>
