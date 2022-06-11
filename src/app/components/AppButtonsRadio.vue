<template>
  <div class="btns btns--radio inline-flex">
    <div>
      <input type="radio" name="radio-btns-1" id="radio-1" checked>
      <label class="btns__btn" for="radio-1">Looks Good</label>
    </div>

    <div>
      <input type="radio" name="radio-btns-1" id="radio-2">
      <label class="btns__btn" for="radio-2">Not Sure</label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({})
</script>

<style lang="scss">
.btns--radio, .btns--checkbox {
  > * {
    position: relative;
  }

  input[type="radio"],
  input[type="checkbox"] {
    /* hide native buttons */
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    height: 0;
    width: 0;
    pointer-events: none;
  }

  input[type="radio"] + label,
  input[type="checkbox"] + label {
    user-select: none;
  }

  input[type="radio"]:focus + label,
  input[type="checkbox"]:focus + label {
    z-index: 1;
  }

  input[type="radio"]:checked + label,
  input[type="checkbox"]:checked + label {
    background-color: var(--color-primary);
    color: var(--color-bg);
    box-shadow: var(--shadow-sm);
  }
}

.btns__btn--icon {
  padding: var(--btns-button-padding-y);

  .icon {
    display: block;
  }
}
</style>
