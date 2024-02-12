<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{ props.title }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Contact List
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{name: 'CreateContact'}">Create New Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

const props = defineProps(['title', 'message'])

console.log(props)

</script>