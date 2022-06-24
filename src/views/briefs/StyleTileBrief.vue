<template>
  <LayoutDefault>
    <div class="padding-y-md">
      <h3>Style Tile Brief</h3>
    </div>

    <div class="padding-y-md">
      <div class="grid gap-sm margin-bottom-lg padding-y-sm">
        <div class="col-4 text-component padding-right-md">
          <h4>Step 1 - Review the brand</h4>
          <p class="text-sm">You can tell when something is off-brand, right? The style tiles you design must fit the credit union’s brand, so please review the details below to become familiar with the brand before you start designing.</p>
          <button type="button" name="button" class="btn btn--primary">Download All Assets</button>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('guides')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Logo</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('logos')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Desktop Fonts</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('desktop-fonts')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Web Fonts</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('web-fonts')"/>
        </div>
      </div>
      
      <div class="grid gap-sm margin-bottom-lg">
        <div class="col-4 text-component padding-right-md">
          <h4 class="text-bold padding-top-xs border-top border-contrast-lower">Photography</h4>
        </div>
        <div class="col-8 padding-sm" style="height: fit-content; background-color: #f1f0ef; border-radius: 20px;">
          <FileList :files="fileStore.filterByGroup('photos')"/>
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
  </LayoutDefault>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import FileList from '@/domain/files/components/FileList.vue'
import FileModal from '@/domain/files/components/file-modal/FileModal.vue'

const fileStore = useFileStore()

onMounted(() => {
    fileStore.index()
})
</script>
