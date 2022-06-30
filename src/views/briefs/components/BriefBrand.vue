<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 3</p>
    <h1>Review the brand guide</h1>
    <p>Review the brand guide so your style tile fits the credit union’s brand.</p>
    
    <h3 class="padding-y-xxxs">Brand Guide</h3>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList :files="fileStore.filterByGroup('brand')" :deleteable="false"/>
      </div>
      <div class="col-6">
        <p><strong>Do's:</strong></p>
        <p v-for="item in organizationCommentsStore.filterByGroup('brand-do')" :key="item.id">
          <span class="margin-right-xxxs">✅</span> {{ item.body }}
        </p>
        <p><strong>Don'ts:</strong></p>
        <p v-for="item in organizationCommentsStore.filterByGroup('brand-dont')" :key="item.id">
          <span class="margin-right-xxxs">❌</span> {{ item.body }}
        </p>
      </div>
    </div>
    
    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle(2)" class="btn btn--subtle">Back</button>
      <button @click="toggle(4)" class="btn btn--primary">Next</button>
    </div>
    
    <FileModal/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Components
import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'

// Stores
import { useFileStore } from '@/domain/files/store/useFileStore'
import { useOrganizationCommentsStore } from '@/domain/organizations/store/useOrganizationCommentsStore'
const fileStore = useFileStore()
const organizationCommentsStore = useOrganizationCommentsStore()

// Composables
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()

onMounted(() => {
  fileStore.index()
  organizationCommentsStore.index()
})
</script>
