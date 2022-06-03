<template>
    <ul class="dow-list">
      <li v-for="(file, index) in files" :key="index">
        <div @click="select(file)" class="dow-list__item cursor-pointer padding-xxs">
          <div class="flex flex-column gap-xs flex-row@xs justify-between@xs items-center@xs">
            <div class="flex items-center">
              <FileIcon :type="file.type" :source="file.src"/>
              
              <!-- file info -->
              <div>
                <p class="text-sm line-height-1 margin-bottom-xxxs">{{ file.name }}</p>
                <ul class="dow-list__metadata-list text-sm text-xs@md color-contrast-medium">
                  <li>Type: {{ file.type }}</li>
                  <li>Size: {{ formatFileSize(file.size) }}</li>
                </ul>
              </div>
            </div>

            <!-- actions -->
            <div class="padding-right-xxxxs@xs">
              <button @click.stop="destroy" class="app-action reset margin-right-sm" type="button" name="button">
                <svg class="icon" height="24" width="24" viewBox="0 0 24 24"><title>trash can</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#000000" stroke-linejoin="round" class="nc-icon-wrapper"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5" stroke="#000000"></line><path data-cap="butt" d="M8,5V1h8V5" stroke="#000000"></path></g></svg>
              </button>
            </div>
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

function select(file) {
    emit('selected', file)
}

function destroy(file) {
    emit('destroyed', file)
}

const emit = defineEmits(['selected', 'destroyed'])

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
  background: var(--color-bg);
  box-shadow: var(--inner-glow), var(--shadow-sm);
  transition: 0.2s;
  
  &:hover {
    background: var(--color-bg-dark);
  }
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
