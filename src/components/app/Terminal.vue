<template>
  <Icon :appName="'Terminal'" :bgImage="'bg-[url(./app-icon/measure-1575947.svg)]'">

    <div class="flex items-center">
      <span>guest@portofolio.wahyu</span>
      <input v-model="command" @keyup.enter="submit" type="text" name="" id="" class="w-full border-none outline-none bg-transparent p-2" autofocus="autofocus">
    </div>
  </Icon>
</template>

<script>
import Icon from '@/components/Icon.vue';
import Card from '@/components/Card.vue';


export default {
  data() {
    return {
    };
  },
  methods: {
    submit() {
      switch(this.command) {
        case 'help':
          alert('no help')
          break;
        default:
          alert('no command like that')
      }
    }
  },
  components: {
    Icon,
    Card
  },
  props: ['appdata']
};
</script>