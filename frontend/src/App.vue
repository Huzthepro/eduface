<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'
import CardList from './components/CardList.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    CardList,
  },
  setup() {
    const isInFrame = ref(false)

    const toggleIframeView = () => {
      // isInFrame.value = !isInFrame.value
      //Not yet working as expected
    }

    return {
      isInFrame,
      toggleIframeView,
    }
  },
})
</script>

<template>
  <div id="app" :class="{ iframe: isInFrame }">
    <AppNavbar />
    <div id="content">
      <button class="toggle-view" @click="toggleIframeView">
        {{ isInFrame ? 'Exit Iframe View' : 'Switch to Iframe View' }}
      </button>
      <CardList />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  background-color: #f5f5f5;
}

#content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
}

/* Styles for iframe mode */
#iframe {
  border: none;
  height: 100%;
}

.toggle-view {
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  align-self: center;
}
.toggle-view:hover {
  background-color: #0056b3;
}

#app.iframe {
  height: calc(100vh - 50px);
  width: 100%;
  padding: 0;
  background-color: white;
}
#app.iframe #content {
  padding: 0;
}
</style>
