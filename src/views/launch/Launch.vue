<template>
  <LayoutWithoutNavigation maxWidth="xxl">
    <div class="flex container">
      <main class="position-relative z-index-1 flex-grow height-auto padding-y-md padding-x-lg">
        <component :is="steps[toggled].component"/>
        
        <!-- Content freeze -->
        <div class="grid gap-sm margin-bottom-xl">
          <div class="col-10 text-component">
            <h4>Content freeze</h4>
            <p>At this time all changes within WordPress on the development site should stop.</p>
          </div>
          <div class="col-6">
            <div class="card shadow-sm padding-sm">
              <h3 class="text-base color-primary margin-bottom-xxs">
                {{ moment('2022-08-08 18:00:00').format('dddd') }}, 
                {{ moment('2022-08-08 18:00:00').format('LL') }}
              </h3>
              <p class="text-sm">
                {{ moment('2022-08-08 18:00:00').format('h:mm A') }} (Mountain)
              </p>
            </div>
          </div>
          <div class="col-10">
            <p><small>During the content freeze, your data is migrated from (<a href="https://tfcu.bloomcudev.com/" target="_blank">tfcu.bloomcudev.com</a>) to (<a href="https://raiz.us" target="_blank">raiz.us</a>).</small></p>
          </div>
        </div>
        
        <!-- Pre-launch -->
        <div class="grid gap-sm margin-bottom-xl">
          <div class="col-10 text-component">
            <h4>Pre-Launch</h4>
            <p>Before launch, we ensure the following is complete.</p>
          </div>
          <div class="grid gap-sm">
            <div class="col-4">
              <p class="text-uppercase text-sm margin-bottom-sm">CMS</p>
              <AppList :list="[
                { content: 'Set favicon' },
                { content: 'Set admin email' },
                { content: 'Set comments to manual approval' },
                { content: 'Configure anti-spam and honeypot' },
              ]"/>
            </div>
            <div class="col-4">
              <p class="text-uppercase text-sm margin-bottom-sm">Plugins</p>
              <AppList :list="[
                { content: 'Akismet Anti-Spam' },
                { content: 'Image Compression' },
                { content: 'Stream User Tracking' },
                { content: 'Mailgun API' },
              ]"/>
            </div>
            <div class="col-4">
              <p class="text-uppercase text-sm margin-bottom-sm">Security</p>
              <AppList :list="[
                { content: 'Configure security' },
                { content: 'Whitelist internal IP’s' },
              ]"/>
            </div>
          </div>
        </div>

        <!-- Launch -->
        <div class="grid gap-sm margin-bottom-xl">
          <div class="col-10 text-component">
            <h4>Launch</h4>
            <p>At the time of launch, DNS records for <strong>raiz.us</strong> and <strong>www.raiz.us</strong> will be changed.</p>
          </div>
          <div class="col-12 border radius-md padding-sm shadow-sm text-component">
            <p>Point <strong>raiz.us</strong> to <strong>69.167.186.183</strong></p>
            <p><small>Type “A”  |  Data "raiz.us"  |  Name “@”</small></p>
            <div class="border-bottom margin-bottom-sm"></div>
            <p>Point <strong>www.raiz.us</strong> to <strong>69.167.186.183</strong></p>
            <p><small>Type “A”  |  Data "www.raiz.us"  |  Name “www”</small></p>
          </div>
        </div>

        <!-- Propagation -->
        <div class="grid gap-sm margin-bottom-xl">
          <div class="col-10 text-component">
            <h4>Propagation</h4>
            <p>When we launch, you can watch the DNS record changes propagate across the globe using DNS checkers. We will be watching for the IP address: <strong>69.167.186.183</strong>.</p>
          </div>
          <div class="col-12 border radius-md padding-sm shadow-sm text-component">
            <h5>raiz.us</h5>
            <p><a href="https://www.whatsmydns.net/#A/raiz.us" target="_blank">DNS Checker 1</a> | <a href="https://dnschecker.org/#A/raiz.us" target="_blank">DNS Checker 2</a></p>
            <div class="border-bottom margin-bottom-sm"></div>
            <h5>www.raiz.us</h5>
            <p><a href="https://www.whatsmydns.net/#A/www.raiz.us" target="_blank">DNS Checker 1</a> | <a href="https://dnschecker.org/#A/www.raiz.us" target="_blank">DNS Checker 2</a></p>
          </div>
          <div class="col-8 text-component">
            <p><small>Propagation can take 5-20 minutes to see changes, and 2-24 hours to see global change.</small></p>
          </div>
        </div>

        <!-- Post-Launch -->
        <div class="grid gap-sm margin-bottom-xl">
          <div class="col-10 text-component">
            <h4>Post-Launch</h4>
            <p>After launch, we ensure the following is complete. Then, we will send an email letting everyone involved know that the launch was successful.</p>
          </div>
          <div class="grid gap-md">
            <div class="col-4">
              <p class="text-uppercase text-sm margin-bottom-sm">CMS</p>
              <AppList :list="[
                { content: 'Allow search engine indexing' },
                { content: 'Test online banking' },
                { content: 'Setup GA/GTM' },
                { content: 'Enable uptime monitoring' },
                { content: 'Replace dev urls in database' },
              ]"/>
            </div>
            <div class="col-4">
              <p class="text-uppercase text-sm margin-bottom-sm">Plugins</p>
              <AppList :list="[
                { content: 'Enable Yoast' },
                { content: 'Enable backups' },
                { content: 'Index Algolia' },
              ]"/>
            </div>
            <div class="col-4">
              <p class="text-uppercase text-sm margin-bottom-sm">Server</p>
              <AppList :list="[
                { content: 'Test forced “https”' },
                { content: 'Check mixed content' },
                { content: 'Test 301 Redirects' },
              ]"/>
            </div>
          </div>
        </div>
      </main>
      
      <aside class="position-relative z-index-1 width-100% border-left max-width-xxxs padding-y-md padding-x-md">
        <!-- <AppNestedMenu :items="steps"/> -->
        <p class="text-bold margin-bottom-sm">Contacts</p>
        <div class="flex flex-column gap-xs">
          <div v-for="contact in contacts" :key="contact.id">
            <AppUserCard :user="contact"/>
          </div>
        </div>
      </aside>
    </div>
  </LayoutWithoutNavigation>
