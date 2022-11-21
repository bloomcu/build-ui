<template>
  <div>
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
      
      <table class="table table--expanded position-relative z-index-1 width-100% text-unit-em text-sm">
        <thead class="table__header">
          <tr class="table__row">
            <th class="table__cell text-left" scope="col">Page</th>
            <th class="table__cell text-left" scope="col">Status</th>
            <th class="table__cell text-left" scope="col">Wordcount</th>
            <th class="table__cell text-left" scope="col">Redirected</th>
          </tr>
        </thead>
        
        <tbody class="table__body">
          <tr v-for="(item, index) in crawlStore.results" :key="index" class="table__row">
            <td class="table__cell" role="cell">
              <p class="text-bold margin-bottom-xxxxs">{{ item.title }}</p>
              <a :href="item.url" target="_blank" class="text-xs color-contrast-low">{{ item.url }}</a>
            </td>

            <td class="table__cell" role="cell">
              <p :class="item.http_status == '404' ? 'color-error' : null">{{ item.http_status }}</p>
            </td>

            <td class="table__cell text-left" role="cell">
              <p>{{ item.wordcount }}</p>
            </td>
            
            <td class="table__cell text-left" role="cell">
              <p :class="item.redirected ? 'color-error' : null">{{ item.redirected ? 'Yes' : 'No' }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCrawlStore } from '@/domain/crawls/store/useCrawlStore'
import CrawlsSkeletonLoader from '@/views/crawls/loaders/CrawlsSkeletonLoader.vue'

const route = useRoute()
const crawlStore = useCrawlStore()

onMounted(() => {
  crawlStore.showResults(route.params.crawl)
})
</script>
