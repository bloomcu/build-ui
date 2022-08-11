import { defineStore, acceptHMRUpdate } from 'pinia'
import { organizationMetaApi as OrganizationMetaApi } from '@/domain/organizations/api/organizationMetaApi'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

export const useLaunchStore = defineStore('launchStore', {
    state: () => ({
        metas: [],
        isLoading: false,
    }),
    
    getters: {
      filterByKey: (state) => {
        return (key) => state.metas.filter((meta) => {
          return meta.key == key
        })
      }
    },
    
    actions: {
        async index(params) {
          this.meta = []
          const auth = useAuthStore()
          
          await OrganizationMetaApi.index(auth.organization)
            .then(response => {
              this.metas = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        store(site) {},
        
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
    import.meta.hot.accept(acceptHMRUpdate(useLaunchStore, import.meta.hot))
}
