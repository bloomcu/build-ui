<template>
  <!-- <div v-if="route.params.organization"> -->
  <div>
    <AppNavigation v-if="authStore.isAuthenticated"/>
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import AppNavigation from '@/app/components/AppNavigation.vue'

const authStore = useAuthStore()
</script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
