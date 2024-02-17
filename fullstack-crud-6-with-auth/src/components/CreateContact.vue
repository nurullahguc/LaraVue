<template>
  <div class="row">
    <div class="col-md-6">
      <h2 class="text-center text-info">Create Contact</h2>

      <div class="form-group">
        <div class="form-label">Name:</div>
        <input type="text" class="form-control">
      </div>
      <div class="form-group mt-2">
        <div class="form-label">Email:</div>
        <input type="text" class="form-control">
      </div>
      <div class="form-group mt-2">
        <div class="form-label">Designation:</div>
        <input type="text" class="form-control">
      </div>
      <div class="form-group mt-2">
        <div class="form-label">Contact Number:</div>
        <input type="text" class="form-control">
      </div>
      <button class="mt-4 btn-primary btn">Submit</button>
    </div>
    <div class="col-md-6">
      <h2 class="text-center text-danger">Errors</h2>
      <div class="alert alert-danger">
        <ul>
          <li>1st error</li>
          <li>2nd error</li>
          <li>3rd error</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>nth error</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>