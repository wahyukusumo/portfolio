<template>
  <Icon :appName="'Projects'" :bgImage="'bg-[url()]'">

  <div class="flex flex-row">
    <div class="left-0 h-screen w-1/6 overflow-y-scroll thin-scrollbar">
      <div>
        <a href="#" v-for="project in appdata.projects" :key="project.index" class="flex flex-col flex-wrap items-center bg-white border border-gray-200 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div class="basis-2/12 w-16 h-16 mx-2 bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: `url(${project.thumbnail})` }" />
          <div class="basis-9/12 flex flex-col justify-between p-1 leading-normal">
            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{{ project.name }}</h5>
            <p class="font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology.</p>
          </div>
          <div class="basis-full flex flex-row flex-wrap gap-1 p-2">
            <Badge v-for="badge in project.tags" :title="appdata.tags[badge].name" :key="badge.index" :class="appdata.tags[badge].color"/>
          </div>
        </a>
      </div>
    </div>

    <div class="left-1/6 h-screen w-5/6 overflow-y-scroll thin-scrollbar">
      <div class="p-2 mx-20">

        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
          <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
          </svg>
          Github
        </button>
      </div>
    </div>
  </div>
  </Icon>
</template>

<script>
import Accordion from '@/components/Accordion.vue';
import Icon from '@/components/Icon.vue';
import Badge from '@/components/Badge.vue';

export default {
  data() {
    return {
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