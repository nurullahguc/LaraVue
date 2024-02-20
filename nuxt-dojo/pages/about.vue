<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor fugiat impedit maiores recusandae. Ducimus et
      facere, ipsam minima modi mollitia nam nihil nobis, pariatur quasi quibusdam quis repudiandae, tenetur.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor fugiat impedit maiores recusandae. Ducimus et
      facere, ipsam minima modi mollitia nam nihil nobis, pariatur quasi quibusdam quis repudiandae, tenetur.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor fugiat impedit maiores recusandae. Ducimus et
      facere, ipsam minima modi mollitia nam nihil nobis, pariatur quasi quibusdam quis repudiandae, tenetur.
    </p>
    <div>{{ data }}</div>
    <router-link to="/">Go To Index</router-link>
  </div>
</template>

<script setup>
import {useFetch} from "nuxt/app";

const {data} = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>