<template>
  <div class="card-v14 padding-sm flex flex-column">
    <figure class="card-v14__icon-wrapper margin-bottom-xs" aria-hidden="true">
      <svg class="card-v14__icon icon" viewBox="0 0 24 24">
        <rect x="1" y="1" width="10" height="10" rx="2"></rect>
        <path d="M23.428,4.618,19.381.572h0a1.957,1.957,0,0,0-2.762,0L12.572,4.618a1.959,1.959,0,0,0,0,2.764l4.047,4.047a1.957,1.957,0,0,0,2.762,0l4.047-4.046A1.959,1.959,0,0,0,23.428,4.618Z" opacity="0.5"></path>
        <rect x="13" y="13" width="10" height="10" rx="2"></rect>
        <rect x="1" y="13" width="10" height="10" rx="2"></rect>
      </svg>
    </figure>

    <h3 class="text-md">{{ title }}</h3>
    <p v-if="subtitle" class="color-contrast-medium line-height-md margin-y-xs">{{ subtitle }}</p>
    <!-- <p class="text-right color-primary margin-top-auto">Button Label →</p> -->
  </div>
</template>

<script setup>
const props = defineProps({
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
.card-v14 {
  background-color: var(--color-bg-light);
  // box-shadow: var(--inner-glow), var(--shadow-sm);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-contrast-lower);
  
  color: inherit;
  text-decoration: none;

  transition: .3s;

  &:hover {
    // background-color: var(--color-bg-lighter);
    box-shadow: var(--inner-glow), var(--shadow-sm);
  	// border-color: var(--color-contrast-low);
  }
}

.card-v14__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: alpha(var(--color-accent), 0.2);
}

.card-v14__icon {
  --size: 24px;
  color: var(--color-accent);
}
</style>
