<template>
  <h1>Update Contact</h1>
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
    <button>Update Contact</button>
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Contact} from "@/models/contact.model";
import {contactService} from "@/api/contact.api";
import {ToastMessage} from "@/services/general.service";
import {useRoute} from "vue-router";

const route = useRoute()
const contactId = ref<number | string>('')
contactId.value = route.params.id.toString()


const contact = ref<Contact>({
  name: '',
  email: '',
  designation: '',
  contact_no: ''
})

const handleSubmit = () => {
  contactService.updateContact(contact.value)
      .then(res => {
        ToastMessage('success', res.data.message, 'Successfully!')
      })
      .catch(err => err)
}

const getContact = () => {
  contactService.getContact(contactId.value)
      .then(res => {
        contact.value = res.data
      })
}
getContact()
</script>
