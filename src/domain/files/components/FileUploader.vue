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
  folder: { type: String },
  group: { type: String }
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
                const folder = props.folder
                const group = props.group
                
                const uploadConfig = {
                  onUploadProgress: event => {
                      progress(e.lengthComputable, e.loaded, e.total)
                  },
                  cancelToken: cancelToken.token
                }
                
                fileStore.store(file, folder, group, uploadConfig).then((response) => {
                  load(response.data.asset_id)
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
    background: var(--color-bg-dark);
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
