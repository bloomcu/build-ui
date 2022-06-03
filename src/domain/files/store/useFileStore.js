import { defineStore, acceptHMRUpdate } from 'pinia'
import { fileApi as FileApi } from '@/domain/files/api/fileApi'
import { cloudinaryApi as CloudinaryApi } from '@/domain/files/api/cloudinaryApi'

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
        
        async store(file, folder, group) {
          let upload = await CloudinaryApi.upload(file, folder)
          
          FileApi.store({
            group: group,
            type: upload.data.format ? upload.data.format : file.name.split('.').pop(),
            name: upload.data.original_filename,
            size: upload.data.bytes,
            public_id: upload.data.public_id,
            src: upload.data.secure_url,
          })
          .then(response => {
            this.files.unshift(response.data)
          }).catch(error => {
            console.log('Error', error.response.data)
          })
          
          return upload
        },
        
        show(id) {},
        
        update() {},
        
        async destroy(id, public_id) {
          // let destroyed = await CloudinaryApi.destroy(publicId)
          
          FileApi.destroy(id)
          .then(response => {
            this.files = this.files.filter((file) => file.id !== id)
          }).catch(error => {
            console.log('Error', error.response.data)
          })
          
          // return destroyed
        },
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFileStore, import.meta.hot))
}
