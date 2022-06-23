import { defineStore, acceptHMRUpdate } from 'pinia'
import { authApi as AuthApi } from '@/domain/auth/api/authApi'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      user: JSON.parse(localStorage.getItem('user')),
      organization: 'bloomcu',
    }),
    
    getters: {
      getOrganization: (state) => state.organization,
    },
    
    actions: {
      async register(name, email, password, password_confirmation) {
        await AuthApi.register(name, email, password, password_confirmation)
          .then(response => {
            // console.log(response.data.data)
            this.user = response.data.data
            
            // Store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response.data.data))
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      async login(email, password) {
        await AuthApi.login(email, password)
          .then(response => {
            // console.log(response.data.data)
            this.user = response.data.data
            
            // Store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response.data.data))
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      async logout() {
        await AuthApi.logout()
          .then(response => {
            // console.log(response.data.data)
            this.user = null
            // this.organization = ''
            
            // Remove user details from local storage
            localStorage.removeItem('user');
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
