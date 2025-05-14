<template>
  <div class="contact">
    <h1>Kontak Saya</h1>
    <p>
      Jika Anda ingin menghubungi saya, silakan isi formulir di bawah ini atau
      kunjungi media sosial saya.
    </p>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nama</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Masukkan nama Anda"
          required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Masukkan email Anda"
          required />
      </div>

      <div class="form-group">
        <label for="message">Pesan</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Tulis pesan Anda"
          required></textarea>
      </div>

      <button type="submit">Kirim</button>
    </form>

    <div class="social-media">
      <h2>Media Sosial</h2>
      <ul>
        <li>
          <a href="https://twitter.com/username" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/username" target="_blank"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="https://github.com/username" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Terima kasih, ${this.form.name}! Pesan Anda telah dikirim.`);
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 2rem;
}

.contact h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact p {
  margin-bottom: 1.5rem;
  color: #555;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.7rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.social-media {
  margin-top: 2rem;
}

.social-media h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.social-media ul {
  list-style: none;
  padding: 0;
}

.social-media li {
  margin-bottom: 0.5rem;
}

.social-media a {
  color: #007bff;
  text-decoration: none;
}

.social-media a:hover {
  text-decoration: underline;
}
</style>
