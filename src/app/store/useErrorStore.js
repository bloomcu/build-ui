import { defineStore, acceptHMRUpdate } from 'pinia'

export const useErrorStore = defineStore('errorStore', {
  state: () => ({
      errors: [],
      loading: false,
  }),

  actions: {
    setErrors(errors) {
      this.errors = errors
    },
    
    setLoading(isLoading) {
      this.loading = isLoading
    }
  }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
