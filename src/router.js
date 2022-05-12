import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import Flowchart from '@/views/Flowchart.vue';
import About from '@/views/About.vue';

const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/flowchart', 
    component: Flowchart
  },
  { 
    path: '/about', 
    component: About 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
