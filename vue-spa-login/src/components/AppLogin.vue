<template>
  <div>
    <form @submit.prevent="handleLogin">
      <label>
        Email: <input v-model="credentials.email" type="text">
      </label>
      <label>
        Password: <input v-model="credentials.password" type="password">
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from "vue"
import axios from "axios"

const credentials = ref({
  email: 'test@example.com',
  password: 'password',
})

const handleLogin = async () => {

  await axios.get("/sanctum/csrf-cookie")
      .catch(err => err)

  await axios.post("/login", credentials.value)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
        console.log(err.response.data.message)
      })


  await axios.get("/api/user")
      .then(res => {
        console.log(res)
      })
      .catch(err => err)

}

</script>

<style scoped>

</style>