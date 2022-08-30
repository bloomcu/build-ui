<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Intro</p>
    <h1>Style Design Brief</h1>
    <p class="max-width-sm">You will be designing a website style for a credit union. This document has the information you need to design the style.</p>

    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle('BriefVideo')" class="btn btn--primary">Start</button>
    </div>
  </div>
</template>

<script setup>
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()
</script>
