<script lang="ts">
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    CardList,
  },
}
</script>

<template>
  <div id="app">
    <AppNavbar />
    <div id="content">
      <CardList />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
/* Ensure the app container takes up the full screen */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  width: 100vw;
  overflow: hidden;
}

/* Content section takes up remaining space between Navbar and Footer */
#content {
  flex: 1; /* Fills available space */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>
