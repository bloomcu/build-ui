<template>
  <LayoutDefault>
    <div class="container max-width-sm flex items-center justify-between margin-y-md">
      <h1 class="text-lg">Sites</h1>
      <button @click="siteStore.toggleCreateModal" class="btn btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
        <span class="margin-left-xxs">Add site</span>
      </button>
    </div>

    <div class="container max-width-sm margin-bottom-md">
      <div v-for="site in siteStore.sites" :key="site.id" class="card card--shadow margin-bottom-sm">
        <div class="card-header">
          <p class="text-xs color-primary text-uppercase margin-bottom-xs">{{ site.title }}</p>
          <h2 class="text-md margin-bottom-sm">{{ site.domain }}</h2>
          <p class="text-sm margin-bottom-xs">Crawled yesterday</p>
        </div>
        
        <div class="card-footer flex gap-xs border-top margin-top-sm padding-top-sm">
          <RouterLink :to="{ name: 'sitesLaunch', params: { site: site.id } }" class="btn btn--sm btn--primary">Launch</RouterLink>
          <RouterLink :to="{ name: 'sitesEdit', params: { site: site.id } }" class="btn btn--sm btn--subtle margin-left-auto">Edit</RouterLink>
        </div>
      </div>
      
      <!-- <div class="card padding-md">
        <p class="text-xs color-contrast-low text-uppercase margin-bottom-xs">Blog</p>
        <h2 class="text-md margin-bottom-sm">blog.redwoodcu.com</h2>
        
        <div class="flex items-center justify-between margin-y-sm">
          <span class="text-sm text-bold">Crawling website</span>
          <IconCheck class="color-success" style="width: 26px; height: 26px;"/>
        </div>
        <div class="flex items-center justify-between margin-bottom-sm">
          <span class="text-sm text-bold">Classifying content</span>
          <AppCircleLoader/>
        </div>
        <div class="flex items-center justify-between margin-bottom-sm">
          <span class="text-sm text-bold color-contrast-low">Archiving junk</span>
        </div>
      </div> -->
    </div>

    <CreateSiteModal/>
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSiteStore } from '@/domain/sites/store/useSiteStore'
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppProgressBar from '@/app/components/AppProgressBar.vue'
import AppCircleLoader from '@/app/components/loaders/AppCircleLoader.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconCheck from '@/app/components/icons/IconCheck.vue'
import CreateSiteModal from '@/views/sites/components/CreateSiteModal.vue'

const siteStore = useSiteStore()

onMounted(() => {
    siteStore.index()
})
</script>
