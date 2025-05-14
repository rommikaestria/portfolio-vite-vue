<template>
  <div class="home">
    <section class="intro">
      <img class="profile-pic" :src="profilePicture" alt="Foto Profil" />
      <h1>{{ name }}</h1>
      <p class="profession">{{ profession }}</p>
    </section>
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
.home {
  text-align: center;
  padding: 2rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.intro h1 {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.profession {
  font-size: 1.2rem;
  color: #555;
}
</style>
