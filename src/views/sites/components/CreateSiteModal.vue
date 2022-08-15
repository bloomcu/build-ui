<template>
  <AppModal 
    size="xxs"
    @closed="siteStore.toggleCreateModal" 
    :class="siteStore.createModalOpen ? 'modal--is-visible' : ''"
  >
  <h2 class="text-md margin-bottom-sm">Add site</h2>
  
  <form action="#" @submit.prevent="create()">      
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="title">Title</label>
        <input 
          v-model="newSite.title" 
          required
          placeholder="Primary Website"
          class="form-control width-100%" 
          type="text" 
          name="title" 
        >
      </div>
      
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="domain">Domain</label>
        <input 
          v-model="newSite.domain" 
          required
          placeholder="https://acmecu.com"
          class="form-control width-100%" 
          type="text" 
          name="domain" 
        >
      </div>

      <div class="margin-top-md margin-bottom-sm">
        <button type="submit" class="btn btn--primary btn--md width-100%">Add</button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
import { useSiteStore } from '@/domain/sites/store/useSiteStore'
import AppModal from '@/app/components/AppModal.vue'

const siteStore = useSiteStore()

const newSite = ref({
  title: '',
  url: '',
})

function create() {
  siteStore.store(newSite.value)
    .then(() => {
      siteStore.toggleCreateModal()
      
      newSite.value = {
        title: '',
        url: '',
      }
    })
}
</script>
