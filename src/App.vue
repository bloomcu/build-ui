<template>
  <div class="container max-width-lg flex justify-center">
    <div>
      <router-link to="/intake">Intake</router-link> |
      <router-link to="/survey">Survey</router-link> |
      <router-link to="/flowchart">Flowchart</router-link>
    </div>
  </div>
  
  <router-view />
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
