<template>
  <div class="card card--shadow margin-bottom-md">
    <div class="grid gap-sm">
      <div class="col-10 text-component">
        <span class="text-sm text-uppercase color-primary">Step 4</span>
        <h4>Propagation</h4>
        <p>When we launch, you can watch the DNS record changes propagate across the globe using DNS checkers. We will be watching for the IP address: <strong>{{ meta.prod_ip }}</strong>.</p>
      </div>
      <div class="col-12 card card--dark text-component">
        <h5 class="margin-bottom-xxs">raiz.us</h5>
        <p class="text-sm"><a :href="`https://www.whatsmydns.net/#A/${meta.prod_domain}`" target="_blank">DNS Checker 1</a> | <a :href="`https://dnschecker.org/#A/${meta.prod_domain}`" target="_blank">DNS Checker 2</a></p>
        <div class="border-bottom margin-bottom-sm"></div>
        <h5 class="margin-bottom-xxs">www.raiz.us</h5>
        <p class="text-sm"><a :href="`https://www.whatsmydns.net/#A/www.${meta.prod_domain}`" target="_blank">DNS Checker 1</a> | <a :href="`https://dnschecker.org/#A/www.${meta.prod_domain}`" target="_blank">DNS Checker 2</a></p>
      </div>
      <div class="col-12 text-component">
        <p><small>Propagation can take 5-20 minutes to see changes, and 2-24 hours to see global change.</small></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const meta = reactive({
  launch_date: '2022-08-14 08:00:00',
  dev_domain: 'tfcu.bloomcudev.com',
  prod_domain: 'raiz.us',
  prod_ip: '69.167.186.183',
})
</script>
