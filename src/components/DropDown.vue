<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <div class="relative inline-flex w-full shadow-lg">
        <button @click="toggleDropdown">{{ name }}</button>

        <div v-if="dropdownPopoverShow"
          class="animate-zoom-out fixed bg-gray-200/30 dark:bg-black/30 backdrop-blur-sm z-50 p-2 rounded-md shadow-lg mt-7 right-0 mr-5">
          <div class="grid grid-cols-1 gap-2 font-medium text-sm">
            <!-- <div class="flex gap-3 p-2 bg-white/50 rounded-md">
                  <Toggle :forIdKey="'lang'"/>
                  <span>EN/ID</span>
                </div> -->

            <div class="flex gap-3 p-2 bg-white/50 rounded-md">
              <Toggle @wasClicked="toggleTheme" :forIdKey="'dmode'" :isChecked="dark" />
              <span>Dark Mode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  props: ['name']
}
</script>
