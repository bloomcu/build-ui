<template>
  <AppModal 
    size="xxs"
    @closed="pageStore.toggleCategoryModal()" 
    :class="pageStore.categoryModalOpen ? 'modal--is-visible' : ''"
  >
    <h2 class="text-md margin-bottom-sm">Update category</h2>
    <AppNestedMenu title="new-category" :showTitle="false" :items="tagStore.children"/>
    <button @click="updateCategory()" class="btn btn--primary">Update category</button>
  </AppModal>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'
import { useTagStore } from '@/domain/tags/store/useTagStore'
import useQuery from '@/app/composables/useQuery.js'
import AppModal from '@/app/components/AppModal.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'

const pageStore = usePageStore()
const tagStore = useTagStore()
const { query } = useQuery()

function updateCategory(id, category) {
  console.log('Selected:', pageStore.selected)
  console.log('Category:', query.value['new-category'])
  // pageStore.update(id, {category: category})
}
</script>
