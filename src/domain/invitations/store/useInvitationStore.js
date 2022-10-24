import { defineStore, acceptHMRUpdate } from 'pinia'
import { invitationApi as InvitationApi } from '@/domain/invitations/api/invitationApi'

import { useAuthStore } from '@/domain/auth/store/useAuthStore'

export const useInvitationStore = defineStore('invitationStore', {
    state: () => ({
        invitations: [],
        invitation: null,
        isLoading: false,
    }),
    
    getters: {},
    
    actions: {
        index(params) {
          const auth = useAuthStore()
          this.isLoading = true
          this.invitations = null
          
          InvitationApi.index(auth.organization, params)
            .then(response => {
              this.invitations = response.data.data
              this.isLoading = false
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(email) {
          const auth = useAuthStore()
          this.isLoading = true
          
          await InvitationApi.store(auth.organization, {
            email: email.value,
            role: 'editor'
          })
          .then((response) => {
            this.invitations.unshift(response.data.data)
          }).catch((error) => {
            console.log('Error', error)
          })
        },
        
        async show(uuid) {
          const auth = useAuthStore()
          this.isLoading = true
        
          await InvitationApi.show(auth.organization, uuid)
            .then(response => {
              this.invitation = response.data.data
              
              setTimeout(function () {
                this.isLoading = false
              }.bind(this), 600)
            })
            .catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        // update() {
        //   const auth = useAuthStore()
        //   this.isLoading = true
        // 
        //   InvitationApi.update(auth.organization, this.invitation.uuid, this.invitation)
        //     .then(response => {
        //       console.log('invitation successfully updated')
        //       this.isLoading = false
        //     })
        //     .catch(error => {
        //       console.log('Error', error.response.data)
        //     })
        // },
        
        async destroy(uuid) {
          const auth = useAuthStore()
          this.isLoading = true
          
          let invitation = this.invitations.find(invite => invite.uuid == uuid)
          this.invitations = this.invitations.filter((invite) => invite.uuid !== uuid)
          
          try {
            const response = await InvitationApi.destroy(auth.organization, uuid)
            console.log(response)
            console.log('Invitation successfully destroyed')
            this.loading = false
          }
          catch (error) {
            this.invitations.unshift(invitation)
            this.loading = false
            console.log('Error', error.response.data)
          }
          
          // InvitationApi.destroy(auth.organization, uuid)
          //   .then(response => {
          //     console.log(response)
          //     console.log('Invitation successfully destroyed')
          //     this.loading = false
          //   }).catch(error => {
          //     this.invitations.unshift(invitation)
          //     this.loading = false
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
    import.meta.hot.accept(acceptHMRUpdate(useInvitationStore, import.meta.hot))
}
