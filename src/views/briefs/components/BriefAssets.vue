<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 4</p>
    <h1>Download assets</h1>
    <p>Download the credit union's brand assets.</p>

    <!-- Logo -->
    <h3 class="padding-y-xxxs">Logo</h3>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList :files="fileStore.filterByGroup('logos')"/>
      </div>
      <div class="col-6">
        <p><strong>Do's:</strong></p>
        <p v-for="item in organizationMetaStore.filterByKey('logo-do')" :key="item.id">
          <span class="margin-right-xxxs">✅</span> {{ item.value }}
        </p>
        <p><strong>Don'ts:</strong></p>
        <p v-for="item in organizationMetaStore.filterByKey('logo-dont')" :key="item.id">
          <span class="margin-right-xxxs">❌</span> {{ item.value }}
        </p>
      </div>
    </div>

    <!-- Fonts -->
    <h3 class="padding-y-xxxs">Fonts</h3>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList :files="fileStore.filterByGroup('desktop-fonts')"/>
      </div>
      <div class="col-6">
        <p><strong>Do's:</strong></p>
        <p v-for="item in organizationMetaStore.filterByKey('fonts-do')" :key="item.id">
          <span class="margin-right-xxxs">✅</span> {{ item.value }}
        </p>
        <p><strong>Don'ts:</strong></p>
        <p v-for="item in organizationMetaStore.filterByKey('fonts-dont')" :key="item.id">
          <span class="margin-right-xxxs">❌</span> {{ item.value }}
        </p>
      </div>
    </div>

    <!-- Photography -->
    <h3 class="padding-y-xxxs">Photography</h3>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList :files="fileStore.filterByGroup('photos')"/>
      </div>
      <div class="col-6">
        <p><strong>Do's:</strong></p>
        <p v-for="item in organizationMetaStore.filterByKey('photos-do')" :key="item.id">
          <span class="margin-right-xxxs">✅</span> {{ item.value }}
        </p>
        <p><strong>Don'ts:</strong></p>
        <p v-for="item in organizationMetaStore.filterByKey('photos-dont')" :key="item.id">
          <span class="margin-right-xxxs">❌</span> {{ item.value }}
        </p>
      </div>
    </div>

    <!-- Other -->
    <div v-if="fileStore.filterByGroup('other').length" >
      <h3 class="padding-y-xxxs">Other</h3>
      <div class="grid gap-md">
        <div class="col-6">
          <FileList :files="fileStore.filterByGroup('other')"/>
        </div>
        <div class="col-6">
          <p><strong>Do's:</strong></p>
          <p v-for="item in organizationMetaStore.filterByKey('other-do')" :key="item.id">
            <span class="margin-right-xxxs">✅</span> {{ item.value }}
          </p>
          <p><strong>Don'ts:</strong></p>
          <p v-for="item in organizationMetaStore.filterByKey('other-dont')" :key="item.id">
            <span class="margin-right-xxxs">❌</span> {{ item.value }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle(3)" class="btn btn--subtle">Back</button>
      <button @click="toggle(5)" class="btn btn--primary">Next</button>
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
import { useOrganizationMetaStore } from '@/domain/organizations/store/useOrganizationMetaStore'
const fileStore = useFileStore()
const organizationMetaStore = useOrganizationMetaStore()

// Composables
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()

onMounted(() => {
  fileStore.index()
  organizationMetaStore.index()
})
</script>
