<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import AppNavbar from '../components/Navbar.vue'
import AppFooter from '../components/Footer.vue'
import CardList from '../components/CardList.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    CardList,
  },
  setup() {
    const isInIframe = ref(false)

    // Check if the page is loaded in an iframe
    const checkIfInIframe = () => {
      isInIframe.value = window.self !== window.top
    }

    // Run the iframe check when the component is mounted
    onMounted(() => {
      checkIfInIframe()
    })

    return {
      isInIframe,
    }
  },
})
</script>

<template>
  <div id="app" :class="{ iframe: isInIframe }">
    <AppNavbar />
    <div id="content">
      <CardList />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f5f5f5;
}
#content {
  flex-grow: 1;
}

#app.iframe {
}

#app.iframe #content {
  background-color: rgb(255, 187, 0);
}
</style>
