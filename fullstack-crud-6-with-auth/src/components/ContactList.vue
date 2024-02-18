<template>

  <h2 class="text-primary text-center mb-4">Contact List</h2>
  <table class="table table-bordered table-striped">
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
    <tr v-for="contact in contactList" :key="contact.id">
      <td>{{ contact.id }}</td>
      <td>{{ contact.name }}</td>
      <td>{{ contact.email }}</td>
      <td>{{ contact.designation }}</td>
      <td>{{ contact.contact_no }}</td>
      <td>
        <router-link :to="{name: 'EditContact', params: {id: contact.id}}" class="btn btn-primary">Edit</router-link>
      </td>
      <td>
        <button @click="deleteContact(contact.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import {reactive} from "vue";
import axios from "axios"
import {isLoading} from "@/services/general.service";
import {ToastMessage} from "@/services/general.service";

const contactList = reactive([])

const getContactList = () => {
  isLoading.value = true
  axios.get("/with_auth/contacts")
      .then(response => {
        contactList.splice(0, contactList.length, ...response.data.contacts)
      })
      .catch(err => err)
      .finally(() => {
        isLoading.value = false
      })
}

const deleteContact = (id) => {
  axios.post('/with_auth/delete_contact/' + id)
      .then(response => {
        ToastMessage('success', response.data.message, 'İşlem Başarılı!')
        getContactList()
      })
}


getContactList()

</script>

<style scoped>

table thead tr th, table tbody tr td {
  color: #fff !important;
}

</style>