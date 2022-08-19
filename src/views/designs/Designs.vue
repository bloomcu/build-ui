<template>
  <LayoutDefault>
    <div class="container max-width-sm flex items-center justify-between margin-y-md">
      <h1 class="text-lg">Designs</h1>
      <button @click="siteStore.toggleCreateModal" class="btn btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
        <span class="margin-left-xxs">Add design</span>
      </button>
    </div>

    <div class="container max-width-sm margin-bottom-md">
      <div v-for="design in designStore.designs" :key="design.id" class="card card--shadow margin-bottom-sm">
        <div class="card-header">
          <!-- <p class="text-xs color-primary text-uppercase margin-bottom-xs">{{ site.title }}</p> -->
          <h2 class="text-md margin-bottom-sm">{{ design.title }}</h2>
          <p class="text-sm margin-bottom-xs">
            {{ moment(design.created_at).fromNow() }}
          </p>
        </div>
        
        <div class="card-footer flex gap-xs border-top margin-top-sm padding-top-sm">
          <a href="" class="btn btn--sm btn--primary">View</a>
          <!-- <RouterLink :to="{ name: 'designs-edit', params: { design: design.id } }" class="btn btn--sm btn--subtle margin-left-auto">Edit</RouterLink> -->
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moment from "moment"
import { useDesignStore } from '@/domain/designs/store/useDesignStore'
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'

const designStore = useDesignStore()

onMounted(() => {
    designStore.index()
})
</script>
