<template>
  <h2 class="text-center text-warning mt-4">List Contact Page</h2>
  <div class="container">
    <table class="table table-bordered table-hover mt-5">
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
          <router-link :to="{name:'EditContact', params:{id:contact.id}}"
                       class="btn btn-sm btn-primary">Edit
          </router-link>
        </td>
        <td>
          <button @click="this.deleteContact(contact.id)" class="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ListContact',
  data() {
    return {
      contacts: Array,
    }
  },
  created() {
    this.getContacts()
  },
  methods: {
    async getContacts() {
      await axios.get('http://larapi.com/api/contacts').then(response => {
        this.contacts = response.data.contacts
        console.log(response.data)
      })
    },
    async deleteContact(id) {
      let confirmResult = confirm('are u sure about that?')
      if (!confirmResult)
        return false

      await axios.post('http://larapi.com/api/delete_contact/' + id)
          .then(response => {
            console.log(response)
            alert(response.data.message)
            this.getContacts()
          })
    }
  },
  mounted() {
    console.log('ListContact Mounted')
  }
}
</script>