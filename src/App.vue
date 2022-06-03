<template>
  <div v-if="route.params.organization">
    <AppNavigation />
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppNavigation from '@/app/components/AppNavigation.vue'

const route = useRoute()
</script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
