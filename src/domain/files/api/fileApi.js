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
    },
    
    /**
     * Destroy a file
     *
     * @param Integer id [Id of the file you want to destroy]
     * @return promise
     */
    destroy(id) {
        return HttpClient.delete(`/bloomcu/files/${id}`)
    },
}

export { fileApi }
