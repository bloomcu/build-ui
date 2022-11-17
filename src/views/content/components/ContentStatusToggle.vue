<template>
  <!-- TODO: Instead of radio inputs, just makes these <buttons? -->
  <div class="btns btns--radio inline-flex">
    <div 
      v-for="option in [
       {title: 'Needs review', slug: 'needs-review'},
       {title: 'Looks good', slug: 'looks-good'},
       {title: 'Not sure', slug: 'not-sure'},
      ]" 
      :key="option.slug"
    >
      <input 
        type="radio" 
        @click="updateStatus(id, option)"
        :checked="status && status.slug === option.slug"
        :id="`${id}-${option.slug}`"
      >
      <label class="btns__btn" :for="`${id}-${option.slug}`">{{ option.title }}</label>
    </div>
  </div>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'

const pageStore = usePageStore()

function updateStatus(id, status) {  
  if (pageStore.selected.includes(id)) {
    // Iterate selected pages and update
    // Optimize this so we only iterate over selected pages, not all pages
    // TODO: Abstract this away
    pageStore.pages.forEach((page) => {
      if (pageStore.selected.includes(page.id)) {
        page.status = status
      }
    })
    
    // Update all selected pages
    pageStore.update(pageStore.selected, {
      status: status.slug
    })
    
  } else {
    // Update single page
    let page = pageStore.pages.find(p => p.id === id)
        page.status = status
    
    pageStore.update([id], {
      status: status.slug
    })
  }
}

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  status: {
    type: Object,
  }
})
</script>
