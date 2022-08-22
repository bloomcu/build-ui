<template>
  <div class="card card--is-link">
    <div class="card__link">
      <figure @click="select()" class="card-img cursor-pointer">
        <img :src="file.original_url">
        <div class="card__link-icon" aria-hidden="true">
          <svg class="icon" viewBox="0 0 32 32"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="round"><line x1="13" y1="9" x2="13" y2="17"></line><line x1="17" y1="13" x2="9" y2="13"></line><line x1="29" y1="29" x2="24" y2="24"></line><circle cx="13" cy="13" r="11"></circle></g></svg>
        </div>
      </figure>
    </div>
  
    <div class="card-content">
      <div class="card-content__header">
        <p class="text-bold margin-bottom-xxxs">{{ file.name }}</p>
        <p class="text-sm color-contrast-medium margin-bottom-sm">{{ file.extension }}</p>
      </div>
      <div class="flex items-center gap-xs">
        <a :href="`${baseURL}/media/${file.uuid}`" :download="file.name"  class="btn btn--sm btn--primary">
          <svg class="icon margin-right-xs"  height="24" width="24" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#fff" stroke-linejoin="round"><line data-cap="butt" x1="12" y1="16" x2="12" y2="3" stroke="#fff"></line><polyline points="17,3 23,3 23,21 1,21 1,3 7,3"></polyline><polyline points=" 17,11 12,16 7,11" stroke="#fff"></polyline></g></svg>
          Download
        </a>
        <button v-if="deleteable" @click.stop="destroy()" class="btn btn--sm btn--subtle">
          <svg class="icon" height="24" width="24" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#000000" stroke-linejoin="round"><path d="M20,9l-.867,12.142A2,2,0,0,1,17.138,23H6.862a2,2,0,0,1-1.995-1.858L4,9"></path><line x1="1" y1="5" x2="23" y2="5" stroke="#000000"></line><path data-cap="butt" d="M8,5V1h8V5" stroke="#000000"></path></g></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: Change this component to be MediaCard.vue
function select() {
    emit('selected', props.file)
}

function destroy() {
    emit('destroyed', props.file)
}

const emit = defineEmits(['selected', 'destroyed'])

const baseURL = import.meta.env.VITE_API_BASE_URL

const props = defineProps({
  file: {
    type: Object,
    required: true,
  },
  deleteable: { 
    type: Boolean, 
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.card {
  padding: 0;
}

.card-img {
  img {
    object-fit: fill;
    width: 100%;
    height: 180px;
    border-radius: var(--space-xxs) var(--space-xxs) 0 0;
  }
}

.card-content {
  padding: var(--space-xs);
  
  &__header {
    height: 80px;
  }
}

.card--is-link {
  will-change: box-shadow;
  transition: box-shadow 0.2s;
  
  &:hover {
    box-shadow: var(--inner-glow), var(--shadow-md);

    .card-img::after {
      opacity: 1;
    }
  }

  .card-img {
    position: relative;

    // &::after { // overlay layer
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background-color: alpha(var(--color-black), 0.4);
    //   opacity: 0;
    //   transition: opacity 0.2s;
    // }
  }
}

.card__link {
  text-decoration: none;
  display: block;
  color: inherit;
}

.card__link-icon {
  position: absolute;
  z-index: 1;
  width: 64px;
  height: 64px;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  background-color: alpha(var(--color-white), 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.2s;

  .icon {
    display: block;
    width: 32px;
    height: 32px;
    color: var(--color-black); // icon color
  }
}

.card--is-link:hover .card__link-icon {
  opacity: 1;
}
</style>
