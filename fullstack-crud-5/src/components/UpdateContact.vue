<template>
  <div class="container">
    <div class="card p-5">
      <div class="row ">
        <div class="col-md-6">
          <h1 class="text-center text-info p-3">Update Contact</h1>

          <form @submit.prevent="updateContact">
            <div class="form-group">
              <label class="form-label">Name:</label>
              <input type="text" class="form-control" v-model="name">
            </div>
            <div class="form-group">
              <label class="form-label">Email:</label>
              <input type="text" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label class="form-label">Designation:</label>
              <input type="text" class="form-control" v-model="designation">
            </div>
            <div class="form-group">
              <label class="form-label">Contact Number:</label>
              <input type="text" class="form-control" v-model="contact_no">
            </div>

            <button type="submit" class="btn btn-info mt-5">Save the contact</button>
          </form>

        </div>
        <div class="col-md-6" v-show="errors.length">
          <h1 class="text-center text-danger p-3">Errors</h1>
          <div class="alert alert-danger">
            <li v-for="(error,key) in errors" :key="key">
              {{ error }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";
import {base_url, isLoading, ToastMessage} from "@/services/general.service";
import axios from "axios";
import {useRoute} from "vue-router";

const name = ref("")
const email = ref("")
const designation = ref("")
const contact_no = ref("")

const errors = reactive([])

const router = useRoute()

const updateContact = () => {

  errors.splice(0, errors.length)

  if (!name.value)
    errors.push('Name is required!')

  if (!email.value)
    errors.push('Email is required!')

  if (!designation.value)
    errors.push('Designation is required!')

  if (!contact_no.value)
    errors.push('Contact number is required!')

  isLoading.value = true
  axios.post(base_url + "/update_contact/" + router.params.id, {
    name: name.value,
    email: email.value,
    designation: designation.value,
    contact_no: contact_no.value,
  })
      .then((response) => {
        ToastMessage('success', response.data.message)
      })
      .catch((error) => {
        ToastMessage('error', error.message)
      })
      .finally(() => {
        isLoading.value = false
      })
}


const getContact = () => {
  axios.get(base_url + "/get_contact/" + router.params.id)
      .then((response) => {
        name.value = response.data.name
        email.value = response.data.email
        designation.value = response.data.designation
        contact_no.value = response.data.contact_no
      })
}

getContact()


</script>