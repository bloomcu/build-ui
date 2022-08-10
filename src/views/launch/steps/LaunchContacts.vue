<template>
  <div>
    <p class="text-bold margin-bottom-sm">Contacts</p>
    <div class="flex flex-column gap-xs">
      <div v-for="contact in contacts" :key="contact.id">
        <AppUserCard :user="contact"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppUserCard from '@/app/components/AppUserCard.vue'

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
</script>
