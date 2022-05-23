<template>
  <div class="container max-width-lg padding-y-sm">
    <h1>Intake</h1>
    <p>Instructions</p>
  </div>
  
  <div class="container max-width-lg padding-y-sm">
    <FileUploader/>
    <FileList :files="fileStore.files" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'

const fileStore = useFileStore()

onMounted(() => {
    fileStore.index()
})
</script>
