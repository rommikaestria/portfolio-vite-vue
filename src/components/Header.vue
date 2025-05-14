<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Portfolio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
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
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
