<template>
  <LayoutDefault maxWidth="none">
    <div class="flex container max-width-xxl">
      <aside class="position-relative z-index-1 width-100% border-right max-width-xxxxs padding-y-sm padding-x-md">
        <AppNestedMenu title="tags" :items="tags"/>
      </aside>
      
      <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
        <MediaUploader v-if="selectedTag" collection="assets" :tag="selectedTag"/>

        <div class="grid gap-sm">
          <AppCard 
            v-for="file in mediaStore.files"
            :key="file.id"
            :uuid="file.uuid"
            :title="file.name"
            :image="file.original_url"
            :subtitle="file.extension"
            @click="openModal(file)"
            class="col-6@xs col-3@lg"
          />
        </div>
      </main>
    </div>
    
    <MediaModal @closed="closeModal" @destroyed="destroyFile" :file="modalData" :class="modalData ? 'modal--is-visible' : ''"/>
  </LayoutDefault>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaStore } from '@/domain/media/store/useMediaStore'
import useToggle from '@/app/composables/useToggle.js'

const route = useRoute()
const mediaStore = useMediaStore()
const { toggled: selectedTag } = useToggle()

watch(selectedTag, () => {
  mediaStore.index({ 'filter[tags.slug]': selectedTag.value })
})

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

const tags = [
  {
    id: 15,
    title: 'Brand',
    slug: 'brand',
  },
  {
    id: 16,
    title: 'Logo',
    slug: 'logo',
  },
  {
    id: 17,
    title: 'Font',
    slug: 'font',
  },
  {
    id: 18,
    title: 'Photo',
    slug: 'photo',
  },
  {
    id: 19,
    title: 'Other',
    slug: 'other',
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
