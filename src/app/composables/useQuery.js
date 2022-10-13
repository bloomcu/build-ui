import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

let query = ref({})

export default function useQuery() {
  const router = useRouter()

  function set(parameter, value) {
    Object.assign(query.value, {...query.value, [parameter]: value})
    syncRoute()
  }

  function unset(parameter) {
    delete query.value[parameter]
    syncRoute()
  }

  function syncRoute() {
    router.replace({ query: query.value })
  }
  
  // watch(query, () => {
  //   indexFiles()
  // }, { deep: true })
  
  onMounted(() => {
    let route = useRoute()
    Object.assign(query.value, route.query)
  })
  
  onUnmounted(() => {
    query.value = {}
  })

  return {
    query,
    set,
    unset,
  }
}
