<template>
  <!-- <div v-if="route.params.organization"> -->
  <div>
    <AppNavigation v-if="authStore.organization"/>
    <router-view />
  </div>
</template>

<script setup>
// import { useRoute } from 'vue-router'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'
import AppNavigation from '@/app/components/AppNavigation.vue'

const authStore = useAuthStore()
// const route = useRoute()
</script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
