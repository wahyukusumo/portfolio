<template>
	<div class="flex flex-col justify-center items-center">
		<div :class="bgColor" class="flex justify-center items-center w-full h-full mx-auto p-2 rounded-[20px] md:rounded-[13.3px]  bg-no-repeat bg-cover">
			<slot></slot>
		</div>
		<p class="text-center text-xs pt-1">{{ widgetName }}</p>
	</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  components: {},
  props: ['widgetName', 'bgColor']
};
</script>
