<template>
  <button @click="copy(value)" type="button">
    <slot v-if="!copying"/>
    <span v-if="copying">Copied</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import useClipboard from '@/app/composables/useClipboard'

const { copyToClipboard } = useClipboard()
let copying = ref(false)

function copy(value) {
  copying.value = true
  copyToClipboard(value)  
  
  setTimeout(function () {
    copying.value = false
  }.bind(this), 2000)
}

const props = defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>
