<template>
  <LayoutDefault maxWidth="none">
      <div class="flex container max-width-xxl">
        <aside class="position-relative z-index-1 width-100% border-right max-width-xxxxs padding-y-sm padding-x-md">
          <AppNestedMenu :items="groups"/>
        </aside>
        
        <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
          <MediaUploader collection="assets" :tag="groups[toggled].tag"/>
          <MediaList @selected="openModal" @destroyed="destroyFile" :files="mediaStore.filterByTag(groups[toggled].tag)"/>
          <!-- <MediaList @selected="openModal" @destroyed="destroyFile" :files="mediaStore.files"/> -->
        </main>
      </div>
    
    <FileModal @closed="closeModal" @destroyed="destroyFile" :file="modalData" :class="modalData ? 'modal--is-visible' : ''"/>
  </LayoutDefault>
</template>

<script setup>
import { ref } from 'vue'

// Router
import { useRoute } from 'vue-router'
const route = useRoute()

// Stores
import { useMediaStore } from '@/domain/media/store/useMediaStore'
const mediaStore = useMediaStore()
mediaStore.index()

// Components
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import MediaUploader from '@/domain/media/components/MediaUploader.vue'
import MediaList from '@/domain/media/components/MediaList.vue'
import FileModal from '@/domain/media/components/FileModal.vue'

// Composables
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()

// Extract to a view store
let modalData = ref(null)

// Extract to a view store
function openModal(file) {
  modalData.value = file
}

// Extract to a view store
function closeModal() {
  modalData.value = null
}

function destroyFile(file) {
  mediaStore.destroy(file)
  closeModal()
}

const groups = [
  {
    id: 0,
    tag: 'brand',
    title: 'Brand Guide',
  },
  {
    id: 1,
    tag: 'logo',
    title: 'Logo',
  },
  {
    id: 2,
    tag: 'desktop-fonts',
    title: 'Desktop Fonts',
  },
  {
    id: 3,
    tag: 'web-fonts',
    title: 'Web Fonts',
  },
  {
    id: 4,
    tag: 'photos',
    title: 'Photography',
  },
  {
    id: 5,
    tag: 'other',
    title: 'Other Media',
  },
]
</script>
