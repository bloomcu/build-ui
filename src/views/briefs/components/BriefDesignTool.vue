<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 1</p>
    <h1>Log into design tool</h1>
    <p>We shared your URL and credentials. Use that information now to get started.</p>
    
    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle('BriefVideo')" class="btn btn--subtle">Back</button>
      <button @click="toggle('BriefBrand')" class="btn btn--primary">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()
const sketchTemplateDownloaded = ref(false)
</script>
