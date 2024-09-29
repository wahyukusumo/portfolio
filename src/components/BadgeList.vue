<script setup>
import Badge from '@/components/Badge.vue'
</script>

<template>
  <div>
    <div class="basis-full flex flex-row flex-wrap gap-1">
      <Badge v-for="badge in badges" :title="projectBadge[badge].name" :key="badge.index"
        :class="projectBadge[badge].color" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['badges', 'projectBadge']
}
</script>