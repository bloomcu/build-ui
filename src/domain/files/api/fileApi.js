import { httpClient as HttpClient } from '@/app/api/httpClient'

const fileApi = {    
    /**
     * List files
     *
     * @param Object params [Key/value params to query by]
     * @return promise
     */
    index() {
        return HttpClient.get(`/files`)
    },
    
    /**
     * Store a file
     *
     * @param Object post [Properties to create file from]
     * @return promise
     */
    store(fileObject) {
        return HttpClient.post('/files', fileObject)
    },
    
    /**
     * Create a presigned URL
     *
     * This presigned URL is used to post a file to AWS S3
     * @param Object request [name, extension, size]
     */
    sign(request) {
        return HttpClient.post('/file/sign', request)
    },
}

export { fileApi }
