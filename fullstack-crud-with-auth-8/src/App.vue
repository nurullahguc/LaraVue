<template>
  <nav>
    <ul>
      <li>
        <router-link to="/Login">Login</router-link>
      </li>
      <li>
        <router-link to="/ContactList">Contact List</router-link>
      </li>
      <li>
        <router-link to="/CreateContact">Create Contact</router-link>
      </li>
      <li>
        <a href="javascript:void(0)" @click="authStore.logout">Logout</a>
      </li>
    </ul>
  </nav>
  <pre v-if="authStore.isLoggedIn">
    {{ 'Welcome ' +  authStore.user.name }}
  </pre>
  <router-view></router-view>
</template>


<script lang="ts" setup>
import {useAuthStore} from "@/stores/auth.store";
const authStore = useAuthStore()
</script>

<style scoped>


</style>
