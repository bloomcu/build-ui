<template>
  <div>
    <div class="flex justify-between padding-sm border-bottom">
      <span class="text-sm">Style Tile Brief</span>
    </div>
    
    <div class="flex container max-width-xxl">
      <aside class="position-relative z-index-1 width-100% border-right max-width-xxxxs padding-y-sm padding-x-md">
        <AppNestedMenu :items="steps"/>
      </aside>
      
      <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
        <div class="text-component">
          <component :is="toggled"/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import BriefIntro from '@/views/briefs/components/BriefIntro.vue'
import BriefSketch from '@/views/briefs/components/BriefSketch.vue'
import BriefVideo from '@/views/briefs/components/BriefVideo.vue'
import BriefBrand from '@/views/briefs/components/BriefBrand.vue'
import BriefAssets from '@/views/briefs/components/BriefAssets.vue'
import BriefCreate from '@/views/briefs/components/BriefCreate.vue'
import BriefMoreInfo from '@/views/briefs/components/BriefMoreInfo.vue'

export default defineComponent({
    components: {
      BriefIntro,
      BriefSketch,
      BriefVideo,
      BriefBrand,
      BriefAssets,
      BriefCreate,
      BriefMoreInfo,
    }
})    
</script>

<script setup>
import { onMounted } from 'vue'

// Components
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'

// Composables
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()

onMounted(() => {
    toggle(steps[0].slug)
})

const steps = [
  {
    title: 'Intro',
    slug: 'BriefIntro',
  },
  {
    title: 'Step 1 - Sketch',
    slug: 'BriefSketch',
  },
  {
    title: 'Step 2 - Video',
    slug: 'BriefVideo',
  },
  {
    title: 'Step 3 - Brand',
    slug: 'BriefBrand',
  },
  {
    title: 'Step 4 - Assets',
    slug: 'BriefAssets',
  },
  {
    title: 'Step 5 - Create',
    slug: 'BriefCreate',
  },
  {
    title: 'More info',
    slug: 'BriefMoreInfo',
  },
]

// const steps = [
//   {
//     slug: 'intro', 
//     title: 'Intro',
//     component: 'BriefIntro',
//   },
//   {
//     slug: 'step-1', 
//     title: 'Step 1 - Sketch',
//     component: 'BriefSketch',
//   },
//   {
//     slug: 'step-2', 
//     title: 'Step 2 - Video',
//     component: 'BriefVideo',
//   },
//   {
//     slug: 'step-3', 
//     title: 'Step 3 - Brand',
//     component: 'BriefBrand',
//   },
//   {
//     slug: 'step-4', 
//     title: 'Step 4 - Assets',
//     component: 'BriefAssets',
//   },
//   {
//     slug: 'step-5', 
//     title: 'Step 5 - Create',
//     component: 'BriefCreate',
//   },
//   {
//     slug: 'more-info', 
//     title: 'More info',
//     component: 'BriefMoreInfo',
//   },
// ]
</script>
