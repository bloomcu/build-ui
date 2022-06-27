<template>  
  <div class="flex margin-auto height-100vh">
    <!-- Left -->
    <div class="flex flex-column justify-between bg-primary bg-opacity-5% border-right padding-top-xs" style="flex: 1 0 25%; position: sticky; top: 0; left: 0;">
      <div class="_flex _contents padding-lg">
        <AppSteps/>
      </div>
      
      <div class="_color-white padding-x-lg">
        <h1 class="_color-white margin-bottom-sm">{{ steps[step].title }}</h1>
        <p v-if="steps[step].description" class="margin-bottom-md" v-html="steps[step].description"></p>
        <!-- <AppTodoList :todos="steps[step].todos" /> -->
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
      <!-- Task -->
      <div class="padding-x-xl padding-top-lg">
        <div class="flex-grow padding-bottom-xxl">
          <h4 v-if="steps[step].instructions" class="margin-bottom-md" v-html="steps[step].instructions"></h4>
          <component 
            v-for="(component, index) in steps[step].components"
            :is="component.name" 
            v-bind="component"
          />
          <!-- <FileUploader folder="bloomcu" :group="steps[step].name"/>
          <FileList @destroyed="destroyFile" :files="fileStore.filterByGroup(steps[step].name)"/> -->
          <!-- <div class="grid gap-xl">
            <div class="col-6">
              <AppEntryRepeaterEmpty/>
            </div>
            <div class="col-6">
              <AppEntryRepeater/>
            </div>
          </div> -->
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AssetIntakeUploader from '@/views/assets/components/AssetIntakeUploader.vue'
import AssetIntakeDoDont from '@/views/assets/components/AssetIntakeDoDont.vue'
// import FileUploader from '@/domain/files/components/FileUploader.vue'
// import FileList from '@/domain/files/components/FileList.vue'

export default defineComponent({
    components: {
      AssetIntakeUploader,
      AssetIntakeDoDont,
      // FileUploader,
      // FileList,
    }
})    
</script>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import AppSteps from '@/app/components/AppSteps.vue'

// import AppEntryRepeaterEmpty from '@/app/components/AppEntryRepeaterEmpty.vue'
// import AppEntryRepeater from '@/app/components/AppEntryRepeater.vue'
// import AppTodoList from '@/app/components/AppTodoList.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'
// import AssetIntakeUploader from '@/views/assets/components/AssetIntakeUploader.vue'

// const AssetIntakeUploader = defineAsyncComponent(() => import('@/views/assets/components/AssetIntakeUploader.vue'))

// const dynamicComponents = {
//   uploader: AssetIntakeUploader,
// };
// const defaultComponent = 'uploader'
// const dynamicComponent = computed(() => dynamicComponents[route.meta.layout] || defaultLayout])
// const dynamicComponent = computed(() => AssetIntakeUploader)

// const AssetIntakeUploader = defineAsyncComponent(() => import('@/views/assets/components/AssetIntakeUploader.vue'))
// const assetIntakeUploader = shallowRef(AssetIntakeUploader);
    
const fileStore = useFileStore()

onMounted(() => {
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
        folder: 'bloomcu',
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
      }
    ],
    todos: []
  },
  {
    name: 'logos',
    title: 'Logo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'Upload your logo(s) here.',
    components: [
      {
        name: 'AssetIntakeUploader',
        folder: 'bloomcu',
        group: 'logos',
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
    name: 'logos',
    title: 'Logo Do\'s and Don\'ts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis odio tempus lectus',
    instructions: 'What Do\'s and Don\'ts should we know about for your logo?',
    components: [
      {
        name: 'AssetIntakeDoDont',
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
        folder: 'bloomcu',
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
        folder: 'bloomcu',
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
        folder: 'bloomcu',
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
        folder: 'bloomcu',
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
