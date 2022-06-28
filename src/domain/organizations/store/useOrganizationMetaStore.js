import { defineStore, acceptHMRUpdate } from 'pinia'
import { organizationMetaApi as OrganizationMetaApi } from '@/domain/organizations/api/organizationMetaApi'

import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import { useRoute } from 'vue-router'

export const useOrganizationMetaStore = defineStore('organizationMetaStore', {
    state: () => ({
        metas: [],
        meta: [],
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
        index(params) {
          const auth = useAuthStore()
          const route = useRoute()
          this.meta = []
          
          OrganizationMetaApi.index(auth.getOrganization)
            .then(response => {
              // console.log(response)
              this.metas = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(meta) {
          const auth = useAuthStore()
          const route = useRoute()
          
          await OrganizationMetaApi.store(auth.getOrganization, meta)
            .then(response => {
              // this.metas.unshift(response.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        show(key) {
          const auth = useAuthStore()
          const route = useRoute()
          
          OrganizationMetaApi.show(auth.getOrganization, key)
            .then(response => {
              // console.log(response.data.value)
              this.meta = response.data.value
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        destroy(meta) {
          const route = useRoute()
          
          this.metas = this.metas.filter((m) => m.id !== meta.id)
          
          // OrganizationMetaApi.destroy(route.params.organization, meta.id)
          //   .then(response => {
          //     console.log('Meta successfully destroyed')
          //   }).catch(error => {
          //     this.metas.unshift(meta)
          //     console.log('Error', error.response.data)
          //   })
        },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useOrganizationMetaStore, import.meta.hot))
}
