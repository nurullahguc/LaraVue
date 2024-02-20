<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{product.title}}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
import {useFetch} from "nuxt/app";
import ProductDetails from "../../components/ProductDetails.vue";

const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(uri, {key: id})

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found!', fatal: true})
}

definePageMeta({
  layout: 'products'
})


</script>

<style scoped>

</style>