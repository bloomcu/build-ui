<template>
  <svg 
    :class="`icon--${size}`"
    class="icon fill-current"
    viewBox="0 0 16 16"
  >
    <g><path d="M14,1H12a1,1,0,0,0,0,2h2V13H2V3H4A1,1,0,0,0,4,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3A2,2,0,0,0,14,1Z"></path><path data-color="color-2" d="M4.5,6a.5.5,0,0,0-.354.854l3.5,3.5a.5.5,0,0,0,.708,0l3.5-3.5A.5.5,0,0,0,11.5,6H9V2A1,1,0,0,0,7,2V6Z"></path></g>
  </svg>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'sm'
  }
})
</script>
