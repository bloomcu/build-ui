import { httpClient as HttpClient } from '@/app/api/httpClient'

const fileApi = {    
    /**
     * List files
     *
     * @param String organization [Slug of the organization]
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(organization, params) {
        return HttpClient.get(`/${organization}/files`, { params: params })
    },
    
    /**
     * Store a file
     *
     * @param String organization [Slug of the organization]
     * @param Object file [Object to create file from]
     * @return promise
     */
    store(organization, file) {
        return HttpClient.post(`/${organization}/files`, file)
    },
    
    /**
     * Destroy a file
     *
     * @param String organization [Slug of the organization]
     * @param Integer id [Id of the file you want to destroy]
     * @return promise
     */
    destroy(organization, id) {
        return HttpClient.delete(`/${organization}/files/${id}`)
    },
}

export { fileApi }
