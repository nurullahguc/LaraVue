<template>
  <div class="navbar navbar-expand-lg fixed-top bg-primary" data-bs-theme="dark" style="">
    <div class="container">
      <router-link to="/ContactList" class="navbar-brand" href="#">{{ props.title }}</router-link>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/ContactList" exact-active-class="active" class="nav-link">Contact List
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CreateContact">Create Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/UserProfile">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name: 'About'}">About</router-link>
          </li>

        </ul>
        <ul class="navbar-nav ms-md-auto">

          <li class="nav-item dropdown" data-bs-theme="light">
            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="version-menu"
               aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static" aria-label="Toggle theme">
              <span>{{ userName }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a @click.prevent="authStore.logout()"
                             class="dropdown-item d-flex align-items-center justify-content-between"
                             aria-current="true">
                  <span class="ms-2">Logout</span><i class="bi bi-check"></i>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps} from "vue";
import {useAuthStore} from "@/sotres/authStore";
import {storeToRefs} from "pinia"

const props = defineProps(['title'])
const authStore = useAuthStore()
const {user} = storeToRefs(authStore)
console.log(user.value.name)

const userName = computed(() => user.value?.name)
</script>

<style scoped>

</style>