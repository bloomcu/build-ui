import Assets from '@/views/assets/Assets.vue'
import AssetsIntake from '@/views/assets/AssetsIntake.vue'

export default [
  {
    path: "/:organization/assets",
    name: "assets",
    component: Assets,
    props: true,
  },
  {
    path: "/:organization/assets/intake",
    name: "assetsIntake",
    component: AssetsIntake,
    props: true,
  },
]
