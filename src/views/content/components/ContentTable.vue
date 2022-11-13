<template>
  <div>
    <!-- Top bar -->
    <div class="flex items-center justify-between padding-bottom-sm">
      <!-- Top bar: left -->
      <div class="flex items-center">
        <span class="text-sm">{{ pageStore.pages.length }} Page(s)</span>
        <button v-if="pageStore.selected.length" @click="pageStore.clearSelectedPages()" class="btn btn--sm margin-left-sm">
          <span class="margin-right-xxs">{{ pageStore.selected.length }} Selected</span>
          <IconClose size="xxs" class="color-primary"/>
        </button>
        
        <!-- <span class="margin-left-xxs">{{ pageStore.selected }}</span> -->
      </div>
      
      <!-- Top bar: right -->
      <div class="flex items-center">
        <button v-if="pageStore.selected.length" @click="pageStore.toggleCategoryModal()" class="btn btn--sm btn--subtle margin-right-xxs">
          <IconEdit size="xxs" class="color-primary"/>
          <span class="margin-left-xxs">Edit</span>
        </button>
        
        <button @click="addNewPage()" class="btn btn--sm btn--subtle">
          <IconPlus size="xxs" class="color-primary"/>
          <span class="margin-left-xxs">Add Page</span>
        </button>
      </div>
    </div><!-- End top bar -->
    
    <!-- Table -->
    <ul class="content-table radius-md text-sm">
        <li 
          v-for="page in pageStore.pages" :key="page.id" 
          @click.self="pageStore.selectPage(page.id, $event)"
          :class="isHighlighting && pageStore.selected.includes(page.id) ? 'content-table-item__highlighted' : null"
          class="content-table-item flex justify-between padding-sm"
        >
          <!-- Left -->
          <div class="flex items-center">
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
              <AppInlineEditor 
                :id="page.id" 
                @updated="updateTitle" 
                class="width-fit text-bold text-sm margin-bottom-xxxs"
              >
                {{ page.title }}
              </AppInlineEditor>
              <a v-if="page.url" :href="page.url" target="_blank" class="width-fit text-xs">{{ page.url }}</a>
              <p v-else class="width-fit text-xs text-underline cursor-pointer">Add URL</p>
            </div>
          </div>
          
          <!-- Right -->
          <div class="flex gap-sm items-center">
            <!-- Category -->
            <ContentCategoryChip 
              :id="page.id" 
              :category="page.category" 
              class="border-right padding-right-sm"
            />
            
            <!-- Status -->
            <ContentStatusToggle
              :id="page.id"
              :status="page.status"
              @mouseover="highlight(page.id)"
              @mouseleave="unhighlight()"
              class="border-right padding-right-sm"
            />
            
            <!-- Destroy -->
            <button @click="pageStore.destroy(page.id)" class="app-action-icon reset">
              <svg class="icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g></svg>
            </button>
          </div><!-- End right -->
        </li><!-- End item -->
    </ul><!-- End content-table -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePageStore } from '@/domain/pages/store/usePageStore'

// import LoadingGhost from '@/components/loading/LoadingGhost.vue'
import AppInlineEditor from '@/app/components/AppInlineEditor.vue'
import ContentStatusToggle from '@/views/content/components/ContentStatusToggle.vue'
import ContentCategoryChip from '@/views/content/components/ContentCategoryChip.vue'
import IconClose from '@/app/components/icons/IconClose.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconEdit from '@/app/components/icons/IconEdit.vue'

const pageStore = usePageStore()
const isHighlighting = ref(false)

function updateTitle(id, titleSlug) {
  pageStore.update(id, {title: titleSlug})
}

function highlight(id) {
  pageStore.selected.includes(id) ? isHighlighting.value = true : isHighlighting.value = false
}

function unhighlight() {
  isHighlighting.value = false
}

function addNewPage() {
  pageStore.store({
    title: 'New page',
  })
}
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
