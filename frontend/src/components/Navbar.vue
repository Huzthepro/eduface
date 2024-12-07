<template>
  <nav class="navbar">
    <div class="logo">Eduface</div>
    <div class="actions">
      <button class="nav-btn">Inloggen</button>
      <button class="nav-btn">Signup</button>
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.actions .nav-btn {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.actions .nav-btn:hover {
  background-color: #0056b3;
}
</style>
