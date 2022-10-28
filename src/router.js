import { createRouter, createWebHistory } from 'vue-router'
import { useErrorStore } from '@/app/store/useErrorStore'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

// import Survey from '@/views/Survey.vue';
// import Flowchart from '@/views/Flowchart.vue';

import assets from '@/views/assets/routes/index.js'
import auth from '@/views/auth/routes/index.js'
import briefs from '@/views/briefs/routes/index.js'
import common from '@/views/common/routes/index.js'
import content from '@/views/content/routes/index.js'
import designs from '@/views/designs/routes/index.js'
import invitations from '@/views/invitations/routes/index.js'
import organizations from '@/views/organizations/routes/index.js'
import sites from '@/views/sites/routes/index.js'
import tags from '@/views/tags/routes/index.js'
import users from '@/views/users/routes/index.js'

const routes = [
  ...assets,
  ...auth,
  ...briefs,
  ...common,
  ...content,
  ...designs,
  ...invitations,
  ...organizations,
  ...sites,
  ...tags,
  ...users,
  {
    path: '/',
    redirect: 'organizations'
  },
  // {
  //   path: '/:catchAll(.*)*',
  //   name: 'NotFound',
  //   component: NotFound,
  // }
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
* Clear any validation errors
* When routing to another view, we don't want form validations errors following us
*/
router.beforeEach(async (to) => {
  const { emptyErrors } = useErrorStore()
  emptyErrors()
})

/**
* Restrict unauthenticated access
* Redirect to login page if not logged in and trying to access a restricted page
*/
router.beforeEach(async (to) => {
  // TODO: Can I just instantiate this store one in this file?
  const { user } = useAuthStore()
  
  const publicRouteNames = [
    'forgotPassword',
    'invitation',
    'login',
    'register',
    'styleDesignBrief',
    'sitesLaunch',
  ]

  const authRequired = !publicRouteNames.includes(to.name)

  if (!user && authRequired) {
    // TODO: Set the return URL so that when the user logs in, they can return here
    // authStore.returnUrl = to.fullPath

    return '/login'
  }
})

/**
* Setup organization
* Get organization from url, persist in auth store for use in api requests
*/
router.beforeEach(async (to) => {
    // TODO: Can I just instantiate this store one in this file?
    let { organization } = useAuthStore()
    
    if (to.params.organization) {
        organization = to.params.organization
    }
})

export default router
