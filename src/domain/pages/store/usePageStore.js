import { defineStore, acceptHMRUpdate } from 'pinia'
import { pageApi as PageApi } from '@/domain/pages/api/pageApi'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

export const usePageStore = defineStore('pageStore', {
    state: () => ({
        pages: [],
        page: null,
        isLoading: false,
    }),
    
    actions: {
        index(params) {
          const auth = useAuthStore()
          this.items = null
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
        
        update(id, page) {
          const auth = useAuthStore()
          this.isLoading = true
          
          PageApi.update(auth.organization, id, page)
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
          }
          catch (error) {
            this.pages.unshift(page) // restore resource
            this.loading = false
            console.log('Error', error.response.data)
          }
        }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
