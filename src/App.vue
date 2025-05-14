// filepath: d:\_Master_Js\vuejs\portfolio-vite-vue\src\App.vue
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  width: 100%;
  margin: 0 auto;
  padding: 0; /* Hapus padding untuk mengurangi jarak */
}

@media (min-width: 1200px) {
  #app {
    padding: 2rem; /* Tambahkan padding hanya untuk layar besar jika diperlukan */
  }
}
</style>
