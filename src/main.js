import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import Aura from '@primeuix/themes/aura';

//import PrimeVue
import PrimeVue from 'primevue/config';

// Import tema PrimeVue
//import 'primevue/resources/themes/lara-light-blue/theme.css'; //theme

// Import PrimeVue Core CSS
//import 'primevue/resources/primevue.min.css'; //core css

// Import PrimeIcons
import 'primeicons/primeicons.css'; //icons

// Import PrimeFlex
import 'primeflex/primeflex.css'; //flex utilities

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
  },
});

app.mount('#app');
