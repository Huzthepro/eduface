<template>
  <nav class="navbar">
    <img class="" src="/src/assets/logo.png" alt="LinkedIn" style="width: 150px; height: 40px" />
    <div class="">
      <button class="lgn-btn">Inloggen</button>
      <button class="sgn-btn">Signup</button>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
.navbar {
  margin: 20px auto;
  display: flex;
  width: 90%;
  max-width: 1080px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.lgn-btn {
  font-size: 1.1rem;
  font-weight: bold;
  height: 40px;
  background-color: rgba(128, 128, 128, 0);
  padding: 8px 48px;
  border: none;
  border-radius: 20px;
  color: var(--vt-c-text-light-1);
  cursor: pointer;
}
.sgn-btn {
  font-size: 1.1rem;
  font-weight: bold;
  height: 40px;
  margin-left: 1rem;
  padding: 8px 48px;
  border: none;
  border-radius: 20px;
  background-color: #002333;
  color: white;
  cursor: pointer;
}
.sgn-btn:hover {
  background-color: #002333e1;
}
</style>
