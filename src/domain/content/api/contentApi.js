import { httpClient as HttpClient } from '@/app/api/httpClient'

const contentApi = {    
    /**
     * List content items
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/bloomcu/content`, { params: params })
    },
    
    /**
     * Store a content item
     *
     * @param Object item [Properties to create item from]
     * @return promise
     */
    store(item) {
        return HttpClient.post('/bloomcu/content', item)
    }
}

export { contentApi }
