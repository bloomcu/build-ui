<template>
  <AppModal 
    size="xxs"
    @closed="tagGroupStore.toggleCreateModal" 
    :class="tagGroupStore.createModal ? 'modal--is-visible' : ''"
  >
  <form action="#" @submit.prevent="store(newGroup)">
      <div class="margin-bottom-sm">
        <label class="form-label margin-bottom-xxxs" for="title">Group title</label>
        <input 
          v-model="newGroup.title" 
          required
          placeholder="Gorup title"
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
import { useTagGroupStore } from '@/domain/tags/store/useTagGroupStore'
import AppModal from '@/app/components/AppModal.vue'

const tagGroupStore = useTagGroupStore()

const newGroup = ref({
  title: '',
})

function store(newGroup) {
  tagGroupStore.store(newGroup)
    .then(() => {
      tagGroupStore.toggleCreateModal()
      newGroup.title = ''
    }).catch(error => {
      console.log('Error', error.response.data)
    })
}
</script>
