<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ props.title }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
              aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CreateContact">Create Contact</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps(['title'])

</script>