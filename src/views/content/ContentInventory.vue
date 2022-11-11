<template>
  <LayoutDefault maxWidth="none">
    <div class="flex">
      <aside class="position-relative z-index-1 width-100% max-width-xxxxs padding-y-sm padding-right-md border-right">
        <AppNestedMenu title="status" :items="statuses.status"/>
        <AppNestedMenu title="category" :items="tags.children"/>
      </aside>
      
      <main class="position-relative z-index-1 flex-grow height-100vh">
        <div class="padding-y-sm padding-x-md">
          <ContentTable/>
        </div>
      </main>
      
      <!-- <ContentItemModal @closed="closeModal" @destroyed="destroyItem" :item="modalData" :class="modalData ? 'modal--is-visible' : ''"/> -->
    </div>
  </LayoutDefault>
</template>

<script setup>
import { onMounted } from 'vue'

import { usePageStore } from '@/domain/pages/store/usePageStore'
import { useStatusStore } from '@/domain/statuses/store/useStatusStore'
import { useTagStore } from '@/domain/tags/store/useTagStore'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import ContentTable from '@/views/content/components/ContentTable.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
// import ContentItemModal from '@/domain/content/components/ContentItemModal.vue'

const pages = usePageStore()
const statuses = useStatusStore()
const tags = useTagStore()

onMounted(() => {
  pages.index()
  statuses.show('content-statuses')
  tags.show('content-tags')
})
</script>
