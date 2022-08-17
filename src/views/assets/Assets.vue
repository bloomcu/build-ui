<template>
  <LayoutDefault maxWidth="none">
      <div class="flex container max-width-xxl">
        <aside class="position-relative z-index-1 width-100% border-right max-width-xxxxs padding-y-sm padding-x-md">
          <AppNestedMenu title="tags" :items="groups"/>
        </aside>
        
        <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
          <!-- <MediaUploader :folder="route.params.organization" :tag="groups[toggled]"/> -->
          <!-- <MediaList @selected="openModal" @destroyed="destroyFile" :files="mediaStore.filterByTag(groups[toggled].tag)"/> -->
          <div class="grid gap-sm">
            <AppCard 
              v-for="file in mediaStore.files"
              :key="file.id"
              :image="file.original_url"
              :title="file.name"
              :subtitle="file.extension"
              class="col-6@xs col-4@lg"
            />
          </div>
          <!-- <MediaList @selected="openModal" @destroyed="destroyFile" :files="mediaStore.files"/> -->
        </main>
      </div>
    
    <MediaModal @closed="closeModal" @destroyed="destroyFile" :file="modalData" :class="modalData ? 'modal--is-visible' : ''"/>
  </LayoutDefault>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaStore } from '@/domain/media/store/useMediaStore'
import useToggle from '@/app/composables/useToggle.js'

const route = useRoute()
const mediaStore = useMediaStore()
const { toggle, toggled } = useToggle()

function filterFiles(tagId) {
    store.index({ 'filter[tags.id]': tagId })
}

function destroyFile(file) {
  mediaStore.destroy(file)
  closeModal()
}

// Extract to a view store
let modalData = ref(null)
function openModal(file) {
  modalData.value = file
}
function closeModal() {
  modalData.value = null
}

const groups = [
  {
    id: 0,
    title: 'Brand Guide',
    tag: 'brand',
  },
  {
    id: 1,
    title: 'Logo',
    tag: 'logo',
  },
  {
    id: 2,
    title: 'Fonts',
    tag: 'fonts',
  },
  {
    id: 3,
    title: 'Photos',
    tag: 'photos',
  },
  {
    id: 4,
    title: 'Other Media',
    tag: 'other-media',
  },
]

mediaStore.index()
</script>

<script>
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import AppCard from '@/app/components/AppCard.vue'
import MediaUploader from '@/domain/media/components/MediaUploader.vue'
import MediaList from '@/domain/media/components/MediaList.vue'
import MediaModal from '@/domain/media/components/MediaModal.vue'

export default {
    components: [
      LayoutDefault,
      AppNestedMenu,
      AppCard,
      MediaUploader,
      MediaList,
      MediaModal,
    ]
}
</script>
