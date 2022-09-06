<template>
  <LayoutDefault>
    <div class="container max-width-sm flex items-center justify-between margin-y-md">
      <h1 class="text-lg">Designs</h1>
      <button @click="designStore.toggleCreateModal()" class="btn btn--subtle">
        <IconPlus size="xxs" class="color-primary"/>
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
            <button @click.stop.prevent="copyToClipboard(`?design=${design.uuid}&mode=view`), copied = `${design.uuid}-view`" class="btn btn--sm btn--primary">
              {{ copied === `${design.uuid}-view` ? 'Copied!' : 'Viewer URL' }}
            </button>
            <button @click.stop.prevent="copyToClipboard(`?design=${design.uuid}&mode=edit`), copied = `${design.uuid}-edit`" class="btn btn--sm btn--primary">
              {{ copied === `${design.uuid}-edit` ? 'Copied!' : 'Editor URL' }}
            </button>
          </div>
          <RouterLink :to="{ name: 'designsEdit', params: { design: design.uuid } }" class="btn btn--sm btn--subtle margin-left-auto">Edit</RouterLink>
        </div>
      </div>
    </div>
    
    <CreateDesignModal/>
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moment from "moment"
import { useDesignStore } from '@/domain/designs/store/useDesignStore'
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import CreateDesignModal from '@/views/designs/components/CreateDesignModal.vue'

const designStore = useDesignStore()

const copied = ref('')

// TODO: Make this a composable
// Ref: https://codepen.io/PJCHENder/pen/jamJpj?editors=1010
const copyToClipboard = (value) => {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  
  // alert("Copied the text: " + tempInput.value);
}

onMounted(() => {
    designStore.index()
})
</script>
