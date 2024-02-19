<template>
  <ag-grid-vue
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      style="height: 500px;"
      class="ag-theme-quartz"
  ></ag-grid-vue>
</template>

<script>
import {AgGridVue} from 'ag-grid-vue3'
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import {reactive, onMounted} from "vue";
// import 'ag-grid-enterprise'

export default {
  name: 'App',
  components: {
    AgGridVue
  },
  setup() {
    const rowData = reactive({
      value: [
        {make: 'A', model: 'corsa', price: 1333},
        {make: 'B', model: 'B corsa', price: 1333},
        {make: 'C', model: 'C corsa', price: 1333},
        {make: 'D', model: 'D corsa', price: 1333},
      ]
    });
    const columnDefs = reactive({
      value: [{field: 'make', sortable: true, filter: true},
        {field: 'model', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true},
      ]
    })
    onMounted(() => {
      fetch("https://ag-grid.com/example-assets/row-data.json")
          .then((result) => result.json())
          .then((remoteRowData) => (rowData.value = remoteRowData))
    })
    return {
      rowData, columnDefs
    }
  }
}
</script>

<style>

</style>
