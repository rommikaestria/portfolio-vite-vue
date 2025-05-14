<template>
  <div class="container text-center py-5">
    <img
      class="rounded-circle mb-4 img-fluid"
      :src="profilePicture"
      alt="Foto Profil"
      style="max-width: 200px; height: auto" />
    <h1 class="display-3 fw-bold">{{ name }}</h1>
    <p class="lead fs-4">{{ profession }}</p>
  </div>
</template>

<script>
import profilePicture from '../assets/profile-picture.png';

export default {
  data() {
    return {
      name: 'Rommi Kaestria',
      profession: 'EduContent Creator',
      profilePicture,
    };
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
