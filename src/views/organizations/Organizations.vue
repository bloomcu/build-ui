<template>
  <div>
    <div class="container max-width-lg flex items-center justify-between padding-y-sm">
      <h1 class="text-lg">Organizations</h1>
      <button @click="organizationStore.toggleCreateModal" class="btn btn--sm btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
        <span class="margin-left-xxs">Create organization</span>
      </button>
    </div>

    <div class="container max-width-lg padding-y-sm">
      <div class="grid gap-sm">        
        <div v-for="(organization, index) in organizationStore.organizations" :key="index" class="col-3">
          <AppCard v-bind="organization"/>
        </div>
      </div>
    </div>
    
    <CreateOrganizationModal/>
  </div>
</template>

<script setup>
// TODO
// TODO: Organizations index should derive from the user.
// TODO
import { onMounted } from 'vue'
import { useOrganizationStore } from '@/domain/organizations/store/useOrganizationStore'

import AppCard from '@/app/components/AppCard.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import CreateOrganizationModal from '@/views/organizations/components/CreateOrganizationModal.vue'

const organizationStore = useOrganizationStore()

onMounted(() => {
    organizationStore.index()
})
</script>
