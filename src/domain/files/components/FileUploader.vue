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

const props = defineProps({
    group: { 
      // Optionally assign files to a group
      type: String, 
      optional: true 
    }
})

const uploader = ref() // Input binding

const fileStore = useFileStore()

onMounted(() => {
    const pond = Filepond.create(uploader.value, {
        allowRevert: false,

        // Process files
        server: {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                const cancelToken = axios.CancelToken.source()
                
                let form = new FormData()
                form.append('file', file)
                form.append('upload_preset', 'metrifi-unsigned');
                form.append('cloud_name', 'metrifi');
                
                const config = {
                  onUploadProgress: event => {
                      // inform uploader of the progress
                      progress(e.lengthComputable, e.loaded, e.total)
                  },
                  
                  // Set token for canceling upload
                  cancelToken: cancelToken.token
                }
                
                // Upload to Cloudinary
                axios.post('https://api.cloudinary.com/v1_1/metrifi/upload', form)
                  .then(function (response) {
                    console.log('Cloudinary response', response);
                    
                    // Save to Laravel db
                    fileStore.store({
                        group: props.group ? props.group : 'general',
                        type: response.data.format ? response.data.format : file.name.split('.').pop(),
                        name: response.data.original_filename,
                        size: response.data.bytes,
                        public_id: response.data.public_id,
                        src: response.data.secure_url,
                    })
                    
                    // Show file as loaded
                    load(response.data.asset_id)
                  })
                  .catch(function (error) {
                    console.log('Cloudinary error', error);
                  });

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
        },

        // File is finished uploading
        onprocessfile: (error, file) => {
            if (error) { return }

            // Remove file from uploads list (delayed)
            setTimeout(function () {
                pond.removeFile(file)
            }.bind(this), 2000)
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
