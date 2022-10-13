<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 4</p>
    <h1>Get creative!</h1>
    <p>Design the style by applying fonts, colors, images and other elements. Get creative! <strong>The goal is to stay on-brand while elevating the design to be the best it can be</strong>.</p>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle('brief-assets')" class="btn btn--subtle">Back</button>
      <button @click="toggle('brief-more-info')" class="btn btn--primary">Next</button>
    </div>
  </div>
</template>

<script setup>
import useToggle from '@/app/composables/useToggle.js'
const { toggle } = useToggle()
</script>
