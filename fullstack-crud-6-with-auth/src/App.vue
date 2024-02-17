<template>
  <div>
    <Loading v-model:active="isLoading"
             :can-cancel="false"
             :on-cancel="onCancel"
             :is-full-page="fullPage"></Loading>

    <router-view></router-view>
  </div>
</template>

<script setup>
import Loading from "vue-loading-overlay"
import {isLoading} from "@/services/general.service";

</script>

<style scoped>

</style>