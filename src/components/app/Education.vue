<script setup>
import Icon from '@/components/Icon.vue'
import Card from '@/components/Card.vue'
</script>

<template>
  <Icon :appName="appdata.apps[2].name.en" :bgImage="'bg-[url(@/assets/icons/experience.webp)]'">
    <Card class="px-9 py-4">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="ml-6" v-for="education in appdata.education" :key="education.index">
          <span
            class="flex absolute -left-5 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <ion-icon name="fast-food" class="text-blue-600 dark:text-blue-400"></ion-icon>
          </span>
          <h3 class="mr-28 mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {{ education.at }}
          </h3>
          <time class="block mb-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ education.time
            }}</time>
        </li>
      </ol>
    </Card>
  </Icon>
</template>

<script>
export default {
  data() {
    return {
      lang: 'id'
    }
  },
  methods: {},
  props: ['appdata']
}
</script>
