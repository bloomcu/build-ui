<template>
  <div class="card card--shadow margin-bottom-md">
    <div class="grid gap-sm">
      <div class="col-10 text-component">
        <span class="text-sm text-uppercase color-primary">Step 3</span>
        <h4>Launch</h4>
        <p>At the time of launch, DNS records for <strong>{{ meta.prod_domain }}</strong> and <strong>www.{{ meta.prod_domain }}</strong> will be changed.</p>
      </div>
      <div class="col-12 card card--dark text-component">
        <h5 class="margin-bottom-xxs">Point <strong>{{ meta.prod_domain }}</strong> to <strong>{{ meta.prod_ip }}</strong></h5>
        <p class="text-sm">Type “A”  |  Data "{{ meta.prod_domain }}"  |  Name “@”</p>
        <div class="border-bottom margin-bottom-sm"></div>
        <h5 class="margin-bottom-xxs">Point <strong>www.{{ meta.prod_domain }}</strong> to <strong>{{ meta.prod_ip }}</strong></h5>
        <p class="text-sm">Type “A”  |  Data "www.{{ meta.prod_domain }}"  |  Name “www”</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import AppList from '@/app/components/AppList.vue'

const meta = reactive({
  launch_date: '2022-08-14 08:00:00',
  dev_domain: 'tfcu.bloomcudev.com',
  prod_domain: 'raiz.us',
  prod_ip: '69.167.186.183',
})
</script>
