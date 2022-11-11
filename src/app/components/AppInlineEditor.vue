<template>
  <div
    contenteditable 
    spellcheck="false" 
    @blur="update($event)"
    @keydown.enter="update($event)"
  >
    <slot/>
  </div>
</template>

<script setup>
const emit = defineEmits(['updated'])

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

function update(event) {
  event.target.blur()
  emit('updated', props.id, event.target.innerText)
}
</script>

<style lang="scss">

</style>
