<script setup>
import Accordion from '@/components/Accordion.vue'
import Icon from '@/components/Icon.vue'
import Badge from '@/components/Badge.vue'
</script>

<template>
  <Icon :appName="'Projects'" :bgImage="'bg-[url()]'">

    <div class="flex">
      <div class="left-0 w-80 sticky h-screen overflow-y-auto">
        <div v-for="(project, index) in projects" :key="index" @click="projectID = projects[index]" class="flex flex-col flex-wrap items-center
        cursor-pointer border border-gray-200 md:flex-row md:max-w-xl
          hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
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
      </div>

      <div class="left-80 h-full w-5/6 mx-20">
        <div class="py-5 flex gap-4 items-center">
          <img :src="projectID.thumbnail" alt="" class="w-32">
          <div class="p-2">
            <h1 class="text-4xl font-semibold">{{ projectID.name }}</h1>
            <div class="basis-full flex flex-row flex-wrap gap-1 py-4">
              <Badge v-for="badge in projectID.tags" :title="appdata.tags[badge].name" :key="badge.index"
                :class="appdata.tags[badge].color" />
            </div>
            <button type="button"
              class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <ion-icon name="logo-github" class="size-4 me-2" />
              Github
            </button>
          </div>
        </div>
        <hr>
        <div>
          <p class="p-4">{{ projectID.content }}</p>
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
      projects: this.appdata.projects,
      projectID: 0
    }
  },
  methods: {},
  props: ['appdata']
}
</script>
