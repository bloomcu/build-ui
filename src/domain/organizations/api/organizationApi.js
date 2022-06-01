import { httpClient as HttpClient } from '@/app/api/httpClient'

const organizationApi = {    
    /**
     * List organizations
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index(params) {
        return HttpClient.get(`/organizations`, { params: params })
    },
    
    /**
     * Store an organization
     *
     * @param Object organization [Properties to create file from]
     * @return promise
     */
    store(organization) {
        return HttpClient.post('/organizations', organization)
    }
}

export { organizationApi }
