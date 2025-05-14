import { createRouter, createWebHistory } from 'vue-router';

// Import komponen untuk setiap halaman
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Projects from '../views/Projects.vue';

// Definisikan rune
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
];

//Buat router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Ekspor router
export default router;
