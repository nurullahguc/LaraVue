<template>
  <header class="shadow-sm  bg-white">
    <nav class="coontainer mx-auto p-4 flex justify-between">
      <NuxtLink class="font-bold" to="/">Nuxt Dojo</NuxtLink>
      <ul class="flex gap-4">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products" class="btn">Products</nuxt-link>
          <nuxt-link to="/products/abc" class="">Abc Product</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>

  <!-- output the page content -->
  <div class="container mx-auto p-4">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>