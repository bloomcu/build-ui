<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 5</p>
    <h1>Get creative!</h1>
    <p>Design the style tile by applying fonts, colors, images and other elements to the Sketch template. Get creative! <strong>The goal is to stay on-brand while elevating the design to be the best it can be</strong>.</p>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle('BriefAssets')" class="btn btn--subtle">Back</button>
      <button @click="toggle('BriefMoreInfo')" class="btn btn--primary">Next</button>
    </div>
  </div>
</template>

<script setup>
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()
</script>
