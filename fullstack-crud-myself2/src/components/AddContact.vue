<template>
  <div class="container">
    <div class="card p-3">
      <h3 class="text-info text-center">Create New Contact</h3>
      <div class="row">
        <div class="col-md-6">
          <form @submit.prevent="submitForm">
            <div class="form-group mb-2">
              <label class="form-label">Name:</label>
              <input type="text" class="form-control" placeholder="Enter Name" v-model="name">
            </div>

            <div class="form-group mb-2">
              <label class="form-label">Email:</label>
              <input type="text" class="form-control" placeholder="Enter Email" v-model="email">
            </div>

            <div class="form-group mb-2">
              <label class="form-label">Designation:</label>
              <input type="text" class="form-control" placeholder="Enter Designation" v-model="designation">
            </div>

            <div class="form-group mb-2">
              <label class="form-label">Contact Number:</label>
              <input type="text" class="form-control" placeholder="Enter Contact Number:" v-model="contact_no">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-6" v-show="errors.length">
          <h3 class="text-danger text-center">Fix the errors!</h3>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
// import axios from "axios";

const name = ref('')
const email = ref('')
const designation = ref('')
const contact_no = ref('')
const errors = ref([])

const submitForm = () => {

  if (!name.value)
    errors.value.push("name is required!")


  // return false
  // axios.post("http://larapi.com/api/save_contact", {
  //   name,
  //   email,
  //   designation,
  //   contact_no
  // }).then(response => {
  //   alert(response.data.message)
  // })
}


</script>