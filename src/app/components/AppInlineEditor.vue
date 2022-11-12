<template>
  <div
    contenteditable 
    spellcheck="false" 
    @blur="update($event)"
    @keydown.enter="update($event)"
    class="app-inline-editor"
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
.app-inline-editor {
  cursor: text;
}
</style>
