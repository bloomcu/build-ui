import { defineStore, acceptHMRUpdate } from 'pinia'
import { fileApi as FileApi } from '@/domain/files/api/fileApi'
// import { s3Api as S3Api } from '@/domain/files/api/s3Api'

export const useFileStore = defineStore('fileStore', {
    state: () => ({
        files: [],
        file: {},
        isLoading: false,
    }),
    
    actions: {
      
        index() {
            FileApi.index()
                .then(response => {
                    console.log('files', response)
                    // this.files = response.data.data
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
        
        // sign(file) {
        //     return FileApi.sign(file)
        // },
        // 
        // upload(url, file) {
        //     return S3Api.upload(url, file)
        // }
    }
})

/**
 * Enable hot reload on store updates
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFileStore, import.meta.hot))
}
