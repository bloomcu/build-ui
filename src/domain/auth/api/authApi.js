import { httpClient as HttpClient } from '@/app/api/httpClient'

const authApi = {    
    /**
     * List organizations
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    register(data) {
        return HttpClient.post(`/auth/register`, data)
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

export { authApi }
