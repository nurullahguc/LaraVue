<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="">Email:</label>
        <input v-model="credentials.email" type="email">
      </div>
      <div>
        <label for="">Password:</label>
        <input v-model="credentials.password" type="password">
      </div>
      <div>
        <input v-model="credentials.remember_me" type="checkbox" id="rememberMe">
        <label for="rememberMe">Remember me</label>
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.store";
import {Credentials} from "@/models/auth.model";


const authStore = useAuthStore()

const credentials = ref<Credentials>({
  email: 'test@example.com',
  password: 'password',
  remember_me: true
})

const handleLogin = async () => {
  await authStore.login(credentials.value)
}

</script>

<style scoped>

</style>