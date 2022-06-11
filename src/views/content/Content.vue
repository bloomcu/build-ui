<template>
  <div class="flex">
    <aside class="flex-shrink-0 flex-grow position-relative z-index-1 width-100% max-width-xxxxs">
      <div class="padding-sm">
        <!-- <p class="text-sm margin-bottom-xxs">Redwood</p>
        <h3 class="text-base margin-bottom-sm">Content Inventory</h3> -->
        <AppNestedMenu title="Status" :items="menu"/>
        <AppNestedMenu title="Category" :items="menu"/>
      </div>
    </aside>
    
    <main class="position-relative z-index-1 flex-grow height-100vh">
      <div class="padding-y-sm padding-x-md">
        <AppTable :items="pages"/>
      </div>
    </main>
    
    <!-- <ContentItemModal @closed="closeModal" @destroyed="destroyItem" :item="modalData" :class="modalData ? 'modal--is-visible' : ''"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import { usePageStore } from '@/domain/pages/store/usePageStore'

import AppTable from '@/app/components/AppTable.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
// import ContentItemModal from '@/domain/content/components/ContentItemModal.vue'

// const route = useRoute()
const pageStore = usePageStore()

let menu = [
  {
    id: 1,
    title: 'Parent',
    children: [
      {
        id: 4,
        title: 'Child',
        children: [
          {
            id: 7,
            title: 'Grandchild',
            children: []
          },
        ]
      },
      {
        id: 5,
        title: 'Child',
        children: []
      },
    ]
  },
  {
    id: 2,
    title: 'Parent',
    children: [
      {
        id: 6,
        title: 'Child',
        children: []
      },
    ]
  },
  {
    id: 3,
    title: 'Parent',
    children: []
  },
]

let pages = [
  {
    id: 1,
    title: 'Item One',
  },
  {
    id: 2,
    title: 'Item Two',
  },
  {
    id: 3,
    title: 'Item Three',
  },
]

// let modalData = ref(null)

onMounted(() => {
  pageStore.index()
})

// function openModal(item) {
//   modalData.value = item
// }

// function closeModal() {
//   modalData.value = null
// }

function storePage(page) {
  pageStore.store(page)
  // closeModal()
}

function destroyPage(page) {
  pageStore.destroy(page.id)
  // closeModal()
}
</script>
