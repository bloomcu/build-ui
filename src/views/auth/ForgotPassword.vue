<template>
  <!-- <LayoutDefault> -->
    <div class="container max-width-xxs">
      <form class="login-form" action="#" @submit.prevent="submit">
        <div class="text-component text-center margin-bottom-sm">
          <h2>Forgot your password?</h2>
        </div>
        
        <div class="text-center margin-bottom-md">
          <p class="text-sm">Enter the email address associated with your account, and we’ll email you a link to reset your password.</p>
        </div>
        
        <div class="margin-bottom-sm">
          <!-- <label class="form-label margin-bottom-xxxs" for="input-email">Email</label> -->
          <input 
            v-model="inputs.email" 
            required
            autofocus 
            placeholder="email@email.com"
            class="form-control width-100%" 
            type="email" 
            name="input-email" 
            id="input-email" 
          >
        </div>

        <div class="margin-bottom-md">
          <button class="btn btn--primary btn--md width-100%">Send reset link</button>
        </div>
        
        <div class="text-center text-component">
          <p class="text-sm">
            <RouterLink :to="{ name: 'login' }">Return to log in</RouterLink>
          </p>
        </div>
        
      </form>
    </div>
  <!-- </LayoutDefault> -->
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/domain/auth/store/useAuthStore'

const route = useRoute()
// const router = getCurrentInstance().proxy.$router

const authStore = useAuthStore()
// const auth = getAuth();

const inputs = ref({
  email: ''
})

const error = ref(null)

const submit = () => {
  console.log(inputs.value)
}
</script>
