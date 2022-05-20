import { createRouter, createWebHistory } from 'vue-router'

import Intake from '@/views/Intake.vue';
import Survey from '@/views/Survey.vue';
import Flowchart from '@/views/Flowchart.vue';

const routes = [
  { 
    path: '/intake', 
    component: Intake 
  },
  { 
    path: '/survey', 
    component: Survey 
  },
  { 
    path: '/flowchart', 
    component: Flowchart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
