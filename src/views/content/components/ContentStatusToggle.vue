<template>
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
  props.status = status
  
  // Add to array if not present. Do not remove if already present.
  // TODO: Abstract this away
  let index = pageStore.selected.indexOf(id)
      index === -1 ? pageStore.selected.push(id) : null
      
  // Iterate selected pages and update 
  // TODO: Abstract this away
  pageStore.pages.forEach((page) => {
    if (pageStore.selected.includes(page.id)) {
      page.status = status
    }
  })
  
  pageStore.update(pageStore.selected, {
    status: status.slug
  })
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
