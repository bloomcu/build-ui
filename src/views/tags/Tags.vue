<template>
  <div>
    <div class="container max-width-sm flex items-center justify-between padding-y-sm">
      <h1 class="text-lg">Tag Groups</h1>
      <button @click="tagStore.toggleCreateModal()" class="btn btn--primary">Create Tag Group</button>
    </div>

    <div class="container max-width-sm padding-y-sm">
      <div v-for="tag in tagStore.tags" :key="tag.id" class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">{{ tag.title }}</h2>
        <p class="text-sm">{{ tag.children_count }} tags</p>
      </div>
    </div>

    <CreateTagModal/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTagStore } from '@/domain/tags/store/useTagStore'
import CreateTagModal from '@/views/tags/components/CreateTagModal.vue'

const tagStore = useTagStore()

onMounted(() => {
    tagStore.index()
})
</script>
