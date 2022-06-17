import { httpClient as HttpClient } from '@/app/api/httpClient'

const tagGroupApi = {
    /**
     * List tag groups
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/tags/groups`, { params: params })
    },
    
    /**
     * Store a tag group
     *
     * @param Object group [Properties to create tag group from]
     * @return promise
     */
    store(group) {
        return HttpClient.post(`/tags/groups`, group)
    },
    
    /**
     * Show a tag group
     *
     * @param Integer slug [Slug of the tag group you want to show]
     * @return promise
     */
    show(slug) {
        return HttpClient.get(`/tags/groups/${slug}`)
    },

    /**
     * Update a tag group
     *
     * @param Integer slug [Slug of the tag group you want to update]
     * @param Object  tag [Properties to update tag group with]
     * @return promise
     */
    update(slug, group) {
        // post = JSON.parse(JSON.stringify(post))
        
        return HttpClient.put(`/tags/groups/${slug}`, group)
    },
    
    /**
     * Destroy a tag group
     *
     * @param String slug [Slug of the tag group you want to destroy]
     * @return promise
     */
    destroy(slug) {
        return HttpClient.delete(`/tags/groups/${slug}`)
    },
}

export { tagGroupApi }
