import { defineStore, acceptHMRUpdate } from 'pinia'
import { organizationCommentsApi as OrganizationCommentsApi } from '@/domain/organizations/api/organizationCommentsApi'

import { useAuthStore } from '@/domain/auth/store/useAuthStore'

export const useOrganizationCommentsStore = defineStore('organizationCommentsStore', {
    state: () => ({
        comments: [],
        comment: [],
        isLoading: false,
    }),
    
    getters: {
      filterByGroup: (state) => {
        return (group) => state.comments.filter((comment) => {
          return comment.group == group
        })
      }
    },
    
    actions: {        
        index(params) {
          const auth = useAuthStore()
          
          this.comments = []
          
          OrganizationCommentsApi.index(auth.organization)
            .then(response => {
              // console.log(response)
              this.comments = response.data.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(meta) {
          const auth = useAuthStore()
          
          await OrganizationCommentsApi.store(auth.organization, meta)
            .then(response => {
              // this.metas.unshift(response.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        destroy(meta) {
          const auth = useAuthStore()
          
          this.comments = this.comments.filter((m) => m.id !== meta.id)
          
          // OrganizationCommentsApi.destroy(auth.organization, comment.id)
          //   .then(response => {
          //     console.log('Comment successfully destroyed')
          //   }).catch(error => {
          //     this.comments.unshift(comment)
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
    import.meta.hot.accept(acceptHMRUpdate(useOrganizationCommentsStore, import.meta.hot))
}
