<template>
    <div>
        <!-- <LoadingGhost v-if="loading"/> -->
        
        <ul class="app-table text-sm">
            <li v-for="(item, index) in items" :key="index" class="item flex padding-sm">
                <!-- Left -->
                <div class="flex-grow margin-right-xs padding-y-xxxs">
                    <h2 class="text-base margin-bottom-xxxs">{{ item.title }}</h2>
                    <p>https://google.com</p>
                </div>

                <!-- Center -->
                <div class="flex items-center margin-left-auto">
                    <button @click="replicate(item.id)" class="app-action-icon reset margin-right-sm" type="button" name="button">
                        <svg class="icon" viewBox="0 0 24 24">
                            <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><polyline points="8,8 8,1 23,1 23,16 16,16 "></polyline><polyline points="14,23 16,23 16,21 "></polyline><polyline points="1,21 1,23 3,23 "></polyline><polyline points="3,8 1,8 1,10 "></polyline><line x1="10" y1="23" x2="7" y2="23"></line><polyline points="14,8 16,8 16,10 "></polyline><line x1="10" y1="8" x2="7" y2="8"></line><line x1="1" y1="17" x2="1" y2="14"></line><line x1="16" y1="17" x2="16" y2="14"></line></g>
                        </svg>
                    </button>

                    <button @click="destroy(item.id)" class="app-action-icon reset margin-right-sm" type="button" name="button">
                        <svg class="icon" viewBox="0 0 24 24">
                            <g stroke-linecap="square" stroke-miterlimit="10" fill="none" stroke="currentColor" stroke-linejoin="miter"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5"></line><path data-cap="butt" d="M8,5V1h8V5" stroke-linecap="butt"></path></g>
                        </svg>
                    </button>
                    
                    <!-- Status -->
                    <!-- <div v-if="item.was_published && item.has_changes" class="status-dot status-dot--orange margin-left-sm" aria-hidden="true"></div>
                    <div v-else-if="item.was_published" class="status-dot status-dot--success margin-left-sm" aria-hidden="true"></div>
                    <div v-else class="status-dot margin-left-sm" aria-hidden="true"></div> -->
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
// TODO: Hookup the loading ghost
// import LoadingGhost from '@/components/loading/LoadingGhost.vue'

const props = defineProps({ 
    items: { type: Array },
    loading: { type: Boolean, default: false },
})

const replicate = (id) => {
    emit('replicate', id)
}

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
.app-table {
    position: relative;
    border: 1px solid var(--color-contrast-lower);
    border-radius: var(--radius-md);
}

.item {
    transition: .1s;
    border-bottom: 1px solid var(--color-contrast-lower);
    
    &:last-child {
      border: none;
    }

    &:hover {
        background-color: alpha(var(--color-contrast-higher), 0.03);
    }
}

.item__action {
    cursor: pointer;
}

.item__figure {
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
