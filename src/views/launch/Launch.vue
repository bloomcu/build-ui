<template>
  <LayoutWithoutNavigation>
    <!-- Hero -->
    <div class="padding-y-md">
      <p>TFCU</p>
      <h2>Launch Dashboard</h2>
    </div>
    
    <!-- Overview -->
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col">
        <p class="margin-bottom-sm">Countdown</p>
        <LaunchCountdown
          :year="2022"
          :month="7"
          :day="8"
          :hour="22"
          :minute="0"
          :second="0"
          :millisecond="0"
        />
      </div>
      <div class="col text-component">
        <p>Launch Date</p>
        <h4>
          {{ moment('2022-08-08 22:00:00').tz("America/Denver").format('dddd') }}, 
          {{ moment('2022-08-08 22:00:00').tz("America/Denver").format('LL') }}
        </h4>
      </div>
      <div class="col text-component">
        <p>Launch Time</p>
        <h4>
          {{ moment('2022-08-08 22:00:00').tz("America/Denver").format('h:mm A') }}
          ({{ moment.tz.guess() }})
        </h4>
      </div>
    </div>
    
    <!-- Progress -->
    <!-- <div class="row" style="margin-bottom: 7rem;">
        <div class="col-12" style="margin-bottom: 2rem;">
            <p>PROGRESS</p>
        </div>
        <div class="col-12">
            <AppSteps :step="steps[step].name" @changeStep="changeStep"/>
            <ol class="steps">
                <li class="step is-complete" data-step="1">Acquire Server</li>
                <li class="step is-complete" data-step="2">Assign Contacts</li>
                <li class="step is-complete" data-step="3">Pre-Launch</li>
                <li class="step is-complete" data-step="4">Launch</li>
                <li class="step is-complete" data-step="5">Propagation</li>
                <li class="step is-complete" data-step="6">Post-Launch</li>
            </ol>
        </div>
    </div> -->
    
    <!-- Contacts -->
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col-12">
        <h3>Contacts</h3>
      </div>
      <div class="col text-component">
        <p>
          Bryan Erwin - Lead<br>
          Email: <a href="mailto:bryan@bloomcu.com">bryan@bloomcu.com</a><br>
          Mobile: <a href="tel:(918) 645-1398">(918) 645-1398</a><br>
          Office: <a href="tel:(844) 334-3837">(844) 334-3837</a><br>
        </p>
      </div>
      <div class="col text-component">
        <p>
          Ryan Harmon - Backup<br>
          Email: <a href="mailto:ryan@bloomcu.com">ryan@bloomcu.com</a><br>
          Mobile: <a href="tel:(385) 207-5487">(385) 207-5487</a><br>
          Office: <a href="tel:(844) 334-3837">(844) 334-3837</a><br>
        </p>
      </div>
      <div class="col text-component">
        <p>
          Devin Cuevas - Main<br>
          Email: <a href="mailto:dcuevas@tfcu.coop">dcuevas@tfcu.coop</a><br>
          Mobile: <a href="tel:(915) 543-1705">(915) 543-1705</a><br>
          Office: <a href="tel:(915) 926-3964">(915) 926-3964</a>
        </p>
      </div>
      <div class="col text-component">
        <p>
          Jason Vasquez - DNS<br>
          Email: <a href="mailto:jvasquez@tfcu.coop">jvasquez@tfcu.coop</a><br>
          Mobile: <a href="tel:(915) 543-1705">(915) 422-5355</a><br>
          Phone: <a href="tel:(915) 926-2534">(915) 926-2534</a> <br>
        </p>
      </div>
    </div>
    
    <!-- Pre-launch -->
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col-12">
        <h3>Pre-Launch</h3>
      </div>
      <div class="col-8 text-component">
        <p class="text-bold">
          Content freeze:
          {{ moment('2022-08-08 18:00:00').tz("America/Denver").format('dddd') }}, 
          {{ moment('2022-08-08 18:00:00').tz("America/Denver").format('LL') }} at
          {{ moment('2022-08-08 18:00:00').tz("America/Denver").format('h:mm A') }}
          ({{ moment.tz.guess() }})
        </p>
        <p>During the content free, we are migrating your data from the development site (<a href="https://tfcu.bloomcudev.com/" target="_blank">tfcu.bloomcudev.com</a>) to the production site (<a href="https://raiz.us" target="_blank">raiz.us</a>). At this time all changes within WordPress on the development site should stop.</p>
      </div>
      <div class="col-12 text-component">
        <p class="text-bold">Checklist</p>
      </div>
      <div class="grid gap-sm">
        <div class="col">
          <p class="text-uppercase text-sm margin-bottom-sm">Configure Website</p>
          <ul>
            <li>☐ Set favicon</li>
            <li>☐ Set admin email</li>
            <li>☐ Set comments to manual approval</li>
            <li>☐ Configure anti-spam and honeypot</li>
          </ul>
        </div>
        <div class="col">
          <p class="text-uppercase text-sm margin-bottom-sm">Configure Plugins</p>
          <ul>
            <li>☐ Akismet Anti-Spam</li>
            <li>☐ Image Compression</li>
            <li>☐ Stream User Tracking</li>
          </ul>
        </div>
        <div class="col">
          <p class="text-uppercase text-sm margin-bottom-sm">Configure Security</p>
          <ul>
            <li>☐ Configure security</li>
            <li>☐ Whitelist CU branch and office IP’s</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Launch -->
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col-12">
        <h3>Launch</h3>
      </div>
      <div class="col-8 text-component">
        <p class="text-bold">Change DNS Records</p>
        <p>At the time of launch, the <strong>Primary DNS controller</strong> will change the DNS records for raiz.us and www.raiz.us as outlined below:</p>
      </div>
      <div class="col-12 border radius-md padding-sm shadow-sm text-component">
        <p>Type “A”  |  Data "raiz.us"  |  Name “@”</p>
        <p>Point to <u>69.167.186.183</u> for users who enter <u>raiz.us</u> without "www" before it.</p>
        <div class="border-bottom margin-bottom-sm"></div>
        <p>Type “A”  |  Data "www.raiz.us"  |  Name “www”</p>
        <p>Point to <u>69.167.186.183</u> for users who enter <u>www.raiz.us</u>.</p>
      </div>
    </div>

    <!-- Propagation -->
    <div class="grid gap-sm margin-bottom-xl">
      <div class="col-8 text-component">
        <h3>Propagation</h3>
        <p>When we launch, you can watch the DNS record change propagate across the globe using DNS checkers. We will be waiting for the returned IP address <u>50.28.14.50</u></p>
      </div>
      <div class="col-8 border radius-md padding-sm shadow-sm text-component">
        <h5>raiz.us</h5>
        <p><a href="https://www.whatsmydns.net/#A/raiz.us" target="_blank">DNS Checker 1</a> | <a href="https://dnschecker.org/#A/raiz.us" target="_blank">DNS Checker 2</a></p>
        <div class="border-bottom margin-bottom-sm"></div>
        <h5>www.raiz.us</h5>
        <p><a href="https://www.whatsmydns.net/#A/www.raiz.us" target="_blank">DNS Checker 1</a> | <a href="https://dnschecker.org/#A/www.raiz.us" target="_blank">DNS Checker 2</a></p>
      </div>
      <div class="col-8 text-component">
        <p>Propagation can take from 5-20 minutes to see a single change, and 2-24 hours to see global change. After these checks are successful, the site launch is complete.</p>
        <p><i><small>BloomCU will monitor the propagation of the change until enough U.S. based servers have successfully propagated, allowing us to use the website locally and from other remote virtual machines across the U.S.. During this test we also verify that the SSL certificate, 301 redirects and site permalinks are working.</small></i></p>
      </div>
    </div>

    <!-- Post-Launch -->
    <div class="grid gap-sm margin-bottom-md">
      <div class="col-8 text-component">
        <h3>Post-Launch</h3>
        <p>After launch we ensure the following is complete. Then, send an email out letting everyone involved know that the launch was successful.</p>
      </div>
      
      <div class="col-12 text-component">
        <p class="text-bold">Checklist</p>
      </div>
    </div>
    
    <div class="grid gap-sm margin-bottom-lg">
      <div class="col-4">
        <p class="text-uppercase text-sm margin-bottom-sm">Configure Website</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>☐ Allow search engines to index site</li>
          <li>☐ Test online banking</li>
          <li>☐ Setup Google Analytics and GTM</li>
          <li>☐ Setup uptime monitoring</li>
          <li>☐ Replace dev urls in database</li>
        </ul>
      </div>
      <div class="col-4">
        <p class="text-uppercase text-sm margin-bottom-sm">Configure Plugins</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>☐ Yoast SEO</li>
          <li>☐ Initiate daily backups</li>
          <li>☐ Index Algolia instant search</li>
        </ul>
      </div>
      <div class="col-4">
        <p class="text-uppercase text-sm margin-bottom-sm">Configure Server</p>
        <ul style="list-style: none; padding-left: 0;">
          <li>☐ Test that “https” is forced</li>
          <li>☐ Test 301 Redirects</li>
        </ul>
      </div>
    </div>

  </LayoutWithoutNavigation>
</template>

<script setup>
import { ref } from 'vue'
import moment from "moment-timezone"

import LayoutWithoutNavigation from '@/app/layouts/LayoutWithoutNavigation.vue'
import LaunchCountdown from '@/views/launch/components/LaunchCountdown.vue'
import AppSteps from '@/app/components/AppSteps.vue'

// const step = ref(1)
// 
// const steps = [
//   { name: 'Acquire Server' },
//   { name: 'Assign Contacts' },
//   { name: 'Pre-Launch' },
//   { name: 'Launch' },
//   { name: 'Propagation' },
//   { name: 'Post-Launch' },
// ]
// 
// function changeStep(number) {
//   step.value = number
// }
</script>
