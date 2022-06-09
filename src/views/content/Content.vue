<template>
  <div class="flex">
    <aside style="flex-shrink: 0; flex-grow: 1;" class="position-relative z-index-1 width-100% max-width-xxxxs border-right">
      <div class="padding-sm">
        <AppNestedMenu :items="menu"/>
      </div>
    </aside>
    
    <main class="position-relative z-index-1 flex-grow height-100vh">
      <div class="padding-y-sm padding-x-md">
        <p v-for="page in pageStore.pages" :key="page.id">{{ page.title }}</p>
      </div>
    </main>
    
    <!-- <div class="container max-width-lg padding-y-sm">
      <div v-for="page in pageStore.pages" :key="page.id">
        <p>{{ page.title }}</p>
      </div>
    </div> -->
    
    <!-- <ContentItemModal @closed="closeModal" @destroyed="destroyItem" :item="modalData" :class="modalData ? 'modal--is-visible' : ''"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import { usePageStore } from '@/domain/pages/store/usePageStore'
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
