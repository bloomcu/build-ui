import { httpClient as HttpClient } from '@/app/api/httpClient'
import axios from 'axios'

const cloudinaryApi = {    
    /**
     * Upload file to Cloudinary
     *
     * @param Object file
     * @return promise
     */
    async upload(file, folder) {
      let form = new FormData()
      
      form.append('file', file)
      form.append('folder', folder)
      form.append('upload_preset', 'metrifi-unsigned');
      form.append('cloud_name', 'metrifi');
      
      try {
        return await axios.post('https://api.cloudinary.com/v1_1/metrifi/upload', form)
      } catch(error) {
        console.log('Error', error.message)
      }
    },
    
    /**
     * Destroy file to Cloudinary
     *
     * @param String publicId
     * @return promise
     */
    async destroy(publicId) {
      try {
        return await axios.post('https://api.cloudinary.com/v1_1/metrifi/destroy', publicId, {
          public_id: 'metrifi',
          signature: '', // use SDK instead
          api_key: '655295268566531',
          timestamp: Date.now()
        })
      } catch(error) {
        console.log('Error', error.message)
      }
    }
}

export { cloudinaryApi }
