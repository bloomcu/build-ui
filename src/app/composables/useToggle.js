import { ref, computed } from 'vue'

export default function useToggle() {
    const toggled = ref()
    
    function toggle(item) {
        item == toggled.value ? toggled.value = '' : toggled.value = item
    }

    return {
        toggled: computed(() => toggled.value),
        toggle
    }
}
