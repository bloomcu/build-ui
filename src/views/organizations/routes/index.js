import Organizations from '@/views/organizations/Organizations.vue'

export default [
  {
    path: "/:organization/organizations",
    name: "organizations",
    component: Organizations,
    props: true,
  },
]
