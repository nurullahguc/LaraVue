<template>
  <div class="container">
    <div class="card p-5">
      <h1 class="text-center font-weight-bold text-primary pb-4">Contact List</h1>

      <table class="table">
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
        <tbody v-for="contact in contacts" :key="contact.id">
        <tr>
          <td>{{ contact.id }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.designation }}</td>
          <td>{{ contact.contact_no }}</td>
          <td>
            <router-link :to="{name: 'UpdateContact', params: {id: contact.id}}" class="btn btn-primary">Edit</router-link>
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

<script setup>
import {reactive} from "vue";
import axios from "axios"
import {useToast} from 'vue-toast-notification'

const $toast = useToast()
import {useLoading} from 'vue-loading-overlay'

const $loading = useLoading({});

let contacts = reactive([])

const getContacts = () => {
  const loader = $loading.show({});

  let url = "http://larapi.com/api/contacts"
  axios.get(url).then(response => {
    console.log(response.data)
    contacts.splice(0, contacts.length, ...response.data.contacts)
    loader.hide()
  })
}

const deleteContact = (id) => {
  let url = "http://larapi.com/api/delete_contact/" + id;
  axios.post(url).then(response => {
    $toast.success(response.data.message)
    getContacts()
  })
}

getContacts()

</script>