<template>
  <div @click="pageStore.toggleCategoryModal(), pageStore.selectPage(id, $event)">
    <AppChip v-if="category" color="outline" :label="category.title" />
    <AppChip v-else color="grey" label="Uncategorized" />
  </div>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'
import AppChip from '@/app/components/AppChip.vue'

const pageStore = usePageStore()

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  category: {
    type: Object
  }
})
</script>
