<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Intro</p>
    <h1>Style Tile Brief</h1>
    <p class="max-width-sm">You will be designing a style tile for a credit union. This document has the information you need to design the style tile, including a Sketch template for you to use.</p>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle(1)" class="btn btn--primary">Start</button>
    </div>
  </div>
</template>

<script setup>
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()
</script>
