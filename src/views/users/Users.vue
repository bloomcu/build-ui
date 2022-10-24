<template>
  <LayoutDefault>
    <div class="container max-width-sm flex items-center justify-between margin-y-md">
      <h1 class="text-lg">People</h1>
    </div>
    
    <div class="container max-width-sm">
      
      <!-- Invitations -->
      <div class="card card--shadow margin-bottom-md">
        
        <!-- Form -->
        <form @submit.prevent="submit()">
          <h2 class="text-base margin-bottom-xs">Invite teammates</h2>
          <p class="text-sm color-contrast-medium margin-bottom-sm">Provide the email address of a teammate, and an invitation will be sent to them.</p>
          <div class="grid gap-sm">
            <div class="col-9@md">
              <input v-model="email" class="form-control width-100%" type="text" name="invitee-email" placeholder="Email" required>
            </div>
            <div class="col-3@md">
              
              <button v-if="sendingInvite" class="btn btn--primary width-100% height-100%" disabled>Sending...</button>
              <button v-else class="btn btn--primary width-100% height-100%">Send invite</button>
            </div>
          </div>
        </form>
        
        <!-- Invitations list -->
        <div v-if="inviteStore.invitations && inviteStore.invitations.length"  class="margin-top-lg">
          <h2 class="text-sm">Invited</h2>
          <table class="table table--expanded position-relative z-index-1 width-100% text-unit-em text-sm">
            <tbody class="table__body">
              <tr 
                v-for="invite in inviteStore.invitations" 
                :key="invite.uuid" 
                class="table__row"
              >
                <td class="table__cell" role="cell">
                  <p class="font-medium">{{ invite.email }}</p>
                </td>
                <td class="table__cell" role="cell">
                  {{ moment(invite.created_at).fromNow() }}
                </td>
                <td class="table__cell text-right" role="cell">
                  <ButtonCopyToClipboard :value="invite.url" class="btn btn--sm btn--subtle width-100%">
                    Copy invite URL
                  </ButtonCopyToClipboard>
                </td>
                <td class="table__cell" role="cell">
                  <ButtonDestroy @click="inviteStore.destroy(invite.uuid)"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- Users -->
      <div class="card card--shadow margin-bottom-lg">
        <h2 class="text-base">My team</h2>
        <table class="table table--expanded position-relative z-index-1 width-100% text-unit-em text-sm">
          <thead class="table__header">
            <tr class="table__row">
              <th class="table__cell text-left" scope="col">User</th>
              <th class="table__cell text-left" scope="col">Role</th>
              <th class="table__cell text-right" scope="col">Joined</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr 
              v-for="user in [
                { id: 1, name: 'Ryan Harmon', email: 'ryan@bloomcu.com', role: 'admin', joined: '2 days ago' },
                { id: 2, name: 'Derik Kraus', email: 'derik@bloomcu.com', role: 'admin', joined: '4 hours ago' },
                { id: 3, name: 'Jane Doe', email: 'jane@client.com', role: 'editor', joined: '1 minute ago' },
              ]" 
              :key="user.id" 
              class="table__row"
            >
              <td class="table__cell flex items-center" role="cell">
                <AppUserAvatar :name="user.name" size="lg"/>
                <div class="padding-left-sm">
                  <p class="font-medium margin-bottom-xxxxs">{{ user.name }}</p>
                  <p class="color-contrast-medium">{{ user.email }}</p>
                </div>
              </td>
              <td class="table__cell" role="cell">
                <AppChip :label="user.role" color="outline" interactive="true"/>
              </td>
              <td class="table__cell text-right" role="cell">
                {{ user.joined }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutDefault>
</template>

<script setup>
import moment from "moment"
import { ref, onMounted } from 'vue'
import { useInvitationStore } from '@/domain/invitations/store/useInvitationStore'
import { useUserStore } from '@/domain/users/store/useUserStore'
import LayoutDefault from '@/app/layouts/LayoutDefault.vue'
import AppUserAvatar from '@/app/components/AppUserAvatar.vue'
import AppChip from '@/app/components/AppChip.vue'
import ButtonDestroy from '@/app/components/buttons/ButtonDestroy.vue'
import ButtonCopyToClipboard from '@/app/components/buttons/ButtonCopyToClipboard.vue'

const inviteStore = useInvitationStore()
const userStore = useUserStore()
const email = ref('')
const sendingInvite = ref(false)

function submit() {
  sendingInvite.value = true
  
  inviteStore.store(email)
  .then(() => {
    setTimeout(function () {
      email.value = ''
      sendingInvite.value = false
    }.bind(this), 1000)
  })
}

onMounted(() => {
  inviteStore.index()
})
</script>
