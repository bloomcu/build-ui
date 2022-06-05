import { defineStore, acceptHMRUpdate } from 'pinia'
import { contentApi as ContentApi } from '@/domain/content/api/contentApi'

export const useContentStore = defineStore('contentStore', {
    state: () => ({
        items: [],
        item: {},
        isLoading: false,
    }),
    
    getters: {},
    
    actions: {
        index(params) {
          this.items = []
          ContentApi.index(params)
            .then(response => {
              this.items = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        store(item) {
          ContentApi.store(item)
            .then(response => {
              this.items.unshift(response.data)
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
    import.meta.hot.accept(acceptHMRUpdate(useContentStore, import.meta.hot))
}
