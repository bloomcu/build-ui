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
        @click="update(option.slug)"
        :checked="status === option.slug"
        :id="`${id}-${option.slug}`"
      >
      <label class="btns__btn" :for="`${id}-${option.slug}`">{{ option.title }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['updated'])

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  status: {
    type: Object,
  }
})

const status = ref(props.status)

function update(s) {
  status.value = s
  emit('updated', props.id, s)
}
</script>
