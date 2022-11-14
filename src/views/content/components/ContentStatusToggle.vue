<template>
  <div class="btns btns--radio inline-flex">
    <div 
      v-for="(option, index) in [
       {title: 'Needs review', slug: 'needs-review'},
       {title: 'Looks good', slug: 'looks-good'},
       {title: 'Not sure', slug: 'not-sure'},
      ]" 
      :key="index"
    >
      <input 
        type="radio" 
        @click="update(option.slug)"
        :checked="activeStatus && activeStatus.slug === option.slug"
        :id="`${id}-${option.slug}`"
      >
      <label class="btns__btn" :for="`${id}-${option.slug}`">{{ option.title }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePageStore } from '@/domain/pages/store/usePageStore'

const pageStore = usePageStore()
const activeStatus = ref(props.status)

function update(status) {
  activeStatus.value = {slug: status}
  
  if (pageStore.selected.length <= 1) {
    pageStore.update(props.id, {status: status})
  } else {
    pageStore.updateBatch({status: status})
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
