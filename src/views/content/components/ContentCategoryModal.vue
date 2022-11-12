<template>
  <AppModal 
    size="xxs"
    @closed="pageStore.toggleCategoryModal()" 
    :class="pageStore.categoryModalOpen ? 'modal--is-visible' : ''"
  >
    <h2 class="text-md margin-bottom-sm">Update category</h2>
    
  </AppModal>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'
import AppModal from '@/app/components/AppModal.vue'

const pageStore = usePageStore()
</script>
