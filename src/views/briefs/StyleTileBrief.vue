<script setup>
import { onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'

const fileStore = useFileStore()

onMounted(() => {
    fileStore.index()
})
</script>

<template>
  <div>
    <div class="container max-width-lg padding-y-sm">
      <h3>Style Tile Brief</h3>
    </div>

    <div class="container max-width-lg padding-y-sm">
      <div class="grid gap-sm margin-bottom-lg padding-y-sm">
        <div class="col-4 text-component padding-right-md">
          <h4>Step 1 - Review the brand</h4>
          <p class="text-sm">You can tell when something is off-brand, right? The style tiles you design must fit the credit union’s brand, so please review the details below to become familiar with the brand before you start designing.</p>
          <button type="button" name="button" class="btn btn--primary">Download All Assets</button>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('brand')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Logo</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('logo')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Fonts</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('font')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Photography</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('photo')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Other Media</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('other')"/>
        </div>
      </div>
    </div>

    <!-- <FileModal/> -->
  </div>
</template>
