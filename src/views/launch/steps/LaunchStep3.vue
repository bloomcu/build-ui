<template>
  <div>
    <!-- Launch -->
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col-10 text-component">
        <span class="text-sm text-uppercase color-contrast-low">Step 3</span>
        <h4>Launch</h4>
        <p>At the time of launch, DNS records for <strong>raiz.us</strong> and <strong>www.raiz.us</strong> will be changed.</p>
      </div>
      <div class="col-12 card card--shadow text-component">
        <p>Point <strong>raiz.us</strong> to <strong>69.167.186.183</strong></p>
        <p><small>Type “A”  |  Data "raiz.us"  |  Name “@”</small></p>
        <div class="border-bottom margin-bottom-sm"></div>
        <p>Point <strong>www.raiz.us</strong> to <strong>69.167.186.183</strong></p>
        <p><small>Type “A”  |  Data "www.raiz.us"  |  Name “www”</small></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppList from '@/app/components/AppList.vue'
</script>
