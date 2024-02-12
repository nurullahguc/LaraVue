<template>
  <div class="container">
    <div class="card p-5">
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-center text-primary ">Update Contact</h1>

          <form @submit.prevent="submitTheForm">
            <div class="form-group mt-5">
              <label class="form-label">Name:</label>
              <input type="text" class="form-control text-pirmary" v-model="name">
            </div>

            <div class="form-group mt-5">
              <label class="form-label">Email:</label>
              <input type="text" class="form-control text-pirmary" v-model="email">
            </div>

            <div class="form-group mt-5">
              <label class="form-label">Designation:</label>
              <input type="text" class="form-control text-pirmary" v-model="designation">
            </div>

            <div class="form-group mt-5">
              <label class="form-label">Contact Number:</label>
              <input type="text" class="form-control text-pirmary" v-model="contact_no">
            </div>

            <button type="submit" class="mt-4 btn btn-warning">Submit</button>
          </form>

        </div>
        <div class="col-md-6" v-show="errors.length">
          <h1 class="text-center text-danger">Errors</h1>

          <div class="alert alert-danger mt-3">
            <ul v-for="(error, key) in errors" :key="key">
              <li>{{ error }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import {useToast} from 'vue-toast-notification'

const $toast = useToast()
import {useLoading} from 'vue-loading-overlay'
import {useRoute} from 'vue-router'

const $loading = useLoading({});
const router = useRoute()

let name = ref('')
let email = ref('')
let designation = ref('')
let contact_no = ref('')
let errors = reactive([])

const getContact = () => {

  let loader = $loading.show({});

  axios.get("http://larapi.com/api/get_contact/" + router.params.id)
      .then(response => {
        name.value = response.data.name
        email.value = response.data.email
        designation.value = response.data.designation
        contact_no.value = response.data.contact_no
      })
      .then(() => {
          loader.hide()
      })
}

getContact()

const submitTheForm = () => {

  const loader = $loading.show({});

  errors.splice(0, errors.length)

  if (!name.value)
    errors.push('Name input reqired!')

  if (!email.value)
    errors.push('Email input reqired!')

  if (!designation.value)
    errors.push('Designation input reqired!')

  if (!contact_no.value)
    errors.push('Contact Number input reqired!')

  if (errors.length) {
    loader.hide()
    return false;
  }

  axios.post('http://larapi.com/api/update_contact/' + router.params.id, {
    name: name.value,
    email: email.value,
    designation: designation.value,
    contact_no: contact_no.value
  }).then(response => {
    $toast.success(response.data.message)
    console.log(response)


  }).catch(error => {
    $toast.error(error.message)
    console.log(error)
  }).finally(() => {
    loader.hide()
  })

}
</script>