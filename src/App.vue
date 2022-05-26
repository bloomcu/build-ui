<template>
  <!-- <div class="container max-width-lg flex justify-center">
    <div>
      <router-link to="/assets/intake">Assets / Intake</router-link> |
      <router-link to="/survey">Survey</router-link> |
      <router-link to="/flowchart">Flowchart</router-link>
    </div>
  </div> -->
  <AppNavigation/>
  
  <router-view />
</template>

<script setup>
import AppNavigation from '@/app/components/AppNavigation.vue'
</script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
