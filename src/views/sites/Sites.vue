<template>
  <LayoutDefault>
    <div class="container max-width-sm flex items-center justify-between padding-y-md">
      <h1 class="text-lg">Sites</h1>
      <button @click="siteStore.toggleCreateModal" class="btn btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
        <span class="margin-left-xxs">Add site</span>
      </button>
    </div>

    <div class="container max-width-sm padding-y-md">
      <div v-for="site in siteStore.sites" :key="site.id" class="app-card padding-md margin-bottom-sm">
        <p class="text-xs color-contrast-low text-uppercase margin-bottom-xs">{{ site.title }}</p>
        <h2 class="text-md margin-bottom-sm">{{ site.host }}</h2>
        <p v-if="site.last_crawl" class="text-sm margin-bottom-xs">
          {{ moment(site.last_crawl.created_at).fromNow() }}
        </p>
      </div>
      
      <div class="app-card padding-md">
        <p class="text-xs color-contrast-low text-uppercase margin-bottom-xs">Blog</p>
        <h2 class="text-md margin-bottom-sm">blog.redwoodcu.com</h2>
        <p class="text-sm color-success margin-bottom-xs">Crawl in progress</p>
        <AppProgressBar progress="40"/>
        
        <div class="flex items-center justify-between margin-y-sm">
          <span class="text-sm text-bold">Crawling website</span>
          <IconCheck class="color-success" style="width: 26px; height: 26px;"/>
          <AppCircleLoader/>
        </div>
        <div class="flex items-center justify-between margin-bottom-sm">
          <span class="text-sm text-bold">Classifying content</span>
          <AppCircleLoader/>
        </div>
        <div class="flex items-center justify-between margin-bottom-sm">
          <span class="text-sm text-bold color-contrast-lower">Archiving junk</span>
          <AppCircleLoader/>
        </div>
      </div>
      
    </div>

    <CreateSiteModal/>
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moment from "moment"
import { useSiteStore } from '@/domain/sites/store/useSiteStore'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'
import AppCircleLoader from '@/app/components/AppCircleLoader.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconCheck from '@/app/components/icons/IconCheck.vue'
import CreateSiteModal from '@/views/sites/components/CreateSiteModal.vue'

const siteStore = useSiteStore()

const sites = [
  {
    title: 'redwoodcu.com',
  },
  {
    title: 'blog.redwoodcu.com',
  },
]

onMounted(() => {
    siteStore.index()
})
</script>
