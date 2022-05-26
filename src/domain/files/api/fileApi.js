import { httpClient as HttpClient } from '@/app/api/httpClient'

const fileApi = {    
    /**
     * List files
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/files`, { params: params })
    },
    
    /**
     * Store a file
     *
     * @param Object post [Properties to create file from]
     * @return promise
     */
    store(fileObject) {
        return HttpClient.post('/files', fileObject)
    }
}

export { fileApi }
