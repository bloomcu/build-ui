<template>
  <div>
    <div class="container max-width-lg flex items-center justify-between padding-y-sm">
      <h3>Organizations</h3>
      <RouterLink to="" class="btn btn--primary">Create organization</RouterLink>
    </div>

    <div class="container max-width-lg padding-y-sm">
      <div class="grid gap-sm">        
        <div v-for="(organization, index) in organizations" :key="index" class="col-3">
          <AppCard v-bind="organization"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrganizationStore } from '@/domain/organizations/store/useOrganizationStore'
import AppCard from '@/app/components/AppCard.vue'

const organizationStore = useOrganizationStore()

const organizations = [
  {
    title: 'TFCU',
    subtitle: 'This is the description',
  },
  {
    title: 'SoCal',
    subtitle: 'This is the description',
  },
  {
    title: 'San Antonio',
    subtitle: 'This is the description',
  },
]

onMounted(() => {
    organizationStore.index()
})
</script>
