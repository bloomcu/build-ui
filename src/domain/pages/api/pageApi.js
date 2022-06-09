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
    }
}

export { pageApi }
