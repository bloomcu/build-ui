<template>
  <div>
    <FileUploader folder="bloomcu" :group="group"/>
    <FileList :files="fileStore.filterByGroup(group)"/>
  </div>
</template>

<script setup>
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'

const props = defineProps({
  folder: { type: String },
  group: { type: String }
})

const fileStore = useFileStore()
</script>

<style lang="scss">
</style>
