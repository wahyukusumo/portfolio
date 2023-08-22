<template>
  <Icon :appName="'Experience'" :bgImage="'bg-[url(./icon/experience.png)]'">
    <Card class="px-6 py-4">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="ml-6" v-for="experience in appdata.experience" :key="experience.index">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <ion-icon name="business" size="small" class="w-3 h-3 text-blue-600 dark:text-blue-400"></ion-icon>
                </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ experience.type.en }} at {{ experience.at }}</h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ experience.from }} - {{ experience.until }}</time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ experience.details }}</p>
          </li>
      </ol>
    </Card>
  </Icon>
</template>

<script>
import Icon from '../Icon.vue';
import Card from '../Card.vue';


export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Icon,
    Card
  },
  props: ['appdata']
};
</script>