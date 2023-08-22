<template>
  <Icon :appName="'Projects'" :bgImage="'bg-[url(./icon/projects.png)]'">


  </Icon>
</template>

<script>
import Accordion from '../Accordion.vue';
import Icon from '../Icon.vue';
import Badge from '../Badge.vue';

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