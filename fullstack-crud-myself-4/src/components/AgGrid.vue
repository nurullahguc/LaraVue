<template>
  <div class="container p-4">
    <div class="card p-3">
      <h2 class="text-center text-primary pb-5">AgGrid</h2>
      <div class="ag-theme-quartz" style="height: 500px; width: 100%;">
        <ag-grid-vue
            style="width: 100%; height: 100%;"
            class="ag-theme-quartz"
            ref="agGridRef"
            :columnDefs="columnDefs"
            :rowData="contacts">
        </ag-grid-vue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, reactive, ref} from 'vue';

import {AgGridVue} from "ag-grid-vue3";
import {base_url, blockAllPage, unBlockAllPage} from "@/services/general.services";
import axios from "axios"; // Vue Grid Logic

const columnDefs = ref([
  {headerName: "Name", field: "name"},
  {headerName: "Email", field: "email"},
  {headerName: "Designation", field: "designation"},
  {headerName: "Contact Number", field: "contact_no"},
  {headerName: "Created At", field: "created_at"}
]);

const agGridRef = ref(null);


interface Contact {
  id: number,
  name: string,
  email: string,
  designation: string,
  contact_no: string,
  created_at: string,
}

const contacts = reactive<Contact[]>([])


const getContacts = () => {

  blockAllPage()
  axios.get(base_url + "/contacts")
      .then(response => {
        contacts.splice(0, contacts.length, ...response.data.contacts)
        if (agGridRef.value) {
          agGridRef.value.api.setRowData(contacts);
        }
      })
      .finally(() => {
        unBlockAllPage()
      })
}


getContacts()

</script>
