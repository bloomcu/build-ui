<template>
  <div class="card card--is-link">
    <figure class="card-img">
      <img :src="image">
    </figure>
  
    <div class="card-content">
      <div class="card-content__header">
        <p class="text-bold margin-bottom-xxxs">{{ title }}</p>
        <p class="text-sm color-contrast-medium margin-bottom-sm">{{ subtitle }}</p>
      </div>
      <div class="flex items-center gap-xs">
        <button class="btn btn--sm btn--primary">View</button>
        <a @click.stop="download()" class="btn btn--sm btn--subtle">Download</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: Change this component to be MediaCard.vue
const props = defineProps({
  uuid: {
    type: String,
  },
  title: { 
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  subtitle: { 
    type: String,
  },
})

function download() {
  window.open(`${baseURL}/media/${props.uuid}`)
}

const baseURL = import.meta.env.VITE_API_BASE_URL
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
  // margin-top: var(--space-sm);
  padding: var(--space-xs);
  
  &__header {
    height: 80px;
  }
}

.card--is-link {
  will-change: box-shadow;
  transition: box-shadow 0.2s;
  cursor: pointer;
  
  &:hover {
    box-shadow: var(--inner-glow), var(--shadow-md);

    .card-img::after {
      opacity: 1;
    }
  }

  .card-img {
    position: relative;
    
    img {
      height: 200px;
    }

    &::after { // overlay layer
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: alpha(var(--color-black), 0.4);
      opacity: 0;
      transition: opacity 0.2s;
    }
  }
}
</style>
