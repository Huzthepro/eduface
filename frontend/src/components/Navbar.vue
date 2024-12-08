<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppNavbar',
})
</script>
<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/logo.png" alt="Eduface" />
    </div>

    <div class="nav-btn">
      <button class="lgn-btn">Inloggen</button>
      <button class="sgn-btn">Signup</button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  max-width: 1080px;
  margin: 20px auto;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 150px;
  height: 40px;
}
.logo img {
  width: 100%;
  height: 100%;
}

.lgn-btn {
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  background-color: transparent;
  padding: 8px 48px;
  border: none;
  color: var(--vt-c-text-light-1);
  cursor: pointer;
}

.sgn-btn {
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin-left: 1rem;
  padding: 8px 48px;
  border: none;
  border-radius: 20px;
  background-color: var(--color-text);
  color: white;
  cursor: pointer;
}

.sgn-btn:hover {
  background-color: var(--vt-c-black-soft);
}

/* Media query for screens smaller than 530px */
@media screen and (max-width: 530px) {
  .navbar {
    flex-direction: column;
  }
  .logo {
    width: 100px;
    min-width: 100px;
    height: 30px;
  }
  .nav-btn {
    display: flex;
    flex-direction: row;
    margin-top: 24px;
  }
  .lgn-btn,
  .sgn-btn {
    font-size: 16px;
    padding: 8px 24px;
  }
}
</style>
