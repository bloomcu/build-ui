import { defineStore, acceptHMRUpdate } from 'pinia'
import { fileApi as FileApi } from '@/domain/files/api/fileApi'

export const useFileStore = defineStore('fileStore', {
    state: () => ({
        files: [],
        file: {},
        isLoading: false,
    }),
    
    getters: {
      filterByGroup: (state) => {
        return (group) => state.files.filter((file) => {
          return file.group == group
        })
      }
    },
    
    actions: {
        index(params) {
          this.files = []
          
          FileApi.index(params)
            .then(response => {
              this.files = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        store(fileObject) {      
            FileApi.store(fileObject)
                .then(response => {
                    // this.files.unshift(response.data.data)
                    this.files.unshift(response.data)
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
    import.meta.hot.accept(acceptHMRUpdate(useFileStore, import.meta.hot))
}
