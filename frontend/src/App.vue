<script lang="ts">
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
}
</script>

<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<style scoped>
/* Make the app container take up the full screen */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* Allow the main content to fill the space between navbar and footer */
router-view {
  flex: 1;
  overflow-y: auto;
}
</style>
