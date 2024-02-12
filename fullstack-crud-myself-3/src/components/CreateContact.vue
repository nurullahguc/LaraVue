<template>
  <AppLoading v-if="isLoading"/>
  <div class="container" v-else>
    <div class="card p-5">
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-center text-primary ">Craete New Contact</h1>

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
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useToast} from 'vue-toast-notification'
import AppLoading from "@/components/AppLoading"

const $toast = useToast()
import {isLoading, onUnLoading, timeoutValue} from "@/services/loading.service";
import {NumberTypeEnum} from "@/enums/number.enum";


let name = ref('')
let email = ref('')
let designation = ref('')
let contact_no = ref('')

let errors = reactive([])

onBeforeMount(() => {
  isLoading.value = true
})

onMounted(() => {
 onUnLoading()
})

const submitTheForm = () => {
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
    onUnLoading()
    return false;
  }
  isLoading.value = true
  timeoutValue.value = NumberTypeEnum.LOW

  axios.post('http://larapi.com/api/save_contact', {
    name: name.value,
    email: email.value,
    designation: designation.value,
    contact_no: contact_no.value
  }).then(response => {
    $toast.success(response.data.message)
    console.log(response)

    name.value = ""
    email.value = ""
    designation.value = ""
    contact_no.value = ""

  }).catch(error => {
    $toast.error(error.message)
    console.log(error)
  }).finally(() => {
    onUnLoading()
  })

}
</script>