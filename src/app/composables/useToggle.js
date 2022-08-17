import { ref, computed } from 'vue'

const toggled = ref(null)

export default function useToggle() {
    function toggle(item) {
        toggled.value = toggled.value === item ? null : item
    }

    return {
        toggled: computed(() => toggled.value),
        toggle
    }
}
