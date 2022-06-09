import { defineStore, acceptHMRUpdate } from 'pinia'
import { pageApi as PageApi } from '@/domain/pages/api/pageApi'

export const usePageStore = defineStore('pageStore', {
    state: () => ({
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
          
          PageApi.index(this.site.id, params)
            .then(response => {
              this.pages = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        store(page) {
          PageApi.store(this.site.id, page)
            .then(response => {
              this.pages.unshift(response.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        show(id) {},
        
        update() {},
        
        destroy(id) {},
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
