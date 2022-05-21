import axios from 'axios'

/**
 * CMS API Client
 * An instance of Axios we can use for all API requests to CMS
 */
const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export { httpClient }
