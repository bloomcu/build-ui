<template>  
  <div v-if="mediaStore.files" class="flex margin-auto height-100vh">
    <!-- Left -->
    <div class="flex flex-column justify-between bg-primary bg-opacity-5% border-right padding-top-xs" style="flex: 1 0 25%; position: sticky; top: 0; left: 0;">
      <div class="flex contents padding-lg">
        <AppSteps :step="steps[step].name" @changeStep="changeStep"/>
      </div>
      
      <div class="_color-white padding-x-lg">
        <h1 class="_color-white margin-bottom-sm">{{ steps[step].title }}</h1>
        <!-- <p v-if="steps[step].description" class="margin-bottom-md" v-html="steps[step].description"></p> -->
      </div>
      
      <div class="flex justify-between bg border-top padding-y-sm padding-x-md">
        <!-- <router-link v-if="step == 0" :to="{ name: 'assets', params: { organization: route.params.organization }}" class="btn btn--subtle">Close</router-link> -->
        <button v-if="step > 0" @click="previousStep()" type="button" name="button" class="btn btn--subtle">Back</button>
        <button v-if="step != (steps.length - 1)" @click="nextStep()" type="button" name="button" class="btn btn--primary margin-left-auto">Next Step</button>
        <!-- <router-link v-else :to="{ name: 'assets', params: { organization: route.params.organization }}" class="btn btn--primary margin-left-auto">Complete</router-link> -->
      </div>
    </div>
    
    <!-- Right -->
    <div class="flex flex-column" style="flex: 1 0 50%; position: relative; overflow-y: scroll;">
      <!-- Steps -->
      <div class="padding-x-xl padding-top-lg">
        <div class="flex-grow padding-bottom-xxl">
          <h4 v-if="steps[step].instructions" class="margin-bottom-sm" v-html="steps[step].instructions"></h4>
          <p v-if="steps[step].description" class="margin-bottom-md" v-html="steps[step].description"></p>
          <component 
            v-for="(component, index) in steps[step].components"
            :is="component.name" 
            v-bind="component"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AssetIntakeUploader from '@/views/assets/components/AssetIntakeUploader.vue'
import AssetIntakeDoDont from '@/views/assets/components/AssetIntakeDoDont.vue'

export default defineComponent({
    components: {
      AssetIntakeUploader,
      AssetIntakeDoDont,
    }
})    
</script>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useMediaStore } from '@/domain/media/store/useMediaStore'
import { useRoute } from 'vue-router'

import AppSteps from '@/app/components/AppSteps.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'

const mediaStore = useMediaStore()

const route = useRoute()

const step = ref(0)

watch(step, () => {
  mediaStore.index({ 'filter[tags.slug]': steps[step.value].name })
})

onMounted(() => {
  mediaStore.index({ 'filter[tags.slug]': steps[step.value].name })
})

const progress = computed(() => {
  return (step.value + 1) / steps.length * 100
})

function nextStep() {
  step.value = step.value + 1
}

function previousStep() {
  step.value = step.value - 1
}

function changeStep(number) {
  step.value = number
}

function destroyFile(file) {
  mediaStore.destroy(file)
}

const steps = [
  {
    name: 'brand',
    title: 'Brand Guide',
    instructions: 'Upload your brand usage guide document(s) here.',
    description: 'Format: PDF',
    components: [
      {
        name: 'AssetIntakeUploader',
        collection: 'assets',
        tag: 'brand',
      }
    ],
  },
  {
    name: 'brand',
    title: 'Brand Do\'s and Don\'ts',
    instructions: 'What Do\'s and Don\'ts should we know about for your brand?',
    description: '',
    components: [
      {
        name: 'AssetIntakeDoDont',
        collection: 'assets',
        group: 'brand',
      }
    ],
  },
  {
    name: 'logo',
    title: 'Logo',
    instructions: 'Upload your logo(s) here.',
    description: 'Formats: SVG or EPS',
    components: [
      {
        name: 'AssetIntakeUploader',
        collection: 'assets',
        tag: 'logo',
      }
    ],
  },
  {
    name: 'logo',
    title: 'Logo Do\'s and Don\'ts',
    instructions: 'What Do\'s and Don\'ts should we know about for your logo?',
    description: '',
    components: [
      {
        name: 'AssetIntakeDoDont',
        collection: 'assets',
        group: 'logo',
      }
    ],
  },
  {
    name: 'font',
    title: 'Desktop Fonts',
    instructions: 'Upload your fonts for desktop use.',
    description: 'Formats: TTF, TTC or OTF',
    components: [
      {
        name: 'AssetIntakeUploader',
        collection: 'assets',
        tag: 'font',
      }
    ],
  },
  {
    name: 'font',
    title: 'Web Fonts',
    instructions: 'Upload your fonts for web use.',
    description: 'Formats: TTF, OTF, WOFF, WOFF2 or EOT',
    components: [
      {
        name: 'AssetIntakeUploader',
        collection: 'assets',
        tag: 'font',
      }
    ],
  },
  {
    name: 'font',
    title: 'Font Do\'s and Don\'ts',
    instructions: 'What Do\'s and Don\'ts should we know about for your fonts?',
    description: '',
    components: [
      {
        name: 'AssetIntakeDoDont',
        collection: 'assets',
        group: 'font',
      }
    ],
  },
  {
    name: 'photo',
    title: 'Photography',
    instructions: 'Upload your photography.',
    description: 'Formats: JPG, JPEG or PNG',
    components: [
      {
        name: 'AssetIntakeUploader',
        collection: 'assets',
        tag: 'photo',
      }
    ],
  },
  {
    name: 'photo',
    title: 'Photography Do\'s and Don\'ts',
    instructions: 'What Do\'s and Don\'ts should we know about for your photography?',
    description: '',
    components: [
      {
        name: 'AssetIntakeDoDont',
        collection: 'assets',
        group: 'photo',
      }
    ],
  },
  {
    name: 'other',
    title: 'Other Media',
    instructions: 'Upload other brand media such as patterns, icons or other graphics.',
    description: '',
    components: [
      {
        name: 'AssetIntakeUploader',
        collection: 'assets',
        tag: 'other',
      }
    ],
  },
  {
    name: 'other',
    title: 'Other Media Do\'s and Don\'ts',
    instructions: 'What Do\'s and Don\'ts should we know about for your other media?',
    description: '',
    components: [
      {
        name: 'AssetIntakeDoDont',
        collection: 'assets',
        group: 'other',
      }
    ],
  },
  {
    name: 'other',
    title: 'Finished',
    instructions: 'Thank you! You can close this window.',
    description: '',
    components: [],
  },
]
</script>
