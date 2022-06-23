<template>  
  <div class="flex margin-auto height-100vh">
    <!-- Left -->
    <div class="color-white bg-primary padding-x-lg padding-y-md" style="flex: 1 0 50%; position: sticky; top: 0; left: 0;">
      <h2 class="color-white margin-bottom-sm">{{ groups[step].title }}</h2>
      <p class="text-sm margin-bottom-sm" v-html="groups[step].description"></p>
      <AppTodoList :todos="groups[step].todos" />
    </div>
    <!-- Right -->
    <div class="c_ol-6 flex flex-column" style="flex: 1 0 50%; position: relative; overflow-y: scroll;">
      <div class="position-absolute inset-0 padding-y-md">
        <div class="flex-grow padding-x-lg padding-bottom-xxl">
          <FileUploader folder="bloomcu" :group="groups[step].name"/>
          <FileList @destroyed="destroyFile" :files="fileStore.filterByGroup(groups[step].name)"/>
        </div>
      </div>
      <!-- Controls -->
      <div class="margin-top-auto position-fixed bottom-0 left-50% right-0 bg">
        <div>
          <AppProgressBar :progress="progress"/>
        </div>
        <div class="flex justify-between padding-x-lg padding-y-md">
          <router-link v-if="step == 0" :to="{ name: 'assets', params: { organization: 'bloomcu' }}" class="btn">Close</router-link>
          <button v-if="step > 0" @click="step = step - 1" type="button" name="button" class="btn">Back</button>
          <button v-if="step != 4" @click="step = step + 1" type="button" name="button" class="btn btn--primary margin-left-auto">Next Step</button>
          <router-link v-else :to="{ name: 'assets', params: { organization: 'bloomcu' }}" class="btn btn--primary margin-left-auto">Complete</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'
import AppTodoList from '@/app/components/AppTodoList.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'

const fileStore = useFileStore()

onMounted(() => {
    fileStore.index()
})

function destroyFile(file) {
  fileStore.destroy(file)
}

const step = ref(0)

const progress = computed(() => {
  return (step.value + 1) / groups.length * 100
})

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
    name: 'font',
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
    name: 'font',
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
    name: 'photo',
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

<style lang="scss" scoped>
.todo__checkbox {
  background-color: #fff !important;
}
</style>
