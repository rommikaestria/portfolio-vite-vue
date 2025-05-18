<template>
  <header>
    <Menubar :model="items" class="surface-0 border-none shadow-2">
      <template #start>
        <router-link
          to="/"
          class="text-xl font-bold text-primary no-underline mr-5"
          >Portfolio</router-link
        >
      </template>
      <template #end>
        <Button
          icon="pi pi-bars"
          @click="toggleMenu"
          class="p-button-text p-button-rounded md:hidden" />
      </template>
    </Menubar>

    <!-- Menu mobile -->
    <Sidebar v-model:visible="showMenu" position="right" class="md:hidden">
      <div class="flex flex-column gap-3 p-3">
        <router-link
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="no-underline">
          <div
            class="p-3 border-round-lg cursor-pointer hover:surface-200 flex align-items-center">
            <i :class="item.icon" class="mr-3"></i>
            <span class="font-medium">{{ item.label }}</span>
          </div>
        </router-link>
      </div>
    </Sidebar>
  </header>
</template>

<script>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';

export default {
  components: {
    Menubar,
    Button,
    Sidebar,
  },
  data() {
    return {
      showMenu: false,
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => this.$router.push('/'),
        },
        {
          label: 'About',
          icon: 'pi pi-user',
          command: () => this.$router.push('/about'),
        },
        {
          label: 'Projects',
          icon: 'pi pi-briefcase',
          command: () => this.$router.push('/projects'),
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          command: () => this.$router.push('/contact'),
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
/* Sembunyikan menu icon pada layar besar */
@media (min-width: 768px) {
  :deep(.p-menubar-button) {
    display: none;
  }
}

/* Add this to ensure the menubar items are clickable */
:deep(.p-menuitem-content) {
  cursor: pointer;
}
</style>
