<template>
  <div class="card card--shadow margin-bottom-md">
    <div class="grid gap-sm">
      <div class="col-10 text-component">
        <span class="text-sm text-uppercase color-primary">Step 1</span>
        <h4>Content freeze</h4>
      </div>
      <div class="col-12">
        <div class="card card--dark">
          <h3 class="text-base margin-bottom-xxs">
            {{ moment(meta.launch_date).subtract(3, 'hours').format('dddd') }}, 
            {{ moment(meta.launch_date).subtract(3, 'hours').format('LL') }}
          </h3>
          <p class="text-sm">
            {{ moment(meta.launch_date).subtract(3, 'hours').format('h:mm A') }} (Mountain)
          </p>
        </div>
      </div>
      <div class="col-12 text-component">
        <p>At this time all changes within WordPress on the development site should stop.</p>
        <p><small>During the content freeze, your data is being migrated from <strong>{{ meta.dev_domain }}</strong> to <strong>{{ meta.prod_domain }}</strong>.</small></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import moment from "moment-timezone"

const meta = reactive({
  launch_date: '2022-08-08 22:00:00',
  dev_domain: 'tfcu.bloomcudev.com',
  prod_domain: 'raiz.us',
  prod_ip: '69.167.186.183',
})
</script>
