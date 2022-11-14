import { httpClient as HttpClient } from '@/app/api/httpClient'

const pageApi = {
    /**
     * List pages
     *
     * @param String organization [Organization slug]
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(organization, params) {
        return HttpClient.get(`/${organization}/pages`, { params: params })
    },
    
    /**
     * Store a page
     *
     * @param String organization [Organization slug]
     * @param Object page [Properties to create page from]
     * @return promise
     */
    store(organization, page) {
        return HttpClient.post(`/${organization}/pages`, page)
    },
    
    /**
     * Show a page
     *
     * @param String organization [Organization slug]
     * @param Integer id [Page id]
     * @return promise
     */
    show(organization, id) {
      return HttpClient.get(`/${organization}/pages/${id}`)
    },
    
    /**
     * Update a page
     *
     * @param String organization [Organization slug]
     * @param Integer id [Page id]
     * @param Object  payload [Properties to update page with]
     * @return promise
     */
    update(organization, id, payload) {
      return HttpClient.put(`/${organization}/pages/${id}`, payload)
    },
    
    /**
     * Update a batch of pages
     *
     * @param String organization [Organization slug]
     * @param Integer ids [Page ids]
     * @param Object payload [Properties to update page with]
     * @return promise
     */
    updateBatch(organization, ids, payload) {
      return HttpClient.put(`/${organization}/pages-batch`, {
        ids: ids,
        ...payload
      })
    },
    
    /**
     * Destroy a page
     *
     * @param String organization [Organization slug]
     * @param Integer id [Page id]
     * @return promise
     */
    destroy(organization, id) {
        return HttpClient.delete(`/${organization}/pages/${id}`)
    },
    
    /**
     * Destroy a batch of pages
     *
     * @param String organization [Organization slug]
     * @param Array ids [Page ids]
     * @return promise
     */
    destroyBatch(organization, ids) {
        return HttpClient.post(`/${organization}/pages-batch`, {ids: ids})
    },
}

export { pageApi }
