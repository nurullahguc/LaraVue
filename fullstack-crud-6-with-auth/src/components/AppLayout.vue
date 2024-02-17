<template>
  <Loading v-model:active="isLoading"
           :can-cancel="false"
           :on-cancel="onCancel"
           :is-full-page="fullPage"></Loading>


  <AppHeader title="FullStack CRUD w Auth 6"></AppHeader>
  <br>
  <br>
  <br>
  <div class="container p-4">
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader"

</script>

<style scoped>

</style>