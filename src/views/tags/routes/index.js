import TagGroups from '@/views/tags/TagGroups.vue'

export default [
  {
    path: "/:organization/tags/groups",
    name: "tag-groups",
    component: TagGroups,
    props: true
  },
]
