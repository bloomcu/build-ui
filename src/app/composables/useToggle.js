import { ref, computed } from 'vue'

const toggled = ref(0)

export default function useToggle() {
    function toggle(item) {
        toggled.value = item
    }

    return {
        toggled: computed(() => toggled.value),
        toggle
    }
}
