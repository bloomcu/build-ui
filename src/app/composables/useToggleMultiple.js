import { ref, onUnmounted } from 'vue'

const collection = ref([])

export default function useToggleMultiple() {

  function toggle(item) {
    const index = collection.value.indexOf(item)
    index === -1 ? collection.value.push(item) : collection.value.splice(index, 1)
  }
  
  function isToggled(item) {
    return collection.value.includes(item)
  }
  
  onUnmounted(() => {
    collection.value = []
  })

  return {
    toggle,
    isToggled,
  }
}
