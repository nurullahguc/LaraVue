<template>
  <div class="card text-center">
    <img :src="product.image" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <p class="font-bold text-orange-600 m-4 truncate">${{ product.price }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>

<style scoped>

.thumb {
  max-height: 60px;
  max-width: 50%;
  margin: 0 auto;
}
</style>