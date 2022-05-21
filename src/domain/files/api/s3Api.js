import axios from 'axios'

const HttpClient = axios.create({
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const s3Api = {    
    /**
     * Upload file to Amazon S3
     *
     * Upload a file to AWS S3 using signed URL
     * @param String url [Presigned url]
     * @param Object file [File object]
     * @return promise
     */
    upload(url, file) {
        return HttpClient.post(url, file)
    }
}

export { s3Api }
