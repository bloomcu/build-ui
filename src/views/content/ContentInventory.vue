<template>
  <div class="flex">
    <aside class="flex-shrink-0 flex-grow position-relative z-index-1 width-100% max-width-xxxxs">
      <div class="padding-sm">
        <AppNestedMenu title="Categories" :items="tagGroupStore.tags"/>
        
        <!-- <AppNestedMenu title="Category" :items="menu"/> -->
      </div>
    </aside>
    
    <main class="position-relative z-index-1 flex-grow height-100vh">
      <div class="padding-y-sm padding-x-md">
        <ContentTable/>
      </div>
    </main>
    
    <!-- <ContentItemModal @closed="closeModal" @destroyed="destroyItem" :item="modalData" :class="modalData ? 'modal--is-visible' : ''"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import { usePageStore } from '@/domain/pages/store/usePageStore'
import { useTagGroupStore } from '@/domain/tags/store/useTagGroupStore'
import ContentTable from '@/views/content/components/ContentTable.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
// import ContentItemModal from '@/domain/content/components/ContentItemModal.vue'


// const route = useRoute()
const pageStore = usePageStore()
const tagGroupStore = useTagGroupStore()

onMounted(() => {
  pageStore.index()
  tagGroupStore.show('tag-group')
})
</script>
