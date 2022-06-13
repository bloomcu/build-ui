import Sites from '@/views/sites/Sites.vue'

export default [
  {
    path: "/:organization/sites",
    name: "sites",
    component: Sites,
    props: true,
  },
]
