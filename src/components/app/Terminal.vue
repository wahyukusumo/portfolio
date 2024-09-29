<script setup>
import Icon from '@/components/Icon.vue'
import Card from '@/components/Card.vue'
import ListGroup from '@/components/ListGroup.vue'
import SidebarContainer from '@/components/SidebarContainer.vue'
</script>

<template>
  <Icon :appName="'Terminal'" :bgImage="'bg-[url()]'">
    <div class="font-mono">
      <span>text like that</span>

      <div class="flex items-center">
        <span>terminal></span>
        <input @keyup.enter="submit" type="text" name="" id=""
          class="w-full border-none outline-none bg-transparent p-2" autofocus />
      </div>
    </div>

  </Icon>
</template>

<script>


export default {
  data() {
    return {
      commands: []
    }
  },
  methods: {
    submit() {

    }
  },
  props: ['appdata']
}
</script>
