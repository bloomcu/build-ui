import Sites from '@/views/sites/Sites.vue'
import SitesEdit from '@/views/sites/SitesEdit.vue'
import SitesLaunch from '@/views/sites/SitesLaunch.vue'

export default [
  {
    path: "/:organization/sites",
    name: "sites",
    component: Sites,
  },
  {
    path: "/:organization/sites/:site",
    name: "sites-edit",
    component: SitesEdit,
  },
  {
    path: "/:organization/sites/:site/launch",
    name: "sites-launch",
    component: SitesLaunch,
  },
]
