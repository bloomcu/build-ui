<template>
  <div class="card card--is-link">
    <a class="card__link" href="#0" aria-label="Description of the link">
      <figure class="card__img">
        <img :src="image" class="height-xxxxl">
      </figure>
    
      <div class="card__content">
        <div class="text-component">
          <h4>{{ title }}</h4>
          <p class="text-sm color-contrast-medium">{{ subtitle }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  title: { 
    type: String,
    required: true,
  },
  subtitle: { 
    type: String,
  },
})
</script>

<style lang="scss">
.card {
  background-color: var(--color-bg-light);
  box-shadow: var(--inner-glow), var(--shadow-sm);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.card__img {
  img {
    display: block;
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
