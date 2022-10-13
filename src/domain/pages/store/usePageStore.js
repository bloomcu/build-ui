import { defineStore, acceptHMRUpdate } from 'pinia'
import { pageApi as PageApi } from '@/domain/pages/api/pageApi'

export const usePageStore = defineStore('pageStore', {
    state: () => ({
        // We now get the current route in all stores.
        // Use the this.router.currentRoute to get the site.
        site: {
          id: 1
        },
        pages: [],
        page: {},
        isLoading: false,
    }),
    
    getters: {},
    
    actions: {
        index(params) {
          this.items = []
          
          // console.log('Route in store: ', this.route)
          
          PageApi.index(this.site.id, params)
            .then(response => {
              this.pages = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(page) {
          await PageApi.store(this.site.id, page)
            .then(response => {
              this.pages.unshift(response.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        show(pageId) {
          this.isLoading = true
          
          PageApi.show(this.site.id, pageId)
            .then(response => {
              this.page = response.data
              this.isLoading = false
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        update(pageId, page) {
          this.isLoading = true
          
          PageApi.update(this.site.id, pageId, page)
            .then(response => {
              console.log('Page successfully updated')
              this.isLoading = false
            })
        },
        
        destroy(page) {
          // TODO: Let's not accept the whole page
          // Find it and cache it here instead
          this.isLoading = true
          
          this.pages = this.pages.filter((p) => p.id !== page.id)
          
          PageApi.destroy(this.site.id, page.id)
            .then(response => {
              console.log('Page successfully destroyed')
              this.loading = false
            }).catch(error => {
              this.pages.unshift(page)
              this.loading = false
              console.log('Error', error.response.data)
            })
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
