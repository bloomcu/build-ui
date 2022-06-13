<template>
  <AppModal 
    size="sm"
    @closed="siteStore.toggleCreateModal" 
    :class="siteStore.createModalOpen ? 'modal--is-visible' : ''"
  >
  <form action="#" @submit.prevent="siteStore.store(newSite)">      
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="title">Title</label>
        <input 
          v-model="newSite.title" 
          required
          placeholder="Site title"
          class="form-control width-100%" 
          type="text" 
          name="title" 
        >
      </div>
      
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="url">URL</label>
        <input 
          v-model="newSite.url" 
          required
          placeholder="Site URL"
          class="form-control width-100%" 
          type="text" 
          name="url" 
        >
      </div>

      <div class="margin-top-md margin-bottom-sm">
        <button class="btn btn--primary btn--md width-100%">Create Site</button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
import AppModal from '@/app/components/AppModal.vue'
import { useSiteStore } from '@/domain/sites/store/useSiteStore'

const newSite = ref({
  title: 'The site title',
  url: 'The site URL'
})

const siteStore = useSiteStore()
</script>
