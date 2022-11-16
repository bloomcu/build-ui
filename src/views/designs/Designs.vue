<template>
  <LayoutDefault maxWidth="sm">
    <div class="container flex items-center justify-between margin-y-md">
      <h1 class="text-lg">Designs</h1>
      <button @click="designStore.toggleCreateModal()" class="btn btn--subtle">
        <IconPlus size="xs" class="color-primary"/>
        <span class="margin-left-xxs">New design</span>
      </button>
    </div>

    <div class="container max-width-sm margin-bottom-md">
      <div v-for="design in designStore.designs" :key="design.id" class="card card--shadow margin-bottom-sm">
        <div class="card-header">
          <div class="flex justify-between items-center margin-bottom-xs">
            <h3 class="text-md">{{ design.designer_name }}</h3>
            <p class="text-sm">Created {{ moment(design.created_at).fromNow() }}</p>
          </div>
          <p class="text-sm margin-bottom-xxs">Email: {{ design.designer_email }}</p>
        </div>
        
        <div class="card-footer flex justify-between items-center border-top margin-top-sm padding-top-sm">
          <div class="flex gap-xs">
            <ButtonCopyToClipboard :value="`?design=${design.uuid}&mode=view`" class="btn btn--sm btn--subtle width-100%">
              Viewer URL
            </ButtonCopyToClipboard>
            <ButtonCopyToClipboard :value="`?design=${design.uuid}&mode=edit`" class="btn btn--sm btn--subtle width-100%">
              Editor URL
            </ButtonCopyToClipboard>
          </div>
          <RouterLink :to="{ name: 'designsEdit', params: { design: design.uuid } }" class="btn btn--sm btn--subtle margin-left-auto">Edit</RouterLink>
        </div>
      </div>
    </div>
    
    <CreateDesignModal/>
  </LayoutDefault>
</template>

<script setup>
import moment from "moment"
import { onMounted } from 'vue'
import { useDesignStore } from '@/domain/designs/store/useDesignStore'

import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import CreateDesignModal from '@/views/designs/components/CreateDesignModal.vue'
import ButtonCopyToClipboard from '@/app/components/buttons/ButtonCopyToClipboard.vue'

const designStore = useDesignStore()

onMounted(() => {
    designStore.index()
})
</script>
