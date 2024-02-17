<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h1 class="text-warning text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="form-group mt-4">
            <label for="" class="form-label">Email:</label>
            <input type="text" v-model="credentials.email" class="form-control" placeholder="Enter your email">
          </div>
          <div class="form-group mt-4">
            <label for="" class="form-label">Password:</label>
            <input type="text" v-model="credentials.password" class="form-control" placeholder="Enter your password">
          </div>
          <button type="submit" class="btn btn-info mt-4">Login</button>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue"
import axios from "axios";
import {ToastMessage} from "@/services/general.service";
import router from "@/routes/routes";
import {useAuthStore} from "@/sotres/authStore";
import {isLoading} from "@/services/general.service";


const authStore = useAuthStore()

const credentials = ref({
  email: 'test@example.com',
  password: '123456'
})

const handleLogin = () => {
  isLoading.value = true

  axios.post('/login', {
    email: credentials.value.email,
    password: credentials.value.password,
  })
      .then(response => {
        ToastMessage('success', response.data.message, 'İşlem Başarılı!')
        authStore.login(response.data)
        router.push('/ContactList')
      })
      .catch(err => err)
      .finally(() => {
        isLoading.value = false
      })
}
</script>