<template>
  <div>
    <MediaUploader :folder="route.params.organization" :group="group"/>
    <MediaList :files="mediaStore.filterByGroup(group)"/>
  </div>
</template>

<script setup>
import { useMediaStore } from '@/domain/media/store/useMediaStore'
import { useRoute } from 'vue-router'

import MediaUploader from '@/domain/media/components/MediaUploader.vue'
import MediaList from '@/domain/media/components/MediaList.vue'

const props = defineProps({
  folder: { type: String },
  group: { type: String }
})

const mediaStore = useMediaStore()
const route = useRoute()
</script>

<style lang="scss">
</style>
