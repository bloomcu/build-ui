<template>
  <AppNavigation/>
  <main class="container max-width-lg">
    <slot/>
  </main>
</template>

<script setup>
import AppNavigation from '@/app/components/AppNavigation.vue'
</script>
