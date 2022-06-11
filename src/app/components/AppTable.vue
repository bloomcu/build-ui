<template>
  <div>
    <!-- <LoadingGhost v-if="loading"/> -->
    
    <!-- Top bar -->
    <div class="card flex items-center justify-between padding-sm margin-bottom-sm">
      <!-- Left -->
      <div class="flex items-center">
        <span class="text-sm">12 Pages</span>
        <button class="btn btn--sm margin-left-sm">
          <span class="margin-right-xxs">1 Selected</span>
          <IconClose size="xxs" class="color-primary"/>
        </button>
      </div>
      
      <!-- Right -->
      <div class="flex items-center">
        <button class="btn btn--sm btn--primary margin-right-xs">
          <IconEdit size="xxs" class="color-white"/>
          <span class="margin-left-xxs">Edit</span>
        </button>
        
        <button class="btn btn--sm btn--subtle">
          <IconPlus size="xxs" class="color-primary"/>
          <span class="margin-left-xxs">Add Page</span>
        </button>
      </div>
    </div><!-- End top bar -->
    
    <!-- Table -->
    <ul class="table card text-sm">
        <!-- Item -->
        <li v-for="item in items" :key="item.id" class="table-item flex padding-sm">
          <!-- Checkbox -->
          <div class="flex items-center border-right padding-left-xs padding-right-sm margin-right-md">
            <input class="checkbox" type="checkbox" :id="item.id">
            <label :for="item.id"/>
          </div>

          <!-- Statuses -->
          <div class="flex items-center border-right padding-right-md margin-right-md margin-left-auto">
            <AppButtonsRadio/>
          </div>

          <!-- Title & URL -->
          <div class="flex-grow margin-right-xs padding-y-xxxs">
            <h3 class="text-sm margin-bottom-xxxs">{{ item.title }}</h3>
            <p class="text-xs">https://google.com</p>
          </div>

          <!-- Tags -->
          <div class="flex items-center border-right padding-right-md margin-right-sm margin-left-auto">
            <AppChip label="Personal"/>
            <AppChip label="Product"/>
          </div>
          
          <!-- Destroy -->
          <div class="flex items-center margin-left-auto">
            <button @click="destroy(item.id)" class="app-action-icon reset" type="button" name="button">
              <svg class="icon" viewBox="0 0 24 24">
                <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
              </svg>
            </button>
          </div>
        </li><!-- End item -->
    </ul><!-- End table -->
  </div>
</template>

<script setup>
// TODO: Hookup the loading ghost
// import LoadingGhost from '@/components/loading/LoadingGhost.vue'
import AppButtonsRadio from '@/app/components/AppButtonsRadio.vue'
import AppChip from '@/app/components/AppChip.vue'
import IconClose from '@/app/components/icons/IconClose.vue'
import IconPlus from '@/app/components/icons/IconPlus.vue'
import IconEdit from '@/app/components/icons/IconEdit.vue'

const props = defineProps({ 
  items: { type: Array },
  loading: { type: Boolean, default: false },
})

const destroy = (id) => {
  emit('destroy', id)
}

const emit = defineEmits(['replicate', 'destroy'])
</script>

<style>
:root {
    --item-figure-size: 30px;
}
</style>

<style lang="scss">
.table {
  position: relative;
}

.table-item {
  transition: .1s;
  border-bottom: 1px solid var(--color-contrast-lower);
    
  &:last-child {
  border: none;
  }

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.03);
  }
}

.table-item__action {
  cursor: pointer;
}

.table-item__figure {
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
