<template>
  <div
    class="grid grid-nogutter justify-content-center align-items-center py-8">
    <div class="col-12 text-center">
      <div class="flex justify-content-center mb-4">
        <Avatar
          :image="profilePicture"
          size="xlarge"
          shape="circle"
          class="shadow-4"
          style="width: 200px; height: 200px" />
      </div>
      <h1 class="text-5xl font-bold mb-2">{{ name }}</h1>
      <p class="text-xl text-600 mb-5">{{ profession }}</p>

      <div class="flex justify-content-center">
        <Button
          label="Lihat Projects"
          icon="pi pi-eye"
          class="mr-2"
          @click="$router.push('/projects')" />
        <Button
          label="Hubungi Saya"
          icon="pi pi-send"
          severity="secondary"
          @click="$router.push('/contact')" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import profilePicture from '../assets/profile-picture.png';

export default {
  components: {
    Avatar,
    Button,
  },
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
