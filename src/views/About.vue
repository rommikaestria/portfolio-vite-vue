<template>
  <div class="container py-8">
    <Card class="shadow-4">
      <template #title>
        <h1 class="text-4xl font-bold mb-0">Tentang Saya</h1>
      </template>
      <template #content>
        <div class="grid">
          <div class="col-12 md:col-4 mb-4 md:mb-0">
            <Avatar
              :image="profilePicture"
              size="xlarge"
              shape="circle"
              class="w-full h-15rem" />
          </div>
          <div class="col-12 md:col-8">
            <p class="text-xl line-height-3">
              Halo! Saya <strong>{{ name }}</strong
              >, seorang <strong>{{ profession }}</strong> dengan pengalaman
              dalam <strong>{{ skills.join(', ') }}</strong
              >.
            </p>
            <p class="line-height-3">
              Saya memiliki pengalaman bekerja pada berbagai proyek, termasuk
              pengembangan aplikasi web, sistem manajemen konten, dan platform
              e-commerce.
            </p>
            <p class="line-height-3 mb-4">
              Saya selalu bersemangat untuk belajar teknologi baru dan
              menghadapi tantangan baru dalam dunia pengembangan perangkat
              lunak.
            </p>

            <h3 class="font-semibold">Keahlian</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <Chip
                v-for="skill in skills"
                :key="skill"
                :label="skill"
                class="mr-2 mb-2" />
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Chip from 'primevue/chip';
import profilePicture from '../assets/profile-picture.png';

export default {
  components: {
    Card,
    Avatar,
    Chip,
  },
  data() {
    return {
      name: 'Rommi Kaestria',
      profession: 'EduContent Creator',
      profilePicture,
      skills: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'UI/UX Design'],
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
