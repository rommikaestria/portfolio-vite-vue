<template>
  <header class="bg-primary text-white py-3">
    <nav class="container d-flex justify-content-between align-items-center">
      <h1 class="h4">Portfolio</h1>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link text-white"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link text-white"
            >Projects</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link text-white"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
