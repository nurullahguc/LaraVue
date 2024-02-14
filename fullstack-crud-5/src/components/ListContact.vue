<template>
  <div class="container">
    <div class="card p-5">
      <h1 class="text-center text-warning p-3">List Contact</h1>
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Contact Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.id }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.designation }}</td>
          <td v-html="contact.contact_no"></td>
          <td>
            <router-link class="btn btn-primary btn-sm" :to="{name: 'UpdateContact', params: {id:contact.id}}">
              Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteContact(contact.id)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

import axios from "axios";
import {base_url, ToastMessage} from "@/services/general.service";
import {reactive} from "vue";
import {isLoading} from "@/services/general.service";

const contacts = reactive([])


const deleteContact = (id) => {
  isLoading.value = true
  axios.post(base_url + '/delete_contact/' + id)
      .then((response) => {
        ToastMessage('success', response.data.message)
        getContacts()
      })
      .catch((error) => {
        ToastMessage('error', error.message)
      })
      .finally(() => {
        isLoading.value = false
      })
}


const getContacts = () => {
  isLoading.value = true
  axios.get(base_url + "/contacts")
      .then((response) => {
        contacts.splice(0, contacts.length, ...response.data.contacts)
      })
      .finally(() => {
        isLoading.value = false
      })
}

getContacts()

</script>