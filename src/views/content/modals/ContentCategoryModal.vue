<template>
  <AppModal 
    size="xxs"
    @closed="pageStore.toggleContentCategoryModal()" 
    :class="pageStore.contentCategoryModalOpen ? 'modal--is-visible' : ''"
  >
    <h2 class="text-md margin-bottom-sm">Update category</h2>
    <AppNestedMenu v-if="tagStore.children" :items="tagStore.children" title="new-category" :showTitle="false" :showAllOption="false"/>
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
  // console.log('Selected:', pageStore.selected)
  // console.log('Category:', category)
  // console.log('Query:', query.value['new-category'])
  
  // Iterate selected pages and update 
  // TODO: Abstract this away
  // pageStore.pages.forEach((page) => {
  //   if (pageStore.selected.includes(page.id)) {
  //     page.category = category
  //   }
  // })
  // 
  pageStore.update(pageStore.selected, {
    category: query.value['new-category']
  }).then(() => {
    pageStore.index({
      'filter[category.slug]': query.value.category,
      'filter[status.slug]': query.value.status,
    })
    
    pageStore.toggleContentCategoryModal()
  })
}
</script>
