<template>
  <div class="card card--is-link">
    <a class="card__link" href="#0" aria-label="Description of the link">
      <figure class="card__img">
        <img :src="image">
      </figure>
    
      <div class="card__content">
        <p class="text-bold margin-bottom-xxxs">{{ title }}</p>
        <p class="text-sm color-contrast-medium">{{ subtitle }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
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
</script>

<style lang="scss" scoped>
.card {
  padding: 0;
}

.card__img {
  
  
  img {
    display: block;
    border-radius: var(--space-xxs) var(--space-xxs) 0 0;
    width: 100%;
  }
}

.card__content {
  padding: var(--space-xs);
}

// --link
.card--is-link {
  will-change: box-shadow;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: var(--inner-glow), var(--shadow-md);

    .card__img::after {
      opacity: 1;
    }
  }

  .card__img {
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

.card__link {
  text-decoration: none;
  display: block;
  color: inherit;
}
</style>
