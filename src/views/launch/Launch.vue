<template>
  <LayoutWithoutNavigation maxWidth="xxl">
    <div class="flex container">
      <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
        <LaunchHero/>
        <LaunchStep1/>
        <LaunchStep2/>
        <LaunchStep3/>
        <LaunchStep4/>
        <LaunchStep5/>
      </main>
      <aside class="position-relative z-index-1 width-100% border-left max-width-xxxs padding-y-md padding-x-md">
        <LaunchContacts/>
      </aside>
    </div>
  </LayoutWithoutNavigation>
</template>

<script setup>
import LayoutWithoutNavigation from '@/app/layouts/LayoutWithoutNavigation.vue'
import LaunchHero from '@/views/launch/components/LaunchHero.vue'
import LaunchContacts from '@/views/launch/components/LaunchContacts.vue'
import LaunchStep1 from '@/views/launch/components/steps/LaunchStep1.vue'
import LaunchStep2 from '@/views/launch/components/steps/LaunchStep2.vue'
import LaunchStep3 from '@/views/launch/components/steps/LaunchStep3.vue'
import LaunchStep4 from '@/views/launch/components/steps/LaunchStep4.vue'
import LaunchStep5 from '@/views/launch/components/steps/LaunchStep5.vue'
</script>
