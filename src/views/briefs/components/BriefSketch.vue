<template>
  <div>
    <p class="text-xs text-uppercase letter-spacing-lg color-primary">Step 1</p>
    <h1>Download the Sketch template</h1>
    <p>Instead of starting from scratch, we created a template for you:</p>
    <a href="https://drive.google.com/drive/folders/0B7-Yu0hS6RztS0diaXhCZjR4Mk0?resourcekey=0-9WlEQYapCWrmbEaIRG-tgw&usp=sharing" target="_blank" class="btn btn--primary margin-bottom-sm" @click="sketchTemplateDownloaded = true">
      <svg class="icon margin-right-xxs" viewBox="0 0 24 22"><g><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#FDB300" d="M5.236.715L12 0l6.764.715L24 7.745 12 21.717 0 7.744z"></path><g transform="translate(0 7.744)"><path fill="#EA6C00" d="M4.86 0L12 13.974 0 0z"></path><path fill="#EA6C00" transform="matrix(-1 0 0 1 36 0)" d="M16.86 0L24 13.974 12 0z"></path><path fill="#FDAD00" d="M4.86 0h14.28L12 13.974z"></path></g><g><path fill="#FDD231" d="M12 0L5.236.715l-.375 7.03z"></path><path fill="#FDD231" transform="matrix(-1 0 0 1 31.14 0)" d="M19.14 0l-6.764.715L12 7.745z"></path><path fill="#FDAD00" transform="matrix(-1 0 0 1 42.764 0)" d="M18.764 7.744L24 .715l-.376 7.03z"></path><path fill="#FDAD00" d="M0 7.744L5.236.715l-.375 7.03z"></path><path id="Path" fill="#FEEEB7" d="M12 0L4.86 7.744h14.28z"></path></g></g></g></g></svg>
      Download Sketch style tile template
    </a>
    <p class="max-width-sm"><strong>IMPORTANT:</strong> Please don’t delete the variables, blocks, or anything else that’s part of the Sketch template (also don’t disconnect the symbols). We will need all of those things during the next stage of our project. Thanks!﻿</p>
    
    <div class="flex gap-xs margin-top-md padding-y-md border-top">
      <button @click="toggle('BriefIntro')" class="btn btn--subtle">Back</button>
      <button v-if="!sketchTemplateDownloaded" class="btn btn--primary btn--disabled">Next</button>
      <button v-else @click="toggle('BriefVideo')" class="btn btn--primary">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()
const sketchTemplateDownloaded = ref(false)
</script>
