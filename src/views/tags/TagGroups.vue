<template>
  <div>
    <div class="container max-width-sm flex items-center justify-between padding-y-sm">
      <h1 class="text-lg">Tag Groups</h1>
      <button @click="tagStore.toggleCreateModal" class="btn btn--primary">Add Tag Group</button>
    </div>

    <div class="container max-width-sm padding-y-sm">
      <div v-for="group in tagStore.groups" :key="group.id" class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">{{ group.title }}</h2>
        <p class="text-sm">{{ group.tags_count }} tags</p>
      </div>
      <!-- <div class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">Tag Group One</h2>
        <p class="text-sm">24 tags</p>
      </div>
      <div class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">Tag Group Two</h2>
        <p class="text-sm">4 tags</p>
      </div>
      <div class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">Tag Group Three</h2>
        <p class="text-sm">4 tags</p>
      </div> -->
    </div>

    <CreateTagGroupModal/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTagStore } from '@/domain/tags/store/useTagStore'

import CreateTagGroupModal from '@/views/tags/components/CreateTagGroupModal.vue'

const tagStore = useTagStore()

onMounted(() => {
    tagStore.indexGroups()
})
</script>
