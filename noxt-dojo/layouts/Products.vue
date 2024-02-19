<template>
  <header>
    <nav>
      <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>

    </nav>
  </header>

  <!-- output the page content -->

  <div>
    <slot></slot>
  </div>

  <footer>
    <ul>
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