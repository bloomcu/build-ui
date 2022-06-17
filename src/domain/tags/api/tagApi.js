import { httpClient as HttpClient } from '@/app/api/httpClient'

const tagApi = {
    /**
     * List tag groups
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    indexGroups(params) {
        return HttpClient.get(`/tags/groups`, { params: params })
    },
    
    /**
     * Store a tag group
     *
     * @param Object group [Properties to create tag group from]
     * @return promise
     */
    storeGroup(group) {
        return HttpClient.post(`/tags/groups`, group)
    },
    
    /**
     * Show a tag group
     *
     * @param Integer slug [Slug of the tag group you want to show]
     * @return promise
     */
    showGroup(slug) {
        return HttpClient.get(`/tags/groups/${slug}`)
    },

    /**
     * Update a tag group
     *
     * @param Integer slug [Slug of the tag group you want to update]
     * @param Object  tag [Properties to update tag group with]
     * @return promise
     */
    updateGroup(slug, group) {
        // post = JSON.parse(JSON.stringify(post))
        
        return HttpClient.put(`/tags/groups/${slug}`, group)
    },
    
    /**
     * Destroy a tag group
     *
     * @param String slug [Slug of the tag group you want to destroy]
     * @return promise
     */
    destroyGroup(slug) {
        return HttpClient.delete(`/tags/groups/${slug}`)
    },
    
    /**
     * Store a tag
     *
     * @param Object tag [Properties to create tag from]
     * @return promise
     */
    storeTag(group_slug, tag) {
        return HttpClient.post(`/tags`, {
          group_slug: group_slug,
          title: tag.title,
        })
    },
    
    /**
     * Update a tag
     *
     * @param Integer slug [Slug of the tag you want to update]
     * @param Object  tag [Properties to update tag with]
     * @return promise
     */
    updateTag(slug, tag) {
        // post = JSON.parse(JSON.stringify(post))
        
        return HttpClient.put(`/tags/${slug}`, tag)
    },
    
    /**
     * Destroy a tag
     *
     * @param String slug [Slug of the tag you want to destroy]
     * @return promise
     */
    destroyTag(slug) {
        return HttpClient.delete(`/tags/${slug}`)
    },
}

export { tagApi }
