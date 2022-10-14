<template>
  <div>
    <MediaUploader collection="assets" :tag="tag" :maxFileSize="maxFileSize" :acceptedFileTypes="acceptedFileTypes"/>
    <MediaList :files="mediaStore.files" @destroyed="mediaStore.destroy"/>
  </div>
</template>

<script setup>
import { useMediaStore } from '@/domain/media/store/useMediaStore'
import { useRoute } from 'vue-router'

import MediaUploader from '@/domain/media/components/MediaUploader.vue'
import MediaList from '@/domain/media/components/MediaList.vue'

const props = defineProps({
  collection: { 
    type: String 
  },
  tag: { 
    type: String 
  },
  maxFileSize: {
    type: String,
  },
  acceptedFileTypes: {
    type: Array,
  }
})

const mediaStore = useMediaStore()
const route = useRoute()
</script>

<style lang="scss">
</style>
