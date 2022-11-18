<template>
  <ul class="content-table radius-md text-sm">
      <li 
        v-for="page in pageStore.pages" :key="page.id" 
        @click.self="pageStore.selectPage(page.id, $event)"
        :class="pageStore.selected.includes(page.id) ? 'content-table-item__highlighted' : null"
        class="content-table-item flex justify-between padding-sm"
      >
        <!-- Left -->
        <!-- TODO: Take care of the inline style below -->
        <div 
          class="flex items-center"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 46%;"
        >
          <!-- Checkbox -->
          <div class="flex items-center border-right padding-left-xs padding-right-sm margin-right-md">
            <input
              :checked="pageStore.selected.includes(page.id)" 
              class="checkbox" 
              type="checkbox" 
              :id="page.id"
            />
            <label :for="page.id"/>
          </div>
          
          <!-- Title & URL -->
          <div class="margin-right-xs padding-y-xxxs">
            <!-- Title -->
            <AppInlineEditor 
              :id="page.id" 
              @updated="updateTitle" 
              class="width-fit text-bold text-sm margin-bottom-xxxs"
            >
              {{ page.title }}
            </AppInlineEditor>
            
            <!-- Url -->
            <a v-if="page.url" :href="page.url" target="_blank" class="text-xs color-contrast-low width-fit">{{ page.url }}</a>
            
            <AppInlineEditor 
              v-else
              :id="page.id" 
              @updated="addUrl" 
              class="width-fit text-xs color-contrast-low cursor-pointer"
            >
              + Add URL
            </AppInlineEditor>
            <!-- <p v-else class="text-xs color-contrast-low text-underline width-fit cursor-pointer">Add URL</p> -->
          </div>
        </div>
        
        <!-- Right -->
        <div class="flex gap-sm items-center">
          <!-- Category -->
          <ContentCategory 
            :id="page.id" 
            :category="page.category" 
            class="border-right padding-right-sm"
          />
          
          <!-- Status -->
          <ContentStatus
            :id="page.id"
            :status="page.status"
            class="border-right padding-right-sm"
          />
          
          <!-- Destroy -->
          <button 
            @click="destroy(page.id)" 
            class="app-action-icon reset"
          >
            <svg class="icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g></svg>
          </button>
        </div>
      </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { usePageStore } from '@/domain/pages/store/usePageStore'

import AppInlineEditor from '@/app/components/AppInlineEditor.vue'
import ContentStatus from '@/views/content/components/ContentStatus.vue'
import ContentCategory from '@/views/content/components/ContentCategory.vue'

const pageStore = usePageStore()
const isHighlighting = ref(false)

function updateTitle(id, title) {
  pageStore.update([id], {title: title})
}

function addUrl(id, url) {
  pageStore.update([id], {url: url})
}

function destroy(id) {
  // Add to array if not present.
  // TODO: Abstract this away
  let index = pageStore.selected.indexOf(id)
      index === -1 ? pageStore.selected.push(id) : null
      
  pageStore.destroy(pageStore.selected)
}

// function highlight(id) {
//   pageStore.selected.includes(id) ? isHighlighting.value = true : isHighlighting.value = false
// }
// 
// function unhighlight() {
//   isHighlighting.value = false
// }
</script>

<style lang="scss">
.content-table {
  position: relative;
  border: 1px solid var(--color-contrast-lower);
}

.content-table-item {
  user-select: none;
  cursor: pointer;
  transition: .3s;
  border-bottom: 1px solid var(--color-contrast-lower);
  
  &__highlighted {
    background-color: alpha(var(--color-primary), 0.10) !important;
  }
  
  &:last-child {
    border: none;
  }

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.03);
  }
}

.content-table-item__action {
  cursor: pointer;
}
</style>
