import { httpClient as HttpClient } from '@/app/api/httpClient'

const fileApi = {    
    /**
     * List files
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/bloomcu/files`, { params: params })
    },
    
    /**
     * Store a file
     *
     * @param Object file [Object to create file from]
     * @return promise
     */
    store(file) {
        return HttpClient.post('/bloomcu/files', file)
    }
}

export { fileApi }
