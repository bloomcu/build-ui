<template>
    <div>
        <input type="file" name="uploader" id="uploader" ref="uploader" multiple>
    </div>
</template>

<script setup>
import axios from 'axios'
import * as Filepond from 'filepond'

import { ref, onMounted } from 'vue'
import { useFileStore } from '@/domain/files/store/useFileStore'

const fileStore = useFileStore()

const uploader = ref() // Input binding

// TODO: Simulate a failed file sign, upload and store
// Do we get proper error responses and does this cancel
// the Filepond upload calling abort()?

onMounted(() => {
    const pond = Filepond.create(uploader.value, {
        allowRevert: false,

        // Process files
        server: {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                console.log({
                  fieldName, file, metadata, load, error, progress, abort
                })
                // Create empty form data object
                let form = new FormData()
                const cancelToken = axios.CancelToken.source()
                
                // Request a signed upload request object from our API
                fileStore.sign({
                    name: metadata.fileInfo.name,
                    extension: metadata.fileInfo.extension
                }).then((response) => {
                    console.log('Signed', response)
                    // Add AWS S3 signature attributes to file
                    file.additionalData = response.data.additionalData

                    // Add each signature attribute to our form data object
                    for (var field in file.additionalData) {
                        form.append(field, file.additionalData[field])
                    }

                    // Add the file to our form data object
                    form.append('file', file)

                    // Post the file to our AWS S3 bucket
                    fileStore.upload(response.data.attributes.action, form, {
                        
                        // While uploading...
                        onUploadProgress(e) {
                            // inform uploader of the progress
                            progress(e.lengthComputable, e.loaded, e.total)
                        },

                        // Set token for canceling upload
                        cancelToken: cancelToken.token
                    }).then(() => {
                        // Mark complete in uploader by targeting file by it's key
                        load(`${file.additionalData.key}`)
                    })
                })

                return {
                    // Abort callback if canceling
                    abort: () => {
                        cancelToken.cancel()
                        abort()
                    }
                }
            }
        },

        // File is initally added
        onaddfile: (error, file) => {
            if (error) { return }

            // Set metadata on file to be used when we request
            // the signed upload request object from our API
            file.setMetadata('fileInfo', {
                name: file.filenameWithoutExtension,
                extension: file.fileExtension,
                size: file.fileSize
            })
        },

        // File is finished uploading
        onprocessfile: (error, file) => {
            if (error) { return }

            // Remove file from uploads list (delayed)
            setTimeout(function () {
                pond.removeFile(file)
            }.bind(this), 2000)
            
            // Upload the file
            fileStore.store({
                type: file.fileType,
                name: file.filename,
                src: file.serverId,
                size: file.fileSize,
            })
        }
    })
})
</script>

<style lang="scss">
@import 'node_modules/filepond/dist/filepond';

.filepond--root,
.filepond--drop-label label {
    cursor: pointer;
}

.filepond--panel-root {
    border-radius: var(--radius-lg);
}

.filepond--credits {
    display: none;
}

.filepond--item-panel {
    background-color: var(--color-primary);
}

[data-filepond-item-state='processing-complete'] .filepond--item-panel {
    background-color: var(--color-success);
}

.filepond--file-action-button {
    cursor: pointer;
}
</style>
