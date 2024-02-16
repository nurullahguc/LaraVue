<template>
  <div>
    <div class="container">
      <h2 class="text-primary">Welcome to Home Mr. <span class="text-warning">{{ authStore.authUser?.user?.name }}</span>
      </h2>
    </div>
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/authStore";
const authStore = useAuthStore()
</script>

<style scoped>

</style>