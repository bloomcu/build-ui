import Content from '@/views/content/Content.vue'

export default [
  {
    path: "/:organization/content",
    name: "content",
    component: Content,
    props: true,
  },
]
