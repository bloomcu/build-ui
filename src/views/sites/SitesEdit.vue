<template>
  <LayoutDefault v-if="siteStore.site">
    <div class="container max-width-sm padding-y-md">
      <div class="margin-bottom-md">
        <RouterLink :to="{ name: 'sites' }" class="btn btn--subtle">
          <IconArrowLeft size="xxs" class="color-primary"/>
          <span class="margin-left-xxs">Back</span>
        </RouterLink>
        <h1 class="text-lg">{{ siteStore.site.host }}</h1>
      </div>
      
      <form action="#" @submit.prevent="update()">      
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="title">Title</label>
          <input 
            v-model="siteStore.site.title" 
            required
            class="form-control width-100%" 
            type="text" 
            name="title" 
          >
        </div>
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="domain">Domain</label>
          <input 
            v-model="siteStore.site.domain" 
            required
            class="form-control width-100%" 
            type="text" 
            name="domain" 
          >
        </div>
        
        <div class="margin-bottom-sm">
          <p class="text-bold">Launch Info</p>
        </div>
        
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="launch_date">Launch date</label>
          <input 
            v-model="siteStore.launch.launch_date" 
            class="form-control width-100%" 
            type="text" 
            name="launch_date"
          >
        </div>
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="freeze_date">Freeze date</label>
          <input 
            v-model="siteStore.launch.freeze_date" 
            class="form-control width-100%" 
            type="text" 
            name="freeze_date"
          >
        </div>
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="dev_domain">Development server domain</label>
          <input 
            v-model="siteStore.launch.dev_domain" 
            class="form-control width-100%" 
            type="text" 
            name="dev_domain"
          >
        </div>
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="prod_domain">Production server domain</label>
          <input 
            v-model="siteStore.launch.prod_domain" 
            class="form-control width-100%" 
            type="text" 
            name="prod_domain"
          >
        </div>
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="prod_ip">Production server IP</label>
          <input 
            v-model="siteStore.launch.prod_ip" 
            class="form-control width-100%" 
            type="text" 
            name="prod_ip"
          >
        </div>  
        <div class="margin-bottom-sm">
          <label class="form-label margin-bottom-xxxs" for="launch_date">Notes</label>
          <textarea 
            v-model="siteStore.launch.notes" 
            class="form-control width-100%" 
            type="text" 
            name="launch_date"
            rows="6"
          >
          </textarea>
        </div>

        <div class="margin-top-md margin-bottom-sm">
          <button type="submit" class="btn btn--primary btn--md width-100%">Update</button>
        </div>
      </form>
    </div>
  </LayoutDefault>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteStore } from '@/domain/sites/store/useSiteStore'
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import IconArrowLeft from '@/app/components/icons/IconArrowLeft.vue'

const route = useRoute()
const siteStore = useSiteStore()

onMounted(() => {
    siteStore.show(route.params.site)
})

function update() {
  siteStore.update()
    // .then(() => {
      // siteStore.toggleUpdateModal()
    // })
}
</script>
