<template>
  <div>
    <div class="container max-width-lg padding-y-sm">
      <h3>Assets</h3>
    </div>
    
    <div class="container max-width-lg padding-y-sm">
      <div v-for="group in groups" :key="group.name" class="grid gap-sm margin-bottom-xl padding-y-sm border-top border-contrast-lower">
        <div class="col-4 padding-right-md">
          <h4 class="margin-bottom-sm">{{ group.title }}</h4>
          <p class="text-sm margin-bottom-sm" v-html="group.description"></p>
          <AppTodoList :todos="group.todos" />
        </div>
        <div class="col-8 bg-dark radius-md padding-sm">
          <FileUploader folder="bloomcu" :group="group.name"/>
          <FileList @selected="openModal" @destroyed="destroyFile" :files="fileStore.filterByGroup(group.name)"/>
        </div>
      </div>
    </div>
    
    <FileModal @closed="closeModal" @destroyed="destroyFile" :file="modalData" :class="modalData ? 'modal--is-visible' : ''"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'
import AppTodoList from '@/app/components/AppTodoList.vue'

const route = useRoute()
const fileStore = useFileStore()
let modalData = ref(null)

onMounted(() => {
  fileStore.index()
})

function openModal(file) {
  modalData.value = file
}

function closeModal() {
  modalData.value = null
}

function destroyFile(file) {
  fileStore.destroy(file)
  closeModal()
}

const groups = [
  {
    name: 'guides',
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
    name: 'logos',
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
