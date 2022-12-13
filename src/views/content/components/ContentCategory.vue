<template>
  <div @click="handleClick(id)">
    <AppChip>{{category ? category.title : 'Uncategorized'}}</AppChip>
  </div>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'
import AppChip from '@/app/components/AppChip.vue'

const pageStore = usePageStore()

function handleClick(id) {
  // Add to array if not present.
  // TODO: Abstract this away
  let index = pageStore.selected.indexOf(id)
      index === -1 ? pageStore.selected.push(id) : null
    
  pageStore.toggleContentCategoryModal()
}

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
