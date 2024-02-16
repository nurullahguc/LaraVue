<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h4 class="text-warning p-3">Login Form</h4>
        <form @submit.prevent="authStore.handleLogin(creadentials)">
          <div class="form-group mb-3">
            <label for="">Username:</label>
            <input v-model="creadentials.email" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="">Password:</label>
            <input v-model="creadentials.password" type="text" class="form-control">
          </div>
          <button type="submit" class="mt-4 mb-3 btn btn-primary">Login</button>

          <div class="form-group mb-3">
            <label for="">Enter Your Token:</label>
            <input v-model="token" type="text" class="form-control">
          </div>
          <button type="button" @click="clickTheCheck" class="mt-4 btn btn-warning">Check The Login
          </button>
        </form>
      </div>
      <div class="col-md-4"></div>

    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useAuthStore} from "@/stores/authStore";
import "../axios"
import {token} from "@/axios";

const authStore = useAuthStore()

const creadentials = ref({
  email: 'test@example.com',
  password: '123456'
})

const clickTheCheck = () => {

  console.log("token is coming!!")
  console.log(token.value)

  authStore.handleCheckLogin()
}


</script>

<style scoped>

</style>