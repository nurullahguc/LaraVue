<template>
  <div class="row">
    <div class="col-md-6">
      <h2 class="text-center text-info">Edit Contact</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <div class="form-label">Name:</div>
          <input type="text" v-model="contact.name" class="form-control">
        </div>
        <div class="form-group mt-2">
          <div class="form-label">Email:</div>
          <input type="text" v-model="contact.email" class="form-control">
        </div>
        <div class="form-group mt-2">
          <div class="form-label">Designation:</div>
          <input type="text" v-model="contact.designation" class="form-control">
        </div>
        <div class="form-group mt-2">
          <div class="form-label">Contact Number:</div>
          <input type="text" v-model="contact.contact_no" class="form-control">
        </div>
        <button class="mt-4 btn-primary btn">Submit</button>
      </form>
    </div>
    <div class="col-md-6" v-if="errors.length">
      <h2 class="text-center text-danger">Errors</h2>
      <div class="alert alert-danger">
        <ul>
          <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue"
import {isLoading, ToastMessage} from "@/services/general.service";
import axios from "axios";
import {useRoute} from "vue-router"
import router from "@/routes/routes";

const route = useRoute()

const errors = reactive([])

const contact = ref({
  name: '',
  email: '',
  designation: '',
  contact_no: ''
})

const handleSubmit = () => {

  errors.splice(0, errors.length)

  if (!contact.value.name)
    errors.push("name is required")

  if (!contact.value.email)
    errors.push("email is required")

  if (!contact.value.designation)
    errors.push("designation is required")

  if (!contact.value.contact_no)
    errors.push("contact no is required")

  if (errors.length) {
    ToastMessage('error', 'Please fix the errors first!', 'Error!')
    return false
  }

  isLoading.value = true

  axios.post('/with_auth/update_contact/' + route.params.id, {
    name: contact.value.name,
    email: contact.value.email,
    designation: contact.value.designation,
    contact_no: contact.value.contact_no,
  })
      .then(response => {
        ToastMessage('success', response.data.message, 'Successfully!')
      })
      .catch(err => err)
      .then(() => {
        isLoading.value = false
      })
}

const getEditContact = () => {
  isLoading.value = true
  axios.get("/with_auth/get_contact/" + route.params.id)
      .then(response => {
        contact.value.name = response.data.name
        contact.value.email = response.data.email
        contact.value.designation = response.data.designation
        contact.value.contact_no = response.data.contact_no
      })
      .catch(err => {
        if (err.response.status === 404)
          router.push('/ContactList')
      })
      .then(() => {
        isLoading.value = false
      })
}
getEditContact()

</script>
