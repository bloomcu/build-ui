<template>
  <LayoutDefault maxWidth="none">
    <div class="flex">
      <aside class="position-relative z-index-1 width-100% max-width-xxxxs padding-y-sm padding-right-md border-right">
        <AppNestedMenu title="tags" :items="tags"/>
      </aside>
      
      <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
        <AssetSkeletonLoader v-if="mediaStore.isLoading"/>
        
        <!-- Tutorial -->
        <div v-if="!mediaStore.isLoading && !mediaStore.files.length" class="card card--shadow card--dark">
          <div class="grid gap-lg padding-sm">
            <div class="col-6@lg col-10@md col-12@sm text-component">
              <h3>Upload your brand assets</h3>
              <p>Complete an intake form that asks for your brand assets.</p>
              <RouterLink :to="{ name: 'assetsIntake', params: { organization: auth.organization }}" class="btn btn--primary">
                Start intake form
              </RouterLink>
            </div>
            
            <div class="col-6@lg col-10@md col-12@sm">
              <div class="video">
                <iframe class="video__iframe" src="https://player.vimeo.com/video/743548172?h=4bd1787217&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&byline=0&dnt=1&portrait=0&title=0" frameborder="0" allow="fullscreen" allowfullscreen title="How to use the Style Design Interface"></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Assets -->
        <div v-else>
          <MediaUploader v-if="query.tags" collection="assets" :tag="query.tags"/>  
          <div class="grid gap-sm">
            <MediaCard 
              v-for="file in mediaStore.files"
              :key="file.id"
              :file="file"
              @selected="openModal(file)"
              @destroyed="mediaStore.destroy"
              class="col-6@xs col-3@lg"
              deleteable
            />
          </div>
        </div>
      </main>
      
      <MediaModal @closed="closeModal" @destroyed="destroyFile" :file="modalData" :class="modalData ? 'modal--is-visible' : ''"/>
    </div>
  </LayoutDefault>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import { useMediaStore } from '@/domain/media/store/useMediaStore'
import useQuery from '@/app/composables/useQuery.js'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AssetSkeletonLoader from '@/views/assets/loaders/AssetSkeletonLoader.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import MediaCard from '@/domain/media/components/media-card/MediaCard.vue'
import MediaUploader from '@/domain/media/components/MediaUploader.vue'
import MediaList from '@/domain/media/components/MediaList.vue'
import MediaModal from '@/domain/media/modals/MediaModal.vue'

const auth = useAuthStore()
const mediaStore = useMediaStore()
const { query, set, unset } = useQuery() // TODO: Import in one line

function indexFiles() {
  mediaStore.index({'filter[tags.slug]': query.value.tags})
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

onMounted(() => {
  indexFiles()
})

watch(query, () => {
  indexFiles()
}, { deep: true })

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
</script>
