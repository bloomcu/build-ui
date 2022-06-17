import { httpClient as HttpClient } from '@/app/api/httpClient'

const tagApi = {
    
    /**
     * Store a tag
     *
     * @param Object tag [Properties to create tag from]
     * @return promise
     */
    store(group_slug, tag) {
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
    update(slug, tag) {
        // post = JSON.parse(JSON.stringify(post))
        
        return HttpClient.put(`/tags/${slug}`, tag)
    },
    
    /**
     * Destroy a tag
     *
     * @param String slug [Slug of the tag you want to destroy]
     * @return promise
     */
    destroy(slug) {
        return HttpClient.delete(`/tags/${slug}`)
    },
}

export { tagApi }
