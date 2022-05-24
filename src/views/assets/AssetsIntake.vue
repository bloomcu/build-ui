<template>
  <div class="container max-width-lg padding-y-sm">
    <h2>Intake</h2>
    <!-- <p>The purpose of this guide is to gather information and assets about your brand needed to begin the design and copywriting phases of this project.</p> -->
  </div>

  <!-- <div class="container max-width-lg padding-y-sm">
    <div v-for="group in groups" :key="group.name" class="grid gap-sm margin-bottom-xl">
      <div class="col-12 text-component padding-y-sm border-top border-contrast-lower">
        <h4>{{ group.title }}</h4>
        <p class="text-sm" v-html="group.description"></p>
      </div>
      <div class="padding-sm" style="background-color: #f1f0ef; border-radius: 20px;">
        <FileUploader :group="group.name"/>
        <FileList :files="fileStore.filterByGroup(group.name)"/>
      </div>
    </div>
  </div> -->
  
  <div class="container max-width-lg padding-y-sm">
    <div v-for="group in groups" :key="group.name" class="grid gap-sm margin-bottom-xl">
      <div class="col-12 text-component padding-y-sm border-top border-contrast-lower">
        <h4>{{ group.title }}</h4>
        <p class="text-sm" v-html="group.description"></p>
      </div>
      <div class="col-4">
        <FileUploader :group="group.name"/>
      </div>
      <div class="col-8">
        <FileList :files="fileStore.filterByGroup(group.name)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'

const fileStore = useFileStore()

const groups = [
  {
    name: 'brand-guide',
    title: 'Brand Guide',
    description: 'Upload your brand usage guide document(s) here.',
  },
  {
    name: 'logo',
    title: 'Logo',
    description: 'Upload your logo(s) here.',
    formats: ['SVG', 'EPS'],
  },
  {
    name: 'color',
    title: 'Color Palette',
    description: 'Upload an image or document showing your color palette.',
  },
  {
    name: 'fonts',
    title: 'Fonts',
    description: 'Upload your fonts for desktop usage and web usage.<br>Desktop formats: TTF, TTC, OTF.<br>Web formats: TTF, OTF, WOFF, WOFF2, EOT.',
    formats: ['TTF', 'TTC', 'OTF', 'WOFF', 'WOFF2', 'EOT'],
  },
  {
    name: 'photography',
    title: 'Photography',
    description: 'Upload your photography.',
    formats: ['JPG', 'JPEG', 'PNG'],
  },
  {
    name: 'other-media',
    title: 'Other Media',
    description: 'Upload other brand media such as patterns, icons or other graphics.',
  },
]

onMounted(() => {
    // fileStore.index({ 'filter[group]': 'photography' })
    fileStore.index()
})
</script>
