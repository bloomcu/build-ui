import { defineStore, acceptHMRUpdate } from 'pinia'
import { siteApi as SiteApi } from '@/domain/sites/api/siteApi'

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        sites: [],
        site: {},
        isLoading: false,
        createModalOpen: false,
    }),
    
    getters: {},
    
    actions: {
        index(params) {
          this.sites = []
          
          SiteApi.index(params)
            .then(response => {
              this.sites = response.data.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(site) {
          await SiteApi.store(site)
            .then(response => {
              this.sites.push(response.data.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        show(id) {},
        
        update() {},
        
        destroy(id) {
          SiteApi.destroy(id)
            .then(response => {
              this.sites = this.sites.filter((site) => site.id !== id)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        toggleCreateModal() {
          this.createModalOpen = !this.createModalOpen
        }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSiteStore, import.meta.hot))
}
