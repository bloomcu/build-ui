import { defineStore, acceptHMRUpdate } from 'pinia'
import { organizationApi as OrganizationApi } from '@/domain/organizations/api/organizationApi'

export const useOrganizationStore = defineStore('organizationStore', {
    state: () => ({
        organizations: [],
        organization: {},
        isLoading: false,
        createModalOpen: false,
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
        
        async store(organization) {
          await OrganizationApi.store(organization)
            .then(response => {
              this.organizations.unshift(response.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        show(id) {},
        
        update() {},
        
        destroy(id) {},
        
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
    import.meta.hot.accept(acceptHMRUpdate(useOrganizationStore, import.meta.hot))
}
