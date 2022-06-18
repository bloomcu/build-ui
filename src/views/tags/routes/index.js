import Tags from '@/views/tags/Tags.vue'

export default [
  {
    path: "/:organization/tags",
    name: "tags",
    component: Tags,
    props: true
  },
]
