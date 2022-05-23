<template>
    <ul class="dow-list">
      <li v-for="(file, index) in files" :key="index">
        <div class="dow-list__item padding-xs" @click="select(file)">
          <div class="flex flex-column gap-xs flex-row@xs justify-between@xs items-center@xs">
            <div class="flex items-center">
              <FileIcon :type="file.type" :source="file.src"/>
              

              <!-- file info -->
              <div>
                <h3 class="text-sm line-height-1 margin-bottom-xxxs">{{ file.name }}</h3>
                <ul class="dow-list__metadata-list text-sm text-xs@md color-contrast-medium">
                  <li>Type: {{ file.type }}</li>
                  <li>Size: {{ formatFileSize(file.size) }}</li>
                </ul>
              </div>
            </div>

            <!-- actions -->
            <div class="padding-right-xxxxs@xs"></div>
          </div>
        </div>
      </li>
    </ul>
</template>

<script setup>
import FileIcon from '@/domain/files/components/file-icon/FileIcon.vue'

const props = defineProps({
    files: { type: Array },
    loading: { type: Boolean, default: false },
})

const select = (file) => {
    emit('selected', file)
}

const emit = defineEmits(['selected'])

const formatFileSize = (bites) => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  let l = 0, n = parseInt(bites, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}
</script>

<style lang="scss">
.dow-list {
  display: grid;
  gap: var(--space-xs);
}

.dow-list__item {
  border-radius: var(--radius-md);
  background: var(--color-bg-light);
  box-shadow: var(--inner-glow), var(--shadow-xs);
}

.dow-list__metadata-list {
  display: flex;
  align-items: center;
  line-height: 1;

  > * {
    display: flex;
    align-items: center;
  }

  > *:not(:last-child)::after { /* dot separator */
    content: '';
    display: block;
    flex-shrink: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: currentColor;
    margin: 0 var(--space-xxs);
    opacity: 0.5;
  }
}
</style>
