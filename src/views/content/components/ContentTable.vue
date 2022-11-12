<template>
  <div>
    <!-- <LoadingGhost v-if="loading"/> -->
    
    <!-- Top bar -->
    <div class="flex items-center justify-between padding-bottom-sm">
      <!-- Left -->
      <div class="flex items-center">
        <span class="text-sm">{{ pageStore.pages.length }} Page(s)</span>
        <button @click="pageStore.clearSelectedPages()" class="btn btn--sm margin-left-sm">
          <span class="margin-right-xxs">{{ pageStore.selected.length }} Selected</span>
          <IconClose size="xxs" class="color-primary"/>
        </button>
        
        <span class="margin-left-xxs">{{ pageStore.selected }}</span>
      </div>
      
      <!-- Right -->
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
    <ul class="content-table border radius-md text-sm">
        <!-- Page -->
        <!-- Todo: Move the style tag on this to a class -->
        <li 
          v-for="page in pageStore.pages" :key="page.id" 
          @click.self="pageStore.selectPage(page.id, $event)"
          :class="isHighlighting && pageStore.selected.includes(page.id) ? 'content-table-item__highlighted' : null"
          class="content-table-item flex justify-between padding-sm"
          style="user-select: none;"
        >
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
              <AppInlineEditor :id="page.id" @updated="updatePageTitle" class="width-fit text-bold text-sm margin-bottom-xxxs">
                {{ page.title }}
              </AppInlineEditor>
              <a v-if="page.url" :href="page.url" target="_blank" class="width-fit text-xs">{{ page.url }}</a>
              <p v-else class="width-fit text-xs text-underline cursor-pointer">Add URL</p>
            </div>
          </div>
          
          <!-- Right -->
          <div class="flex items-center">
            <!-- Status -->
            <div class="flex items-center border-right padding-right-md margin-right-md margin-left-auto">
              <ContentStatus
                :id="page.id"
                :status="page.status"
                @updated="updatePageStatus"
                @mouseover="highlightSelected(page.id)"
                @mouseleave="stopHighlighting()"
              />
            </div>
            
            <!-- Tags -->
            <div class="flex items-center border-right padding-right-md margin-right-sm margin-left-auto">
              <AppChip label="Personal"/>
            </div>
            
            <!-- Destroy -->
            <div class="flex items-center margin-left-auto">
              <button @click="pageStore.destroy(page.id)" class="app-action-icon reset" type="button" name="button">
                <svg class="icon" viewBox="0 0 24 24">
                  <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                </svg>
              </button>
            </div>
          </div>
        </li><!-- End item -->
    </ul><!-- End content-table -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePageStore } from '@/domain/pages/store/usePageStore'

// import LoadingGhost from '@/components/loading/LoadingGhost.vue'
import AppInlineEditor from '@/app/components/AppInlineEditor.vue'
import ContentStatus from '@/views/content/components/ContentStatus.vue'
import AppChip from '@/app/components/AppChip.vue'
import IconClose from '@/app/components/icons/IconClose.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconEdit from '@/app/components/icons/IconEdit.vue'

const pageStore = usePageStore()
const isHighlighting = ref(false)

function addNewPage() {
  pageStore.store({
    title: 'New page',
  })
}

function updatePageTitle(id, title) {
  pageStore.update(id, {title: title})
}

function updatePageStatus(id, status) {
  pageStore.update(id, {status: status})
}

function highlightSelected(id) {
  pageStore.selected.includes(id) ? isHighlighting.value = true : isHighlighting.value = false
}

function stopHighlighting() {
  isHighlighting.value = false
}
</script>

<style>
/* :root {
  --item-figure-size: 30px;
} */
</style>

<style lang="scss">
.content-table {
  position: relative;
}

.content-table-item {
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

// .content-table-item__figure {
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: var(--item-figure-size);
//   height: var(--item-figure-size);
//   border-radius: 50%;
//   overflow: hidden;
//   flex-shrink: 0;
// 
//   > * {
//       position: relative;
//       z-index: 1;
//   }
// 
//   img {
//       display: block;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//   }
// 
//   &::before { // background
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border-radius: inherit;
//     background-color: currentColor;
//     opacity: 0.15;
//   }
// }
</style>
