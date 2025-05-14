<template>
  <div class="container text-center py-5">
    <img
      class="rounded-circle mb-4"
      :src="profilePicture"
      alt="Foto Profil"
      width="150"
      height="150" />
    <h1 class="display-4">{{ name }}</h1>
    <p class="lead">{{ profession }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Nama Anda',
      profession: 'Profesi Anda',
      profilePicture: '/path/to/profile-picture.jpg',
    };
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
