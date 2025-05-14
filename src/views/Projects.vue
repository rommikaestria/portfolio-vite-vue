<template>
  <div class="projects">
    <h1>Daftar Proyek</h1>
    <ul v-if="projects.length">
      <li v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <p><strong>Teknologi:</strong> {{ project.technologies.join(', ') }}</p>
        <a :href="project.link" target="_blank">Lihat Proyek</a>
      </li>
    </ul>
    <p v-else>Tidak ada proyek untuk ditampilkan.</p>
  </div>
</template>

<script>
import projects from '../data/project.json';

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 2rem;
}

.projects ul {
  list-style: none;
  padding: 0;
}

.projects li {
  margin-bottom: 2rem;
}

.projects h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.projects a {
  color: #007bff;
  text-decoration: none;
}

.projects a:hover {
  text-decoration: underline;
}
</style>
