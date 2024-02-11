<template>

  <div class="container pt-5">
    <div class="card p-3">
      <h2 class="text-center text-primary">Contact List</h2>

      <table class="mt-2 table table-bordered table-striped table-hover">
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
        <tbody v-for="contact in Contacts" :key="contact.id">
        <tr>
          <td>{{ contact.id }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.designation }}</td>
          <td>{{ contact.contact_no }}</td>
          <td>
            <button class="btn btn-primary btn-sm">Edit</button>
          </td>
          <td>
            <button @click="deleteContact(contact.id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>

</template>

<script setup>

import axios from 'axios'
import {reactive, onMounted} from "vue";

let Contacts = reactive([])

onMounted(() => {
  getContacts()
})


const getContacts = () => {
  axios.get('http://larapi.com/api/contacts')
      .then(response => {
        Contacts.splice(0, Contacts.length);

        response.data.contacts
            .forEach(contact => Contacts.push(contact))
      })
}

const deleteContact = (id) => {
  axios.post("http://larapi.com/api/delete_contact/" + id)
      .then(response => {
        alert(response.data.message)
        getContacts()
      })
}


</script>