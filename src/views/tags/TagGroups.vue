<template>
  <div>
    <div class="container max-width-sm flex items-center justify-between padding-y-sm">
      <h1 class="text-lg">Tag Groups</h1>
      <button @click="tagGroupStore.toggleCreateModal" class="btn btn--primary">Add Tag Group</button>
    </div>

    <div class="container max-width-sm padding-y-sm">
      <div v-for="group in tagGroupStore.groups" :key="group.id" class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">{{ group.title }}</h2>
        <p class="text-sm">{{ group.tags_count }} tags</p>
      </div>
    </div>

    <CreateTagGroupModal/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTagGroupStore } from '@/domain/tags/store/useTagGroupStore'
import CreateTagGroupModal from '@/views/tags/components/CreateTagGroupModal.vue'

const tagGroupStore = useTagGroupStore()

onMounted(() => {
    tagGroupStore.index()
})
</script>
