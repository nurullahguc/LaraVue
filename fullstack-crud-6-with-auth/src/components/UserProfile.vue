<template>
  <div class="row">
    <div class="col-md-8">
      <h2 class="text-center text-info">Profile Page</h2>
      <div class="form-group mt-4">
        <div class="form-label">ID:</div>
        <input v-model="id" type="text" class="form-control" disabled>
      </div>
      <div class="form-group mt-4">
        <div class="form-label">Name Surname:</div>
        <input v-model="name" type="text" class="form-control" disabled>
      </div>
      <div class="form-group mt-4">
        <div class="form-label">Email:</div>
        <input v-model="email" type="text" class="form-control" disabled>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {isLoading} from "@/services/general.service";

const id = ref('')
const name = ref('')
const email = ref('')

const getProfileInfo = () => {
  isLoading.value = true

  axios.get('/with_auth/profile_info')
      .then(response => {
        let user = response.data.user
        id.value = user.id
        name.value = user.name
        email.value = user.email
      })
      .catch(err => err)
      .then(() => {
        isLoading.value = false
      })
}
getProfileInfo()

</script>

<style scoped>

</style>