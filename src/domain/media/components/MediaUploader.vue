<template>
  <div>
    <input type="file" name="uploader" id="uploader" ref="uploader" multiple>
  </div>
</template>

<script setup>
import axios from 'axios'
import * as Filepond from 'filepond'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

import { ref, onMounted } from 'vue'
import { useMediaStore } from '@/domain/media/store/useMediaStore'

const uploader = ref() // Input binding
const mediaStore = useMediaStore()

Filepond.registerPlugin(FilePondPluginFileValidateSize)

onMounted(() => {
  const pond = Filepond.create(uploader.value, {
    allowRevert: false,
    allowFileSizeValidation: true,
    maxFileSize: '100MB',

    // Process files
    server: {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        const cancelToken = axios.CancelToken.source()
        
        mediaStore.store(file, props.collection, props.tag, {
          onUploadProgress: event => {
            progress(e.lengthComputable, e.loaded, e.total)
          },
          cancelToken: cancelToken.token
        })
        .then((response) => {
          load(file.name)
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
}) // End onMounted

const props = defineProps({
  collection: {
    type: String, 
    default: 'default',
  },
  tag: { 
    type: String,
  },
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
