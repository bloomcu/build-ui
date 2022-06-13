import { httpClient as HttpClient } from '@/app/api/httpClient'

const siteApi = {
    /**
     * List sites
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/bloomcu/sites`, { params: params })
    },
    
    /**
     * Store a site
     *
     * @param Object site [Properties to create site from]
     * @return promise
     */
    store(site) {
        return HttpClient.post(`/bloomcu/sites`, site)
    },
    
    /**
     * Destroy a site
     *
     * @param Integer id [Id of the file you want to destroy]
     * @return promise
     */
    destroy(id) {
        return HttpClient.delete(`/bloomcu/sites/${id}`)
    },
}

export { siteApi }
