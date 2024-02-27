<template>
  <div>
    <table border="1">
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
          <router-link :to="{name:'UpdateContact', params:{id: contact.id}}">
            <button>Edit</button>
          </router-link>
        </td>
        <td>
          <button @click="deleteContact(contact.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import {contactService} from "@/api/contact.api";
import {ref} from 'vue';
import {Contact} from "@/models/contact.model";
import {isLoading, ToastMessage} from "@/services/general.service";


const contacts = ref<Contact[]>([]);

const getContacts = () => {
  isLoading.value = true
  contactService.getContacts()
      .then(res => {
        contacts.value = res.data.contacts;
      })
      .finally(() => {
        isLoading.value = false
      })
}
getContacts()

const deleteContact = async (id: number | string) => {
  isLoading.value = true
  await contactService.deleteContact(id)
      .then(res => {
        getContacts()
        ToastMessage('success', res.data.message, 'Successfully')
      })
      .catch(err => err)
      .finally(() => {
        isLoading.value = false
      })
}

</script>

<style scoped>
table {
  margin: 0 auto;
}
</style>