import Content from '@/views/content/Content.vue'

export default [
  {
    path: "/:organization/sites/:site/content",
    name: "content",
    component: Content,
    props: true,
  },
]