</template>

<script setup>
import { ref } from 'vue'
import moment from "moment-timezone"

// Components
import LayoutWithoutNavigation from '@/app/layouts/LayoutWithoutNavigation.vue'
import AppNestedMenu from '@/app/components/nested-menu/AppNestedMenu.vue'
import AppUserCard from '@/app/components/AppUserCard.vue'
import AppList from '@/app/components/AppList.vue'

// Composables
import useToggle from '@/app/composables/useToggle.js'
const { toggle, toggled } = useToggle()

const steps = [
  { 
    id: 0, 
    title: 'Home',
    component: 'LaunchHome',
  },
  { 
    id: 1, 
    title: 'Pre-Launch',
    component: '',
  },
  { 
    id: 2, 
    title: 'Launch',
    component: '',
  },
  { 
    id: 3, 
    title: 'Propagation',
    component: '',
  },
  { 
    id: 4, 
    title: 'Post-Launch',
    component: '',
  },
]

const contacts = [
  {
    id: 0,
    avatar: '',
    name: 'Bryan Erwin',
    role: 'Lead Developer',
    organization: 'BloomCU',
    email: 'bryan@bloomcu.com',
    mobile: '(918) 645-1398',
    office: '(844) 334-3837',
  },
  {
    id: 1,
    avatar: '',
    name: 'Ryan Harmon',
    role: 'Director',
    organization: 'BloomCU',
    email: 'ryan@bloomcu.com',
    mobile: '(385) 207-5487',
    office: '(844) 334-3837',
  },
  {
    id: 2,
    avatar: '',
    name: 'Devin Cuevas',
    role: 'Director',
    organization: 'Raiz',
    email: 'dcuevas@tfcu.coop',
    mobile: '(915) 543-1705',
    office: '(915) 926-3964',
  },
  {
    id: 3,
    avatar: '',
    name: 'Jason Vasquez',
    role: 'DNS',
    organization: 'Raiz',
    email: 'jvasquez@tfcu.coop',
    mobile: '(915) 422-5355',
    office: '(915) 926-2534',
  },
]

// function changeStep(number) {
//   step.value = number
// }
</script>

<script>
import { defineComponent } from 'vue'

// Components
import LaunchHome from '@/views/launch/steps/LaunchHome.vue'

export default defineComponent({
    components: {
      LaunchHome,
    }
})    
</script>
