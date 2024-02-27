<template>
  <h1>Create Contact</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Name:</label>
      <input v-model="contact.name" type="text">
    </div>
    <div>
      <label>Email:</label>
      <input v-model="contact.email" type="text">
    </div>
    <div>
      <label>Designation:</label>
      <input v-model="contact.designation" type="text">
    </div>
    <div>
      <label>Contact No:</label>
      <input v-model="contact.contact_no" type="text">
    </div>
    <button>Create Contact</button>
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Contact} from "@/models/contact.model";
import {contactService} from "@/api/contact.api";
import {ToastMessage} from "@/services/general.service";
import router from "@/router";

const contact = ref<Contact>({
  name: '',
  email: '',
  designation: '',
  contact_no: ''
})

const handleSubmit = () => {
  contactService.createContact(contact.value)
      .then(res => {
        ToastMessage('success', 'Contact created!', 'Successfully!')
        contact.value.name = ''
        contact.value.email = ''
        contact.value.designation = ''
        contact.value.contact_no = ''
      })
      .catch(err => err)
}

</script>
