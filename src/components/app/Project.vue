<script setup>
import Icon from '@/components/Icon.vue'
import BadgeList from '@/components/BadgeList.vue'
import ListGroup from '@/components/ListGroup.vue'
import SidebarContainer from '@/components/SidebarContainer.vue'
import MyButton from '@/components/DefaultButton.vue'
import { ChevronLeftIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <Icon
    :appName="'Projects'"
    :bgImage="'bg-[url(@/assets/icons/projects.webp)]'"
    @windowFull="(isParentFull) => (isFull = isParentFull)"
  >
    <SidebarContainer :isFull="isFull" :showMain="projectID" emptyMsg="No Project Selected">
      <template v-slot:sidebar>
        <ListGroup
          v-for="(project, index) in projects"
          :key="index"
          @click="setProjectID(projects[index])"
          :thumbnail="project.thumbnail"
          :title="project.name"
          :description="project.content"
          :selected="projectID == projects[index]"
          :class="{ 'hidden overflow-hidden': projectID && !isFull }"
        >
          <template v-slot:under>
            <BadgeList :badges="project.tags" :projectBadge="appdata.tags" />
          </template>
        </ListGroup>
      </template>

      <template v-slot:main>
        <div v-show="!isFull" @click="projectID = false" class="flex absolute m-6 p-2">
          <ChevronLeftIcon class="size-8 dark:stroke-white cursor-pointer" />
        </div>

        <div class="py-5 lg:mx-20 flex gap-4 items-center" :class="{ 'mx-6': !isFull }">
          <img
            :src="projectID.thumbnail"
            alt=""
            class="lg:w-32"
            :class="{ 'w-20 lg:w-24': !isFull }"
          />
          <div class="p-2">
            <h1 class="text-4xl font-semibold" :class="{ 'text-xl': !isFull }">
              {{ projectID.name }}
            </h1>
            <BadgeList class="py-4" :badges="projectID.tags" :projectBadge="appdata.tags" />
            <!-- Buttons Github & Demo -->
            <div class="flex gap-2">
              <MyButton v-if="projectID.github" :link="projectID.github">
                <ion-icon name="logo-github" class="size-4 me-2" />
                Github
              </MyButton>
              <MyButton v-if="projectID.demo" :link="projectID.demo">
                <ion-icon name="link-outline" class="size-4 me-2" />
                Demo
              </MyButton>
            </div>
          </div>
        </div>
        <hr />
        <div class="p-4">
          <div>
            {{ getReadme( 'monitoring-spk-php') }}
            {{ projectContent }}
          </div>
          <h1 class="text-xl font-semibold">Descriptions</h1>
          <p class="py-2 indent-8" v-html="projectID.content"></p>
          <hr />
        </div>
        <div></div>
        <div class="flex flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 thin-scrollbar">
          <img
            v-for="image in projectID.images"
            :key="image.index"
            :src="image"
            alt="project-image"
            class="rounded-md"
          />
        </div>
      </template>
    </SidebarContainer>
  </Icon>
</template>

<script>
export default {
  data() {
    return {
      isFull: false,
      fullWidthImages: false,
      projects: this.appdata.projects,
      projectID: false,
      projectContent: null
    }
  },
  methods: {
    setProjectID(id) {
      if (this.projectID == id) {
        this.projectID = false
      } else {
        this.projectID = id
      }
      console.log(this.projectID)
    },
    getReadme(user, repo) {
      fetch(`https://raw.githubusercontent.com/wahyukusumo/${repo}/main/README.md`) // Fetch the file from GitHub's raw content URL
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.text() // Use response.text() for plain text files
        })
        .then((content) => {
          this.projectContent = content // Log the content to the console
          // Process the content as needed
        })
        .catch((error) => console.error('Error fetching README:', error)) // Handle errors
    }
  },
  props: ['appdata']
}
</script>
