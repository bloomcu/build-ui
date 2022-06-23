<template>
  <AppModal 
    size="xxs"
    @closed="organizationStore.toggleCreateModal" 
    :class="organizationStore.createModalOpen ? 'modal--is-visible' : ''"
  >
  <h2 class="text-md margin-bottom-sm">Create organization</h2>
  
  <form action="#" @submit.prevent="create()">      
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="title">Title</label>
        <input 
          v-model="newOrganization.title" 
          required
          placeholder="Acme Credit Union"
          class="form-control width-100%" 
          type="text" 
          name="title" 
        >
      </div>

      <div class="margin-top-md margin-bottom-sm">
        <button class="btn btn--primary btn--md width-100%">Create</button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
import AppModal from '@/app/components/AppModal.vue'
import { useOrganizationStore } from '@/domain/organizations/store/useOrganizationStore'

const organizationStore = useOrganizationStore()

const newOrganization = ref({
  title: '',
})

function create() {
  organizationStore.store(newOrganization.value)
    .then(() => {
      organizationStore.toggleCreateModal()
      
      newOrganization.value = {
        title: '',
      }
    })
}
</script>
