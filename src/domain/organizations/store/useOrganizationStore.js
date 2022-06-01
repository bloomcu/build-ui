import { defineStore, acceptHMRUpdate } from 'pinia'
import { organizationApi as OrganizationApi } from '@/domain/organizations/api/organizationApi'

export const useOrganizationStore = defineStore('organizationStore', {
    state: () => ({
        organizations: [],
        organization: {},
        isLoading: false,
    }),
    
    getters: {},
    
    actions: {
        index(params) {
          this.organizations = []
          OrganizationApi.index(params)
            .then(response => {
              this.organizations = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        store(organization) {
          OrganizationApi.store(organization)
            .then(response => {
              this.organizations.unshift(response.data)
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
    import.meta.hot.accept(acceptHMRUpdate(useOrganizationStore, import.meta.hot))
}
