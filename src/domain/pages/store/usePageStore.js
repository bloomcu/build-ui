import { defineStore, acceptHMRUpdate } from 'pinia'
import { pageApi as PageApi } from '@/domain/pages/api/pageApi'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

export const usePageStore = defineStore('pageStore', {
  state: () => ({
    pages: [],
    page: null,
    isLoading: false,
    selected: [],
    lastSelected: null,
    categoryModalOpen: false,
  }),

  actions: {
    index(params) {
      const auth = useAuthStore()
      this.isLoading = true

      PageApi.index(auth.organization, params)
        .then(response => {
          this.pages = response.data.data
          this.isLoading = false
        }).catch(error => {
          console.log('Error', error.response.data)
        })
    },

    async store(page) {
      const auth = useAuthStore()

      await PageApi.store(auth.organization, page)
        .then(response => {
          this.pages.unshift(response.data.data)
        }).catch(error => {
          return Promise.reject(error)
        })
    },

    show(id) {
      const auth = useAuthStore()
      this.isLoading = true

      PageApi.show(auth.organization, id)
        .then(response => {
          this.page = response.data.data
          this.isLoading = false
        }).catch(error => {
          console.log('Error', error.response.data)
        })
    },

    update(id, payload) {
      const auth = useAuthStore()
      this.isLoading = true

      PageApi.update(auth.organization, id, payload)
        .then(response => {
          console.log('Page successfully updated')
          this.isLoading = false
        })
    },

    async destroy(id) {
      const auth = useAuthStore()
      this.isLoading = true

      let page = this.pages.find(p => p.id == id) // cache resource
      this.pages = this.pages.filter((p) => p.id !== id) // remove resource

      try {
        const response = await PageApi.destroy(auth.organization, id)
        console.log('Page successfully destroyed')
        this.loading = false
      } catch (error) {
        this.pages.unshift(page) // restore resource
        this.loading = false
        console.log('Error', error.response.data)
      }
    },

    selectPage(id, event) {
      // Select page
      let index = this.selected.indexOf(id)
      index === -1 ? this.selected.push(id) : this.selected.splice(index, 1)

      // Handle multiselect
      if (event.shiftKey) {
        if (this.lastSelected == null) {
          this.lastSelected = id
          return;
        }

        // Get array of all page id's
        let pageIds = this.pages.map((page) => page.id)

        // Get selection range
        let from = pageIds.indexOf(id)
        let to = pageIds.indexOf(this.lastSelected)

        // Setup the range of our selection
        let range = [to, from].sort()

        // Slice our selection from source array
        let selection = pageIds.slice(...range)

        // Add selection to destination array
        this.selected = [...new Set([...this.selected, ...selection])];

        this.lastSelected = null
      }

      this.lastSelected = id
    },

    clearSelectedPages() {
      this.selected = []
    },
    
    toggleCategoryModal() {
      this.categoryModalOpen = !this.categoryModalOpen
    },
  }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
