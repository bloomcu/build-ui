<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 4</p>
    <h1>Download assets</h1>
    <p>Download the credit union's brand assets.</p>

    <!-- Logo -->
    <h3 class="padding-top-xxxs">Logo</h3>
    <hr>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList 
          :files="fileStore.filterByGroup('logo')" 
          :deleteable="false"
          @selected="openModal"
        />
      </div>
      <div class="col-6">
        <div v-if="organizationCommentsStore.filterByGroup('logo-do').length">
          <p><strong>Do's:</strong></p>
          <p v-for="item in organizationCommentsStore.filterByGroup('logo-do')" :key="item.id">
            <span class="margin-right-xxxs">✅</span> {{ item.body }}
          </p>
        </div>
        <div v-if="organizationCommentsStore.filterByGroup('logo-dont').length">
          <p class="padding-top-sm"><strong>Don'ts:</strong></p>
          <p v-for="item in organizationCommentsStore.filterByGroup('logo-dont')" :key="item.id">
            <span class="margin-right-xxxs">❌</span> {{ item.body }}
          </p>
        </div>
      </div>
    </div>

    <!-- Fonts -->
    <h3 class="padding-top-xxxs">Desktop Fonts</h3>
    <hr>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList 
          :files="fileStore.filterByGroup('desktop-fonts')" 
          :deleteable="false"
          @selected="openModal"
        />
      </div>
      <div class="col-6">
        <div v-if="organizationCommentsStore.filterByGroup('fonts-do').length" >
          <p><strong>Do's:</strong></p>
          <p v-for="item in organizationCommentsStore.filterByGroup('fonts-do')" :key="item.id">
            <span class="margin-right-xxxs">✅</span> {{ item.body }}
          </p>
        </div>
        <div v-if="organizationCommentsStore.filterByGroup('fonts-dont').length">
          <p class="padding-top-sm"><strong>Don'ts:</strong></p>
          <p v-for="item in organizationCommentsStore.filterByGroup('fonts-dont')" :key="item.id">
            <span class="margin-right-xxxs">❌</span> {{ item.body }}
          </p>
        </div>
      </div>
    </div>

    <!-- Photography -->
    <h3 class="padding-top-xxxs">Photography</h3>
    <hr>
    <div class="grid gap-md">
      <div class="col-6">
        <FileList 
          :files="fileStore.filterByGroup('photos')" 
          :deleteable="false"
          @selected="openModal"
        />
      </div>
      <div class="col-6">
        <div v-if="organizationCommentsStore.filterByGroup('photos-do').length">
          <p><strong>Do's:</strong></p>
          <p v-for="item in organizationCommentsStore.filterByGroup('photos-do')" :key="item.id">
            <span class="margin-right-xxxs">✅</span> {{ item.body }}
          </p>
        </div>
        <div v-if="organizationCommentsStore.filterByGroup('photos-dont').length">
          <p class="padding-top-sm"><strong>Don'ts:</strong></p>
          <p v-for="item in organizationCommentsStore.filterByGroup('photos-dont')" :key="item.id">
            <span class="margin-right-xxxs">❌</span> {{ item.body }}
          </p>
        </div>
      </div>
    </div>

    <!-- Other -->
    <div v-if="fileStore.filterByGroup('other').length">
      <h3 class="padding-top-xxxs">Other</h3>
      <hr>
      <div class="grid gap-md">
        <div class="col-6">
          <FileList 
            :files="fileStore.filterByGroup('other')" 
            :deleteable="false"
            @selected="openModal"
          />
        </div>
        <div class="col-6">
          <div v-if="organizationCommentsStore.filterByGroup('other-do').length">
            <p><strong>Do's:</strong></p>
            <p v-for="item in organizationCommentsStore.filterByGroup('other-do')" :key="item.id">
              <span class="margin-right-xxxs">✅</span> {{ item.body }}
            </p>
          </div>
          <div v-if="organizationCommentsStore.filterByGroup('other-dont').length">
            <p class="padding-top-sm"><strong>Don'ts:</strong></p>
            <p v-for="item in organizationCommentsStore.filterByGroup('other-dont')" :key="item.id">
              <span class="margin-right-xxxs">❌</span> {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle(3)" class="btn btn--subtle">Back</button>
      <button @click="toggle(5)" class="btn btn--primary">Next</button>
    </div>
    
    <FileModal @closed="closeModal" :file="modalData" :deleteable="false" :class="modalData ? 'modal--is-visible' : ''"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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

// Extract to a view store
let modalData = ref(null)

function openModal(file) {
  modalData.value = file
}
function closeModal() {
  modalData.value = null
}

onMounted(() => {
  fileStore.index()
  organizationCommentsStore.index()
})
</script>
