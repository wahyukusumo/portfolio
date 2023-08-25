<template>
  <Icon :appName="'Projects'" :bgImage="'bg-[url(./icon/projects.png)]'">


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