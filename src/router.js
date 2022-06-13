import { createRouter, createWebHistory } from 'vue-router'

// import Survey from '@/views/Survey.vue';
// import Flowchart from '@/views/Flowchart.vue';

import assets from '@/views/assets/routes/index.js'
import briefs from '@/views/briefs/routes/index.js'
import content from '@/views/content/routes/index.js'
import organizations from '@/views/organizations/routes/index.js'
import sites from '@/views/sites/routes/index.js'

const routes = [
  ...assets,
  ...briefs,
  ...content,
  ...organizations,
  ...sites,
  // { 
  //   path: '/survey', 
  //   component: Survey 
  // },
  // { 
  //   path: '/flowchart', 
  //   component: Flowchart
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
