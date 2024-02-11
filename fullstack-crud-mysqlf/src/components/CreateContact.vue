<template>
  <div class="container mt-5">
    <h2>Create New Contact</h2>
    <hr>

    <div class="row">
      <div class="col-md-6">

        <form @submit.prevent="saveContact">
          <fieldset>
            <div class="form-group">
              <label class="form-label">Name:</label>
              <input type="text" class="form-control" v-model="contact.name" placeholder="Enter Name">
            </div>
            <div class="form-group">
              <label class="form-label">Email:</label>
              <input type="text" class="form-control" v-model="contact.email" placeholder="Enter Email">
            </div>
            <div class="form-group">
              <label class="form-label">Designation:</label>
              <input type="text" class="form-control" v-model="contact.designation" placeholder="Enter Designation">
            </div>
            <div class="form-group">
              <label class="form-label">Contact Number:</label>
              <input type="text" class="form-control" v-model="contact.contact_no" placeholder="Enter Contact Number">
            </div>

            <button type="submit" class="btn btn-warning mt-4">Create New Contact</button>

          </fieldset>
        </form>
      </div>
      <div class="col-md-6">
        <div class="div" v-if="errors.length">
          <h4 class="text-center text-danger">Fix the Error, then try it again!</h4>
          <div class="alert alert-danger">
            <ul v-for="(error, index) in errors" :key="index">
              <li>{{ error }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CreateContact',
  data() {
    return {
      contact: {
        name: '',
        email: '',
        designation: '',
        contact_no: '',
      },
      errors: [],
    }
  },
  methods: {
    async saveContact() {
      this.errors = []
      if (!this.contact.name)
        this.errors.push("Name is required!")

      if (!this.contact.email)
        this.errors.push("Email is required!")

      if (!this.contact.designation)
        this.errors.push("Designation is required!")

      if (!this.contact.contact_no)
        this.errors.push("Contact Number is required!")


      if (this.errors.length)
        return false

      let formData = new FormData()
      formData.append('name', this.contact.name)
      formData.append('email', this.contact.email)
      formData.append('designation', this.contact.designation)
      formData.append('contact_no', this.contact.contact_no)

      let url = "http://larapi.com/api/save_contact";

      await axios.post(url, formData).then(response => {
        alert(response.data.message)
        this.contact.name = ""
        this.contact.email = ""
        this.contact.designation = ""
        this.contact.contact_no = ""
      }).catch(error => {
        alert(error.data.message)
      })
    }
  }

}
</script>

