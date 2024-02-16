<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Just Vue Auth Project</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
              aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" exact-active-class="active"  class="nav-link" href="#">Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about"  active-class="active" class="nav-link" href="#">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" href="#">Login</router-link>
          </li>

        </ul>
        <form class="d-flex">
          <button @click="authStore.logout" class="btn btn-secondary my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {useAuthStore} from "@/stores/authStore";

const authStore = useAuthStore()
</script>

<style scoped>

</style>