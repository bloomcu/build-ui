import { ref } from 'vue'

export default function useToggle() {
    const array = ref([])

    function toggled(item) {
        return array.value.includes(item)
    }

    function toggle(item) {
        const index = array.value.indexOf(item)

        index === -1 ? array.value.push(item) : array.value.splice(index, 1);
    }

    return {
        toggled,
        toggle
    }
}
