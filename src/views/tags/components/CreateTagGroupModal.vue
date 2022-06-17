<template>
  <AppModal 
    size="sm"
    @closed="tagStore.toggleCreateModal" 
    :class="tagStore.createModal ? 'modal--is-visible' : ''"
  >
  <form action="#" @submit.prevent="store(newGroup)">
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="title">Group title</label>
        <input 
          v-model="newGroup.title" 
          required
          placeholder="Site title"
          class="form-control width-100%" 
          type="text" 
          name="title" 
        >
      </div>

      <div class="margin-top-md margin-bottom-sm">
        <button class="btn btn--primary btn--md width-100%">Create Tag Group</button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
import { useTagStore } from '@/domain/tags/store/useTagStore'
import AppModal from '@/app/components/AppModal.vue'

const tagStore = useTagStore()

const newGroup = ref({
  title: '',
})

function store(newGroup) {
  tagStore.storeGroup(newGroup)
    .then(() => {
      tagStore.toggleCreateModal()
      newGroup.title = ''
    }).catch(error => {
      console.log('Error', error.response.data)
    })
}
</script>
