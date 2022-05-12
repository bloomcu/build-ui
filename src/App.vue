<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/flowchart">Flowchart</router-link>
  </div>
  
  <router-view />
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import '@/app/styles/styles.scss';
</style>
