import ContentInventory from '@/views/content/ContentInventory.vue'

export default [
  {
    path: "/:organization/sites/:site/content",
    name: "content",
    component: ContentInventory,
    props: true,
  },
]
