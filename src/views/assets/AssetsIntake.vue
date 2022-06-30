<template>  
  <div class="flex margin-auto height-100vh">
    <!-- Left -->
    <div class="flex flex-column justify-between bg-primary bg-opacity-5% border-right padding-top-xs" style="flex: 1 0 25%; position: sticky; top: 0; left: 0;">
      <div class="_flex _contents padding-lg">
        <AppSteps :step="steps[step].name" @changeStep="changeStep"/>
      </div>
      
      <div class="_color-white padding-x-lg">
        <h1 class="_color-white margin-bottom-sm">{{ steps[step].title }}</h1>
        <p v-if="steps[step].description" class="margin-bottom-md" v-html="steps[step].description"></p>
      </div>
      
      <div class="flex justify-between bg border-top padding-y-sm padding-x-md">
        <router-link v-if="step == 0" :to="{ name: 'assets', params: { organization: 'bloomcu' }}" class="btn btn--subtle">Close</router-link>
        <button v-if="step > 0" @click="previousStep()" type="button" name="button" class="btn btn--subtle">Back</button>
        <button v-if="step != (steps.length - 1)" @click="nextStep()" type="button" name="button" class="btn btn--primary margin-left-auto">Next Step</button>
        <router-link v-else :to="{ name: 'assets', params: { organization: 'bloomcu' }}" class="btn btn--primary margin-left-auto">Complete</router-link>
      </div>
    </div>
    
    <!-- Right -->
    <div class="flex flex-column" style="flex: 1 0 50%; position: relative; overflow-y: scroll;">
      <!-- Steps -->
      <div class="padding-x-xl padding-top-lg">
        <div class="flex-grow padding-bottom-xxl">
          <h4 v-if="steps[step].instructions" class="margin-bottom-md" v-html="steps[step].instructions"></h4>
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
import { ref, computed, onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import AppSteps from '@/app/components/AppSteps.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'

onMounted(() => {
    const fileStore = useFileStore()
    fileStore.index()
})

const step = ref(0)

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
  fileStore.destroy(file)
}

const steps = [
  {
    name: 'brand',
    title: 'Brand Guide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload your brand usage guide document(s) here.',
    components: [
      {
        name: 'AssetIntakeUploader',
        group: 'brand',
      }
    ],
    todos: [
      {
        title: 'Format: PDF',
        formats: ['pdf'],
      }
    ]
  },
  {
    name: 'brand',
    title: 'Brand Do\'s and Don\'ts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'What Do\'s and Don\'ts should we know about for your brand?',
    components: [
      {
        name: 'AssetIntakeDoDont',
        group: 'brand',
      }
    ],
    todos: []
  },
  {
    name: 'logo',
    title: 'Logo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload your logo(s) here.',
    components: [
      {
        name: 'AssetIntakeUploader',
        group: 'logo',
      }
    ],
    todos: [
      {
        title: 'Format: SVG and EPS',
        formats: ['svg', 'eps'],
      }
    ]
  },
  {
    name: 'logo',
    title: 'Logo Do\'s and Don\'ts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'What Do\'s and Don\'ts should we know about for your logo?',
    components: [
      {
        name: 'AssetIntakeDoDont',
        group: 'logo',
      }
    ],
    todos: []
  },
  {
    name: 'desktop-fonts',
    title: 'Desktop Fonts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload your fonts for desktop usage.',
    components: [
      {
        name: 'AssetIntakeUploader',
        group: 'desktop-fonts',
      }
    ],
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload your fonts for web usage.',
    components: [
      {
        name: 'AssetIntakeUploader',
        group: 'web-fonts',
      }
    ],
    todos: [
      {
        title: 'Format: TTF, OTF, WOFF, WOFF2 or EOT',
        formats: ['ttf', 'otf', 'woff', 'woff2', 'eot'],
      }
    ]
  },
  {
    name: 'fonts',
    title: 'Font Do\'s and Don\'ts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'What Do\'s and Don\'ts should we know about for your fonts?',
    components: [
      {
        name: 'AssetIntakeDoDont',
        group: 'fonts',
      }
    ],
    todos: []
  },
  {
    name: 'photos',
    title: 'Photography',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload your photography.',
    components: [
      {
        name: 'AssetIntakeUploader',
        group: 'photos',
      }
    ],
    todos: [
      {
        title: 'Format: JPG, JPEG or PNG',
        formats: ['jpg', 'jpeg', 'png'],
      }
    ]
  },
  {
    name: 'photos',
    title: 'Photography Do\'s and Don\'ts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'What Do\'s and Don\'ts should we know about for your photography?',
    components: [
      {
        name: 'AssetIntakeDoDont',
        group: 'photos',
      }
    ],
    todos: []
  },
  {
    name: 'other',
    title: 'Other Media',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload other brand media such as patterns, icons or other graphics.',
    components: [
      {
        name: 'AssetIntakeUploader',
        group: 'other',
      }
    ],
    todos: []
  },
  {
    name: 'other',
    title: 'Other Media Do\'s and Don\'ts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'What Do\'s and Don\'ts should we know about for your other media?',
    components: [
      {
        name: 'AssetIntakeDoDont',
        group: 'other',
      }
    ],
    todos: []
  },
]
</script>

<style lang="scss" scoped>
.todo__checkbox {
  background-color: #fff !important;
}
</style>
