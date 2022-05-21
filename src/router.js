import { createRouter, createWebHistory } from 'vue-router'

import Survey from '@/views/Survey.vue';
import Flowchart from '@/views/Flowchart.vue';

import assetsRoutes from '@/views/assets/routes/index.js'

const routes = [
  ...assetsRoutes,
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
