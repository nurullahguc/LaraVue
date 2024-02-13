<template>

  <div class="container p-5">
    <div class="card p-3">
      <h1 class="text-center text-primary mb-5">Contact List</h1>

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
          <td>{{ contact.contact_no }}</td>
          <td>
            <router-link :to="{name: 'UpdateContact', params:{id: contact.id}}" class="btn btn-primary">Edit
            </router-link>
          </td>
          <td>
            <button @click="deleteContact(contact.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {base_url, ToastMessage, blockAllPage, unBlockAllPage} from "@/services/general.services";
import {reactive, ref} from "vue";


interface Contact {
  id: number,
  name: string,
  email: string,
  designation: string,
  contact_no: string,
}

// let loadingStatus = ref(true)

const contacts = reactive<Contact[]>([])

const getContacts = () => {

  blockAllPage()
  axios.get(base_url + "/contacts")
      .then(response => {
        contacts.splice(0, contacts.length, ...response.data.contacts)
      })
      .finally(() => {
        unBlockAllPage()
      })
}

const deleteContact = (id: number) => {
  axios.post(base_url + "/delete_contact/" + id)
      .then(response => {
        ToastMessage('success', response.data.message)
        getContacts()
      })

}

getContacts()
</script>