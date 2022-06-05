<template>
  <div>
    <div class="container max-width-lg text-component padding-y-sm">
      <h2>Content</h2>
      <p>AirBnb</p>
    </div>
    
    <div class="container max-width-lg padding-y-sm">
      <div v-for="group in groups" :key="group.name" class="grid gap-sm margin-bottom-xl padding-y-sm border-top border-contrast-lower">
        <div class="col-4 padding-right-md">
          <h4 class="margin-bottom-sm">{{ group.title }}</h4>
          <p class="text-sm margin-bottom-sm" v-html="group.description"></p>
          <AppTodoList :todos="group.todos" />
        </div>
        <div class="col-8 bg-dark radius-md padding-sm">
        </div>
      </div>
    </div>
    
    <!-- <ContentItemModal @closed="closeModal" @destroyed="destroyItem" :item="modalData" :class="modalData ? 'modal--is-visible' : ''"/> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '@/domain/content/store/useContentStore'

// import ContentItemModal from '@/domain/content/components/ContentItemModal.vue'

const route = useRoute()
const contentStore = useContentStore()

// let modalData = ref(null)

onMounted(() => {
  contentStore.index()
})

// function openModal(item) {
//   modalData.value = item
// }

// function closeModal() {
//   modalData.value = null
// }

function destroyItem(item) {
  fileStore.destroy(item.id)
  // closeModal()
}
</script>
