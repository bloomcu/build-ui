import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

// import Survey from '@/views/Survey.vue';
// import Flowchart from '@/views/Flowchart.vue';

import auth from '@/views/auth/routes/index.js'
import assets from '@/views/assets/routes/index.js'
import briefs from '@/views/briefs/routes/index.js'
import content from '@/views/content/routes/index.js'
import organizations from '@/views/organizations/routes/index.js'
import sites from '@/views/sites/routes/index.js'
import tags from '@/views/tags/routes/index.js'

const routes = [
  ...auth,
  ...assets,
  ...briefs,
  ...content,
  ...organizations,
  ...sites,
  ...tags,
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

/**
* Restrict unauthenticated access
* Redirect to login page if not logged in and trying to access a restricted page
*/
router.beforeEach(async (to) => {
    const publicRoutes = [
      '/register', 
      '/login', 
      '/forgot-password'
    ]
    
    const authRequired = !publicRoutes.includes(to.path)
    const auth = useAuthStore()

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath
        return '/login'
    }
})

export default router
