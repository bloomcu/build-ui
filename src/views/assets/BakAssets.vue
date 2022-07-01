<template>
  <LayoutDefault maxWidth="none">
      <div class="flex">
        <aside class="position-relative z-index-1 width-100% border-right max-width-xxxxs padding-y-sm padding-x-md">
          <AppNestedMenu :items="groups"/>
        </aside>
        
        <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
          <!-- <FileUploader :folder="route.params.organization" :group="groups[toggled].name"/> -->
          <!-- <FileList @selected="openModal" @destroyed="destroyFile" :files="fileStore.filterByGroup(groups[toggled].name)"/> -->
          <div class="grid gap-sm">        
            <div v-for="file in fileStore.files" :key="file.id" class="col-4">
              <AppCard :title="file.name" :subtitle="file.type" @selected="openModal"/>
            </div>
          </div>
        </main>
      </div>
    
    <FileModal @closed="closeModal" @destroyed="destroyFile" :file="modalData" :class="modalData ? 'modal--is-visible' : ''"/>
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFileStore } from '@/domain/files/store/useFileStore'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppCard from '@/app/components/AppCard.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'
import AppTodoList from '@/app/components/AppTodoList.vue'

const route = useRoute()
const fileStore = useFileStore()

onMounted(() => {
  fileStore.index()
})

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
  fileStore.destroy(file)
  closeModal()
}

const groups = [
  {
    name: 'brand',
    title: 'Brand Guide',
    description: 'Upload your brand usage guide document(s) here.',
    todos: [
      {
        title: 'Format: PDF',
        formats: ['pdf'],
      }
    ]
  },
  {
    name: 'logo',
    title: 'Logo',
    description: 'Upload your logo(s) here.',
    todos: [
      {
        title: 'Format: SVG and EPS',
        formats: ['svg', 'eps'],
      }
    ]
  },
  // {
  //   name: 'color',
  //   title: 'Color Palette',
  //   description: 'Upload an image or document containing your color palette.',
  // },
  {
    name: 'desktop-fonts',
    title: 'Desktop Fonts',
    description: 'Upload your fonts for desktop usage.',
    todos: [
      {
        title: 'Format: TTF, TTC or OTF',
        formats: ['ttf', 'ttc', 'otf'],
      }
    ]
  },
  {
    name: 'web-fonts',
    title: 'Web Fonts',
    description: 'Upload your fonts for web usage.',
    todos: [
      {
        title: 'Format: TTF, OTF, WOFF, WOFF2 or EOT',
        formats: ['ttf', 'otf', 'woff', 'woff2', 'eot'],
      }
    ]
  },
  {
    name: 'photos',
    title: 'Photography',
    description: 'Upload your photography.',
    todos: [
      {
        title: 'Format: JPG, JPEG or PNG',
        formats: ['jpg', 'jpeg', 'png'],
      }
    ]
  },
  {
    name: 'other',
    title: 'Other Media',
    description: 'Upload other brand media such as patterns, icons or other graphics.',
    todos: []
  },
]
</script>
