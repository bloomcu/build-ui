import { defineStore, acceptHMRUpdate } from 'pinia'
import { fileApi as FileApi } from '@/domain/files/api/fileApi'
import { cloudinaryApi as CloudinaryApi } from '@/domain/files/api/cloudinaryApi'

import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import { useRoute } from 'vue-router'

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
          // const auth = useAuthStore()
          // TODO: Why are we using route here and not store
          const route = useRoute()
          
          this.files = []
          
          FileApi.index(route.params.organization, params)
            .then(response => {
              this.files = response.data
            }).catch(error => {
              console.log('Error', error.response.data)
            })
        },
        
        async store(file, folder, group) {
          const auth = useAuthStore()
          
          let upload = await CloudinaryApi.upload(file, folder)
          
          FileApi.store(auth.getOrganization, {
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
        
        destroy(file) {
          const auth = useAuthStore()
          
          this.files = this.files.filter((f) => f.id !== file.id)
          
          FileApi.destroy(auth.getOrganization, file.id)
            .then(response => {
              console.log('File successfully destroyed')
            }).catch(error => {
              this.files.unshift(file)
              console.log('Error', error.response.data)
            })
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
