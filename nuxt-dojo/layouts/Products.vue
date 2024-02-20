<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4">
      <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>

    </nav>
  </header>

  <!-- output the page content -->

  <div class="container mx-auto p-4">
    <slot></slot>
  </div>

  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products">Products</nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>