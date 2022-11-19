<template>
  <LayoutDefault v-if="crawlStore.crawl" maxWidth="md">
    <div class="container padding-y-md">
      <div class="flex items-center justify-between margin-bottom-md">
        <RouterLink :to="{name: 'crawls'}" class="btn btn--subtle">
          <IconArrowLeft size="xs" class="color-primary"/>
          <span class="margin-left-xxs">Back</span>
        </RouterLink>
        
        <button v-if="canAbort(crawlStore.crawl.status)" @click.stop="abort(crawl.id)"  class="btn btn--subtle">
          <IconCancel size="xs" class="color-primary"/>
          <span class="margin-left-xxs">Cancel</span>
        </button>
        
        <button v-if="crawlStore.crawl.status == 'SUCCEEDED' && !crawlStore.isImportingResults" @click.stop="importResults(crawlStore.crawl.id)" class="btn btn--primary">
          <IconImport size="xs" class="color-white"/>
          <span class="margin-left-xxs">Import results</span>
        </button>
        
        <button v-if="crawlStore.isImportingResults" class="btn btn--disabled">
          <AppCircleLoader/>
          <span class="margin-left-xxs">Importing</span>
        </button>
      </div>
      
      <!-- Crawl info -->
      <div class="margin-bottom-md">
        <CrawlsSkeletonLoader v-if="crawlStore.isLoading"/>
        
        <div v-else>
          <p class="text-sm margin-bottom-xs">Created {{ moment(crawlStore.crawl.created_at).fromNow() }}</p>
          <h1 class="text-lg margin-bottom-sm">{{ crawlStore.crawl.url }}</h1>
          <!-- TODO: Create a CrawlStatus.vue component that wraps up all this logic -->
          <AppChip :label="crawlStore.crawl.status ? crawlStore.crawl.status : 'STARTING'" :color="getStatusColor(crawlStore.crawl.status)"/>
        </div>
      </div>
      
      <!-- Crawl results -->
      <CrawlsSkeletonLoader v-if="crawlStore.isLoadingResults"/>
      
      <div v-else class="card card--shadow">
        <div class="grid margin-bottom-sm">
          <div v-if="crawlStore.crawl.total" class="col">
            <p class="text-sm">Pages crawled</p>
            <p class="text-lg text-bold">{{ crawlStore.crawl.total }}</p>
          </div>
          <div class="col border-left padding-left-sm">
            <p class="text-sm">Pending</p>
            <p class="text-lg text-bold">{{ crawlStore.crawl.pending }}</p>
          </div>
        </div>
        
        <div class="border-top padding-top-sm">
          <div v-for="(item, index) in crawlStore.results" :key="index" class="grid items-center text-sm padding-y-xs border-bottom">
            <div class="col-11">
              <p class="text-bold margin-bottom-xxxxs">{{ item.title }}</p>
              <a :href="item.url" target="_blank" class="text-xs color-contrast-low">{{ item.url }}</a>
            </div>
            
            <div class="col-1 border-left padding-left-sm">
              <p :class="item.http_status == '404' ? 'color-error' : null">{{ item.http_status }}</p>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>

<script setup>
import moment from "moment"
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCrawlStore } from '@/domain/crawls/store/useCrawlStore'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import IconArrowLeft from '@/app/components/icons/IconArrowLeft.vue'
import IconCancel from '@/app/components/icons/IconCancel.vue'
import IconImport from '@/app/components/icons/IconImport.vue'
import AppCircleLoader from '@/app/components/loaders/AppCircleLoader.vue'
import AppChip from '@/app/components/AppChip.vue'
import AppInput from '@/app/components/forms/AppInput.vue'
import CrawlsSkeletonLoader from '@/views/crawls/loaders/CrawlsSkeletonLoader.vue'

const route = useRoute()
const router = useRouter()
const crawlStore = useCrawlStore()

// TODO: Move to composable
function getStatusColor(status) {
  const statuses = {
    'READY': 'outline',
    'RUNNING': 'outline',
    'SUCCEEDED': 'success',
    'FAILED': 'error',
    'TIMING-OUT': 'warning',
    'TIMED-OUT': 'warning',
    'ABORTING': 'error',
    'ABORTED': 'error',
  }
  
  return status ? statuses[status] : 'outline'
}

// TODO: Move to composable
function canAbort(status) {
  const abortableStatuses = ['READY', 'RUNNING', 'TIMING-OUT']
  return abortableStatuses.includes(status)
}

function abort(id) {
  // Todo: Create an "Abort" endpoint. Use destroy for soft-deleting
  crawlStore.destroy(id)
    .then(() => {
      crawlStore.show(id)
    })
}

function importResults(id) {
  crawlStore.importResults(id)
    .then(() => {
      router.push({ name: 'content', params: { organization: route.params.organization}})
    })
}

onMounted(() => {
  crawlStore.show(route.params.crawl)
    .then(() => {
      crawlStore.showResults(route.params.crawl)
    })
})
</script>
