<template>
  <AppModal 
    size="md"
    @closed="pageStore.toggleContentExportModal()" 
    :class="pageStore.contentExportModalOpen ? 'modal--is-visible' : ''"
  >
    <div class="flex items-center justify-between margin-bottom-sm">
      <h2 class="text-md margin-bottom-sm">Exports pages to CSV</h2>
      
      <button @click="exportPages()" class="btn btn--primary">
        <IconExport size="xs" class="color-white"/>
        <span class="margin-left-xxs">Export</span>
      </button>
    </div>
    
    <!-- Table -->
    <div class="text-sm margin-bottom-md">
      <div class="grid text-bold border-bottom margin-bottom-xxs padding-bottom-xxs">
        <div class="col grid">
          <div class="col padding-xxs">Title</div>
          <div class="col padding-xxs">Url</div>
          <div class="col padding-xxs">Category</div>
        </div>
      </div>
      
      <!-- TODO: Take care of the inline style below -->
      <div v-for="(page) in pageStore.pages" :key="page.id" class="grid border-bottom">
        <div class="col padding-xxs" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ page.title }}</div>
        <div class="col padding-xxs" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ page.url }}</div>
        <div class="col padding-xxs">{{ page.category ? page.category.title : 'Uncategorized' }}</div>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'
import AppModal from '@/app/components/AppModal.vue'
import IconExport from '@/app/components/icons/IconExport.vue'

const pageStore = usePageStore()

function exportPages() {
  
}
</script>
