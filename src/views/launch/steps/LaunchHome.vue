<template>
  <div>
    <!-- Hero -->
    <div class="margin-bottom-lg">
      <h3>Launch Dashboard</h3>
    </div>
    
    <!-- Vitals -->
    <div class="grid gap-sm margin-bottom-lg">
      <div class="col">
        <div class="card shadow-sm padding-sm height-100% flex flex-column">
          <p class="text-sm margin-bottom-sm">Countdown</p>
          <LaunchCountdown
            :year="2022"
            :month="8"
            :day="8"
            :hour="22"
            :minute="0"
            :second="0"
            :millisecond="0"
          />
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm padding-sm height-100% flex flex-column">
          <p class="text-sm margin-bottom-sm">Launch date</p>
          <h3 class="text-md color-primary margin-bottom-xxs">Monday, August 27, 2022</h3>
          <p class="text-sm">10:00 PM (Mountain)</p>
        </div>
      </div>
    </div>
    
    <div class="margin-bottom-xl">
      <LaunchSteps/>
    </div>
  </div>
</template>

<script setup>
import LaunchCountdown from '@/views/launch/components/LaunchCountdown.vue'
import LaunchSteps from '@/views/launch/components/LaunchSteps.vue'
</script>
