<template>
  <div>
    <div class="container max-width-sm flex items-center justify-between padding-y-sm">
      <h1 class="text-lg">Sites</h1>
      <RouterLink to="" class="btn btn--primary">Add site</RouterLink>
    </div>

    <div class="container max-width-sm padding-y-sm">
      <div class="card text-component padding-md margin-bottom-sm">
        <h2 class="text-md">redwoodcu.com</h2>
        <p class="text-sm color-success">Crawl in progress</p>
        <AppProgressBar progress="40"/>
        
        <div class="flex items-center justify-between margin-y-sm">
          <span class="text-sm text-bold">Crawling website</span>
          <IconCheck class="color-success" style="width: 26px; height: 26px;"/>
          <!-- <AppCircleLoader/> -->
        </div>
        <div class="flex items-center justify-between margin-bottom-sm">
          <span class="text-sm text-bold">Classifying content</span>
          <AppCircleLoader/>
        </div>
        <div class="flex items-center justify-between margin-bottom-sm">
          <span class="text-sm text-bold color-contrast-lower">Archiving junk</span>
          <!-- <AppCircleLoader/> -->
        </div>
      </div>
      
      <div class="card text-component padding-md">
        <h2 class="text-md">redwoodcu.com</h2>
        <p class="text-sm">Last crawl: Yesterday</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSiteStore } from '@/domain/sites/store/useSiteStore'

import AppCard from '@/app/components/AppCard.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'
import AppCircleLoader from '@/app/components/AppCircleLoader.vue'
import IconCheck from '@/app/components/icons/IconCheck.vue'

const siteStore = useSiteStore()

const sites = [
  {
    title: 'redwoodcu.com',
    // subtitle: 'This is the description',
  },
  {
    title: 'blog.redwoodcu.com',
    // subtitle: 'This is the description',
  },
]

onMounted(() => {
    siteStore.index()
})
</script>
