<script setup>
import {onMounted} from "vue";
import {useAuthStore} from "../stores/auth.js";

const authStore = useAuthStore()


</script>

<template>

  <div v-if="authStore.user">
    <h1>{{ authStore.user?.name }}</h1>
    <h1>{{ authStore.user?.email }}</h1>
  </div>
  <div v-else>
    go and login
  </div>

</template>



<style scoped>

</style>