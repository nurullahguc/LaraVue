<template>

  <div class="container p-4">
    <div class="card">
      <div class="row p-2">
        <div class="col-md-6">
          <h2 class="text-center text-primary">Create New Contact</h2>
          <form @submit.prevent="createContact">
            <div class="form-group">
              <label class="form-label">Name:</label>
              <input type="text" class="form-control" v-model="contact.name">
            </div>
            <div class="form-group">
              <label class="form-label">Email:</label>
              <input type="text" class="form-control" v-model="contact.email">
            </div>
            <div class="form-group">
              <label class="form-label">Designation:</label>
              <input type="text" class="form-control" v-model="contact.designation">
            </div>
            <div class="form-group">
              <label class="form-label">Contact Number:</label>
              <input type="text" class="form-control" v-model="contact.contact_no">
            </div>

            <button class="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
        <div class="col-md-6" v-if="errors.length">
          <h2 class="text-center text-danger">Error List</h2>
          <div class="alert alert-danger">
            <ul>
              <li v-for="(error, key) in errors" :key="key">
                {{ error }}
              </li>
            </ul>
          </div>
          <h4 class="text-warning text-center">Fix the errors!</h4>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, reactive} from "vue";
import axios from "axios";
import {base_url, blockAllPage, ToastMessage, unBlockAllPage} from "@/services/general.services";

const errors = reactive([])
let contact = reactive({
  name: null,
  email: null,
  designation: null,
  contact_no: null,
})

const createContact = () => {

  errors.splice(0, errors.length)

  if (!contact.name)
    errors.push("Name is required!")
  if (!contact.email)
    errors.push("Email is required!")
  if (!contact.designation)
    errors.push("Designation is required!")
  if (!contact.contact_no)
    errors.push("Contact_no is required!")

  blockAllPage()

  axios.post(base_url + "/save_contact", contact)
      .then(response => {
        Object.keys(contact).forEach(key => {
          contact[key] = null
        });
        ToastMessage('success', response.data.message)
      })
      .catch(error => {
        ToastMessage('error', error.message)
      })
      .finally(() => {
        unBlockAllPage()
      })
}

</script>