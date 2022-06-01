<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileUploader from '@/domain/files/components/FileUploader.vue'
import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'
import AppChoiceButton from '@/app/components/AppChoiceButton.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'

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
  // {
  //   name: 'color',
  //   title: 'Color Palette',
  //   description: 'Upload an image or document containing your color palette.',
  // },
  {
    name: 'font',
    title: 'Fonts',
    description: 'Upload your fonts for desktop usage and web usage.<br><br>Desktop formats: TTF, TTC, OTF.<br>Web formats: TTF, OTF, WOFF, WOFF2, EOT.',
    formats: ['TTF', 'TTC', 'OTF', 'WOFF', 'WOFF2', 'EOT'],
  },
  {
    name: 'photo',
    title: 'Photography',
    description: 'Upload your photography.',
    formats: ['JPG', 'JPEG', 'PNG'],
  },
  {
    name: 'other',
    title: 'Other Media',
    description: 'Upload other brand media such as patterns, icons or other graphics.',
  },
]

const step = ref(0)

const progress = computed(() => {
  return (step.value + 1) / groups.length * 100
})

onMounted(() => {
    // fileStore.index({ 'filter[group]': 'photography' })
    fileStore.index()
})
</script>

<template>  
  <div class="flex margin-auto height-100vh">
    <!-- Left -->
    <div class="text-component color-white bg-primary padding-x-lg padding-y-md" style="flex: 1 0 50%; position: sticky; top: 0; left: 0;">
      <h2 class="color-white">{{ groups[step].title }}</h2>
      <p class="text-sm" v-html="groups[step].description"></p>
    </div>
    <!-- Right -->
    <div class="c_ol-6 flex flex-column" style="flex: 1 0 50%; position: relative; overflow-y: scroll;">
      <div class="position-absolute inset-0 padding-y-md">
        <div class="flex-grow padding-x-lg padding-bottom-xxl">
          <FileUploader folder="bloomcu" :group="groups[step].name"/>
          <FileList :files="fileStore.filterByGroup(groups[step].name)"/>
          <!-- <AppChoiceButton/> -->
        </div>
      </div>
      <!-- Controls -->
      <div class="margin-top-auto position-fixed bottom-0 left-50% right-0 bg">
        <div>
          <AppProgressBar :progress="progress"/>
        </div>
        <div class="flex justify-between padding-x-lg padding-y-md">
          <!-- <router-link v-if="step == 0" to="/assets" type="button" name="button" class="btn">Close</router-link> -->
          <button v-if="step > 0" @click="step = step - 1" type="button" name="button" class="btn">Back</button>
          <button v-if="step != 4" @click="step = step + 1" type="button" name="button" class="btn btn--primary margin-left-auto">Next Step</button>
          <!-- <router-link v-else to="/assets/intake" class="btn btn--primary margin-left-auto">Complete</router-link> -->
        </div>
      </div>
    </div>
  </div>
  <!-- <FileModal/> -->
</template>