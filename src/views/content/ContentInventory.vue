<template>
  <!-- <div class="padding-y-sm border-bottom">
    <div class="container flex justify-between">
      <div>
        <span class="text-sm">Back</span>
      </div>
      <div>
        
      </div>
    </div>
  </div> -->
  
  <LayoutDefault maxWidth="none">
    <div class="flex">
      <aside class="position-relative z-index-1 width-100% padding-y-sm padding-right-md border-right" style="max-width: 280px;">
        <AppNestedMenu title="status" :items="statuses.status"/>
        <AppNestedMenu title="category" :items="tags.children"/>
      </aside>
      
      <main class="position-relative z-index-1 flex-grow height-100vh">
        <div class="padding-y-sm padding-left-md">
          <ContentSkeletonLoader v-if="pages.isLoading"/>
          <ContentTable v-else/>
        </div>
      </main>
    </div>
    
    <ContentCategoryModal/>
    <ContentExportModal/>
  </LayoutDefault>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { usePageStore } from '@/domain/pages/store/usePageStore'
import { useStatusStore } from '@/domain/statuses/store/useStatusStore'
import { useTagStore } from '@/domain/tags/store/useTagStore'
import useQuery from '@/app/composables/useQuery.js'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import ContentSkeletonLoader from '@/views/content/components/ContentSkeletonLoader.vue'
import ContentTable from '@/views/content/components/ContentTable.vue'
import ContentCategoryModal from '@/views/content/components/ContentCategoryModal.vue'
import ContentExportModal from '@/views/content/components/ContentExportModal.vue'

const pages = usePageStore()
const statuses = useStatusStore()
const tags = useTagStore() // TODO: 
const route = useRoute()
const { query } = useQuery() // TODO: Import in one line

function indexPages() {
  // TODO: Consider getting query params in the store or API
  pages.index({
    'filter[category.slug]': query.value.category,
    'filter[status.slug]': query.value.status,
  })
}

watch(route, (newValue) => {
  // let noQuery = Object.keys(newValue.query).length === 0
  
  // if (newValue.query.status || newValue.query.category || noQuery) {
    indexPages()
  // }
}, { deep: true })

onMounted(() => {
  indexPages()
  statuses.show('content-statuses')
  tags.show('content-tags')
})
</script>
