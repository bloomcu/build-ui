import { httpClient as HttpClient } from '@/app/api/httpClient'

const mediaApi = {    
    /**
     * List media
     *
     * @param String organization [Slug of the organization]
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(organization, params) {
        return HttpClient.get(`/organizations/${organization}/media`, { params: params })
    },
    
    /**
     * Store a file
     *
     * @param String organization [Slug of the organization]
     * @param Object file [Object to create file from]
     * @return promise
     */
    store(organization, file, collection, tags) {
        return HttpClient.post(`/organizations/${organization}/media`, {
          file: file,
          collection: collection,
          tags: tags
        },
        {
          headers: { "Content-Type": "multipart/form-data" }
        })
    },
    
    /**
     * Destroy a file
     *
     * @param String organization [Slug of the organization]
     * @param Integer id [Id of the file you want to destroy]
     * @return promise
     */
    destroy(organization, id) {
        return HttpClient.delete(`/organizations/${organization}/media/${id}`)
    },
}

export { mediaApi }
