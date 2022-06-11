<template>
  <button class="chip chip--interactive">
      <i class="chip__label">{{ label }}</i>
    </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
})
</script>

<style lang="scss">
.chip {
  /* reset - in case the class is applied to a <button> or an <a> */
  border: 0;
  color: inherit;
  line-height: 1;
  appearance: none;

  display: inline-flex;
  align-items: center;
  border-radius: 50em;
  
  background-color: alpha(var(--color-contrast-higher), 0.1);
  margin-right: var(--space-xs);
  
  @include fontSmooth;
  
  &:last-child {
    margin-right: 0;
  }
  
  /* 👇 you can ovveride this padding by using the padding utility classes */
  &:not([class^="padding-"]):not([class*=" padding-"]) {
    padding: var(--space-xxxs);
  }
}

.chip--outline {
  background-color: transparent;
  box-shadow: inset 0 0 0 1px alpha(var(--color-contrast-higher), 0.25);
}

.chip--error {
  background-color: alpha(var(--color-error), 0.2);
  color: var(--color-contrast-higher);
}

.chip--success {
  background-color: alpha(var(--color-success), 0.2);
  color: var(--color-contrast-higher);
}

.chip--warning {
  background-color: alpha(var(--color-warning), 0.2);
  color: var(--color-contrast-higher);
}

.chip--interactive {
  cursor: pointer;
  transition: background, box-shadow, transform;
  transition-duration: .2s;

  &:hover {
    background-color: alpha(var(--color-contrast-higher), 0.2);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px alpha(var(--color-contrast-higher), 0.3);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
}

.chip__label {
  padding: 0 var(--space-xxs);
}
</style>
