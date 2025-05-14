<template>
  <div class="about">
    <h1>Tentang Saya</h1>
    <p>
      Halo! Saya <strong>{{ name }}</strong
      >, seorang <strong>{{ profession }}</strong> dengan pengalaman dalam
      <strong>{{ skills.join(', ') }}</strong
      >.
    </p>
    <p>
      Saya memiliki pengalaman bekerja pada berbagai proyek, termasuk
      pengembangan aplikasi web, sistem manajemen konten, dan platform
      e-commerce.
    </p>
    <p>
      Saya selalu bersemangat untuk belajar teknologi baru dan menghadapi
      tantangan baru dalam dunia pengembangan perangkat lunak.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Nama Anda',
      profession: 'Profesi Anda',
      skills: ['Vue.js', 'JavaScript', 'CSS', 'HTML'],
    };
  },
};
</script>

<style scoped>
.about {
  padding: 2rem;
  line-height: 1.6;
}

.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about p {
  margin-bottom: 1rem;
  color: #555;
}
</style>
