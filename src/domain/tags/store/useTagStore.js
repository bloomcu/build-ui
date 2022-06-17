import { defineStore, acceptHMRUpdate } from 'pinia'
import { tagApi as TagApi } from '@/domain/tags/api/tagApi'

export const useTagStore = defineStore('tagStore', {
    state: () => ({
        groups: [],
        group: {},
        tags: {},
        tag: {},
        createModal: false,
        isLoading: false,
    }),
    
    getters: {},
    
    actions: {
      indexGroups(params) {
        this.groups = []
      
        TagApi.indexGroups(params)
          .then(response => {
            this.groups = response.data.data
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      async storeGroup(group) {
        await TagApi.storeGroup(group)
          .then(response => {
            this.groups.unshift(response.data.data)
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      showGroup(id) {
        TagApi.showGroup(id)
          .then(response => {
            this.group = response.data.data
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      updateGroup() {
        TagApi.updateGroup(this.group.id, this.group)
          .then(response => {
            console.log('Group successfully updated')
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
      
      destroyGroup(group) {
        this.groups = this.groups.filter((g) => g.id !== group.id)
        
        TagApi.destroyGroup(group.id)
          .then(response => {
            console.log('Group successfully destroyed')
          }).catch(error => {
            this.groups.unshift(group)
            console.log('Error', error.response.data)
          })
      },
        
      storeTag(tag) {
        TagApi.storeTag(this.group.slug, tag)
          .then(response => {
            this.tags.unshift(response.data.data)
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
        
      updateTag() {
        TagApi.updateTag(this.tag.id, this.tag)
          .then(response => {
            console.log('Tag successfully updated')
          }).catch(error => {
            console.log('Error', error.response.data)
          })
      },
        
      destroyTag(tag) {
        this.tags = this.tags.filter((t) => t.id !== tag.id)
        
        TagApi.destroyTag(tag.id)
          .then(response => {
            console.log('Tag successfully destroyed')
          }).catch(error => {
            this.tags.unshift(tag)
            console.log('Error', error.response.data)
          })
      },
      
      toggleCreateModal() {
        this.createModal = !this.createModal
      }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTagStore, import.meta.hot))
}
