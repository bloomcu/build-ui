<template>
  <div class="content-table__top-bar flex items-center justify-between z-index-1 bg radius-md radius-top-left-0 radius-top-right-0 padding-xs margin-bottom-xs">
    <!-- Left -->
    <div class="flex items-center">
      <span class="text-sm">{{ pageStore.pages.length }} page(s)</span>
      <button v-if="pageStore.selected.length" @click="pageStore.clearSelectedPages()" class="btn btn--sm margin-left-sm">
        <span class="margin-right-xxs">{{ pageStore.selected.length }} selected</span>
        <IconClose size="xxs" class="color-primary"/>
      </button>
    </div>
    
    <!-- Right -->
    <div class="flex items-center">
      <button v-if="pageStore.selected.length" @click="pageStore.toggleContentCategoryModal()" class="btn btn--sm btn--subtle margin-right-xxs">
        <IconEdit size="xs" class="color-primary"/>
        <span class="margin-left-xxs">Edit</span>
      </button>
      
      <button @click="addNewPage()" class="btn btn--sm btn--subtle">
        <IconPlus size="xs" class="color-primary"/>
        <span class="margin-left-xxs">Add Page</span>
      </button>
      
      <button @click="pageStore.toggleContentExportModal()" class="btn btn--sm btn--primary margin-left-xxs">
        <IconExport size="xs" class="color-white"/>
        <span class="margin-left-xxs">Export</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'
import IconClose from '@/app/components/icons/IconClose.vue'
import IconEdit from '@/app/components/icons/IconEdit.vue'
import IconExport from '@/app/components/icons/IconExport.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'

const pageStore = usePageStore()

function addNewPage() {
  pageStore.store({title: 'New page'})
}
</script>

<style lang="scss">
.content-table__top-bar {
  position: sticky;
  top: 0;
  border: 1px solid var(--color-contrast-lower);
  border-top: none;
}
</style>
