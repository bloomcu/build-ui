<template>
  <div>
    <!-- <LoadingGhost v-if="loading"/> -->
    
    <!-- Top bar -->
    <div class="flex items-center justify-between padding-bottom-sm margin-bottom-sm">
      <!-- Left -->
      <div class="flex items-center">
        <span class="text-sm">{{ pageStore.pages.length }} Page(s)</span>
        <button @click="pageStore.clearSelectedPages()" class="btn btn--sm margin-left-sm">
          <span class="margin-right-xxs">{{ pageStore.selected.length }} Selected</span>
          <IconClose size="xxs" class="color-primary"/>
        </button>
        {{ pageStore.selected }}
      </div>
      
      <!-- Right -->
      <div class="flex items-center">
        <button @click="store()" class="btn btn--sm btn--subtle">
          <IconPlus size="xxs" class="color-primary"/>
          <span class="margin-left-xxs">Add Page</span>
        </button>
      </div>
    </div><!-- End top bar -->
    
    <!-- Table -->
    <ul class="content-table border radius-md text-sm">
        <!-- Page -->
        <li 
          v-for="page in pageStore.pages" :key="page.id" 
          @click.stop="pageStore.selectPage(page.id, $event)"
          class="content-table-item flex cursor-pointer padding-sm"
          style="user-select: none;"
        >
          <!-- Checkbox -->
          <div class="flex items-center border-right padding-left-xs padding-right-sm margin-right-md">
            <input :checked="pageStore.selected.includes(page.id)" class="checkbox" type="checkbox" :id="page.id">
            <label :for="page.id"/>
          </div>
          
          <!-- Title & URL -->
          <div class="flex-grow margin-right-xs padding-y-xxxs">
            <h3 class="width-fit text-sm margin-bottom-xxxs">{{ page.title }}</h3>
            <a v-if="page.url" :href="page.url" target="_blank" class="width-fit text-xs">{{ page.url }}</a>
            <p v-else class="width-fit text-xs text-underline cursor-pointer">Add URL</p>
          </div>
          
          <!-- Statuses -->
          <div class="flex items-center border-right padding-right-md margin-right-md margin-left-auto">
            <AppButtonsRadio/>
          </div>
          
          <!-- Tags -->
          <div class="flex items-center border-right padding-right-md margin-right-sm margin-left-auto">
            <AppChip label="Personal"/>
          </div>
          
          <!-- Destroy -->
          <div class="flex items-center margin-left-auto">
            <button @click="destroy(page.id)" class="app-action-icon reset" type="button" name="button">
              <svg class="icon" viewBox="0 0 24 24">
                <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
              </svg>
            </button>
          </div>
        </li><!-- End item -->
    </ul><!-- End content-table -->
  </div>
</template>

<script setup>
import { usePageStore } from '@/domain/pages/store/usePageStore'

// import LoadingGhost from '@/components/loading/LoadingGhost.vue'
import AppButtonsRadio from '@/app/components/AppButtonsRadio.vue'
import AppChip from '@/app/components/AppChip.vue'
import IconClose from '@/app/components/icons/IconClose.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconEdit from '@/app/components/icons/IconEdit.vue'

const pageStore = usePageStore()

function store() {
  pageStore.store({
    title: 'New page'
  })
}

function destroy(id) {
  pageStore.destroy(id)
}
</script>

<style>
:root {
  --item-figure-size: 30px;
}
</style>

<style lang="scss">
.content-table {
  position: relative;
}

.content-table-item {
  transition: .1s;
  border-bottom: 1px solid var(--color-contrast-lower);
    
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

.content-table-item__figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--item-figure-size);
  height: var(--item-figure-size);
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  > * {
      position: relative;
      z-index: 1;
  }

  img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  &::before { // background
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    opacity: 0.15;
  }
}
</style>
