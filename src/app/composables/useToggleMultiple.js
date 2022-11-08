import { ref, onUnmounted } from 'vue'

const toggled = ref([])

export default function useToggleMultiple() {

  function toggle(item) {
    const index = toggled.value.indexOf(item)
    index === -1 ? toggled.value.push(item) : toggled.value.splice(index, 1)
  }
  
  function isToggled(item) {
    return toggled.value.includes(item)
  }
  
  onUnmounted(() => {
    toggled.value = []
  })

  return {
    toggled,
    toggle,
    isToggled,
  }
}
