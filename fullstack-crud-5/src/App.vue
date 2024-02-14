<template>
  <Loading v-model:active="isLoading"
           :can-cancel="false"
           :on-cancel="onCancel"
           :is-full-page="fullPage"></Loading>
  <AppHeader title="Fullstack CRUD 5"></AppHeader>
  <RouterView></RouterView>
</template>

<script setup>
import AppHeader from "@/components/AppHeader";
import Loading from "vue-loading-overlay"
import {isLoading} from "@/services/general.service";

</script>