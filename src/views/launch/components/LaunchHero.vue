<template>
  <div>
    <!-- Title -->
    <div class="margin-bottom-md">
      <h3>Launch Dashboard</h3>
    </div>
    
    <!-- Vitals -->
    <div class="grid gap-sm margin-bottom-lg">
      <div class="col">
        <div class="card card--shadow height-100% flex flex-column">
          <p class="text-sm margin-bottom-sm">Countdown</p>
          <LaunchCountdown :date="meta.launch_date"/>
        </div>
      </div>
      <div class="col">
        <div class="card card--shadow height-100% flex flex-column">
          <p class="text-sm margin-bottom-sm">Launch date</p>
          <h3 class="font-normal color-primary margin-bottom-xxs">
            {{ moment(meta.launch_date).format('dddd') }}, 
            {{ moment(meta.launch_date).format('LL') }}
          </h3>
          <p class="text-sm">
            {{ moment(meta.launch_date).format('h:mm A') }} (Mountain)
          </p>
        </div>
      </div>
    </div>
    
    <!-- <div class="margin-bottom-xl">
      <LaunchSteps/>
    </div> -->
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import moment from "moment-timezone"

// Components
import LaunchCountdown from '@/views/launch/components/LaunchCountdown.vue'
// import LaunchSteps from '@/views/launch/components/LaunchSteps.vue'

// Stores
import { useLaunchStore } from '@/views/launch/store/useLaunchStore'
const launchStore = useLaunchStore()

const meta = reactive({
  launch_date: '2022-08-14 08:00:00',
  dev_domain: 'tfcu.bloomcudev.com',
  prod_domain: 'raiz.us',
  prod_ip: '69.167.186.183',
})
</script>
