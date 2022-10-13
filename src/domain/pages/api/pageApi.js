import { httpClient as HttpClient } from '@/app/api/httpClient'

const pageApi = {
    /**
     * List pages
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(siteId, params) {
        return HttpClient.get(`/sites/${siteId}/pages`, { params: params })
    },
    
    /**
     * Store a page
     *
     * @param Object page [Properties to create page from]
     * @return promise
     */
    store(siteId, page) {
        return HttpClient.post(`/sites/${siteId}/pages`, page)
    },
    
    /**
     * Show a site
     *
     * @param Integer id [Slug of the site you want to show]
     * @return promise
     */
    show(siteId, pageId) {
      return HttpClient.get(`/sites/${siteId}/pages/${pageId}`)
    },
    
    /**
     * Update a site
     *
     * @param Integer id [Id of the site you want to update]
     * @param Object  site [Properties to update site with]
     * @return promise
     */
    update(siteId, pageId, page) {
      return HttpClient.put(`/sites/${siteId}/pages/${pageId}`, page)
    },
    
    /**
     * Destroy a page
     *
     * @param Integer id [Id of the page you want to destroy]
     * @return promise
     */
    destroy(siteId, pageId) {
        return HttpClient.delete(`/sites/${siteId}/pages/${pageId}`)
    },
}

export { pageApi }
