<template>
  <div>
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col-10 text-component">
        <span class="text-sm text-uppercase color-contrast-low">Step 1</span>
        <h4>Content freeze</h4>
        <p>At this time all changes within WordPress on the development site should stop.</p>
      </div>
      <div class="col-12">
        <div class="card card--shadow">
          <h3 class="text-base color-primary margin-bottom-xxs">
            {{ moment('2022-08-08 18:00:00').format('dddd') }}, 
            {{ moment('2022-08-08 18:00:00').format('LL') }}
          </h3>
          <p class="text-sm margin-bottom-sm">
            {{ moment('2022-08-08 18:00:00').format('h:mm A') }} (Mountain)
          </p>
          <hr class="border-bottom margin-bottom-xs">
          <p><small>During the content freeze, your data is migrated from (<a href="https://tfcu.bloomcudev.com/" target="_blank">tfcu.bloomcudev.com</a>) to (<a href="https://raiz.us" target="_blank">raiz.us</a>).</small></p>
        </div>
      </div>
      <!-- <div class="col-12">
        <p><small>During the content freeze, your data is migrated from (<a href="https://tfcu.bloomcudev.com/" target="_blank">tfcu.bloomcudev.com</a>) to (<a href="https://raiz.us" target="_blank">raiz.us</a>).</small></p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import moment from "moment-timezone"
</script>
