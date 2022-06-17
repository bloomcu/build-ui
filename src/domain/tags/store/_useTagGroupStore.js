import { defineStore, acceptHMRUpdate } from 'pinia'
import { tagGroupApi as TagGroupApi } from '@/domain/tags/api/tagGroupApi'

export const useTagGroupStore = defineStore('tagGroupStore', {
    state: () => ({
        groups: [],
        group: {},
        createModal: false,
        isLoading: false,
    }),
    
    getters: {},
    
    actions: {
        index(params) {
          this.groups = []
        
          TagApi.index(params)
            .then(response => {
              this.groups = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        store(group) {
          TagApi.store(group)
            .then(response => {
              this.groups.unshift(response.data)
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        show(id) {
          TagApi.show(id)
            .then(response => {
              this.group = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        update() {
          TagApi.update(this.group.id, this.group)
            .then(response => {
              console.log('Group successfully updated')
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        destroy(group) {
          this.groups = this.groups.filter((g) => g.id !== group.id)
          
          TagApi.destroy(group.id)
            .then(response => {
              console.log('Group successfully destroyed')
            }).catch(error => {
              this.groups.unshift(group)
              console.log('Error', error.response.data)
            })
    },
    
    toggleCreateModal() {
      this.createModal = !this.createModal
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTagGroupStore, import.meta.hot))
}
