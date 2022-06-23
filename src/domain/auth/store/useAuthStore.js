import { defineStore, acceptHMRUpdate } from 'pinia'
import { authApi as AuthApi } from '@/domain/auth/api/authApi'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      user: null,
      organization: 'bloomcu',
      access_token: ''
    }),
    
    getters: {
      getUser: (state) => state.user
    },
    
    actions: {
      register(name, email, password, password_confirmation) {
        
        AuthApi.register(name, email, password, password_confirmation)
          .then(response => {
            console.log(response)
            // this.user = response.data.user
            // this.access_token = response.data.access_token
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      login(email, password) {
        AuthApi.login(email, password)
          .then(response => {
            console.log(response)
            // this.user = response.data.user
            // this.access_token = response.data.access_token
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      async logout() {
        await AuthApi.logout()
          .then(response => {
            console.log(response)
            
            this.user = null
            this.organization = ''
            this.access_token = ''
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
