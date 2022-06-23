import axios from 'axios'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

/**
* Setup Http client
* An instance of Axios we can use for all API requests to CMS
*/
const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

/**
* Authenticate requests
* Return auth header with access token if user is logged in
*/
httpClient.interceptors.request.use(
  (config) => {
    const { user } = useAuthStore()
    if (!!user?.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`
    }
    return config
  },

  (error) => { Promise.reject(error) }
);

export { httpClient }
