<template>
  <svg viewBox="0 0 48 48" class="icon">
    <component :is="dynamicIcon"/>
  </svg>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

import IconNone from '@/domain/files/components/file-icon/icons/icon-none.vue'

const props = defineProps({
    filetype: { type: String }
})

const filetypes = [
  'ai',
  'css',
  'doc',
  'docx',
  'eot',
  'eps',
  'gif',
  'html',
  'js',
  'mov',
  'mp4',
  'mpg',
  'otf',
  'pdf',
  'sketch',
  'svg',
  'ttc',
  'ttf',
  'txt',
  'woff',
  'woff2',
  'xlsx',
  'unknown',
];

const icons = {
  'ai': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-ai.vue')),
  'css': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-css.vue')),
  'doc': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-doc.vue')),
  'docx': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-docx.vue')),
  'eot': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-eot.vue')),
  'eps': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-eps.vue')),
  'gif': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-gif.vue')),
  'html': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-html.vue')),
  'js': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-js.vue')),
  'mov': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-mov.vue')),
  'mp4': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-mp4.vue')),
  'mpg': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-mpg.vue')),
  'otf': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-otf.vue')),
  'pdf': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-pdf.vue')),
  'sketch': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-sketch.vue')),
  'svg': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-svg.vue')),
  'ttc': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-ttc.vue')),
  'ttf': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-ttf.vue')),
  'txt': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-txt.vue')),
  'woff': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-woff.vue')),
  'woff2': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-woff2.vue')),
  'xlsx': defineAsyncComponent(() => import('@/domain/files/components/file-icon/icons/icon-xlsx.vue')),
}

const dynamicIcon = computed(() => {
  let type = props.filetype.toLowerCase()

  if (filetypes.includes(type)) {
    return icons[type]
  } else {
    return IconNone
  }
})
</script>
