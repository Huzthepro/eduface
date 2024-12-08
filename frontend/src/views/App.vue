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

    const iframeToggle = () => {
      isInIframe.value = !isInIframe.value
    }

    const checkIfInIframe = () => {
      isInIframe.value = window.self !== window.top
    }

    onMounted(() => {
      checkIfInIframe()
    })

    return { iframeToggle, isInIframe }
  },
})
</script>

<template>
  <div id="app" :class="{ iframe: isInIframe }">
    <AppNavbar />
    <div v-if="!isInIframe" class="iframe-info" @click="iframeToggle">Web Mode</div>
    <div v-if="isInIframe" class="iframe-info" @click="iframeToggle">Iframe Mode</div>
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

.iframe-info {
  cursor: pointer;
  position: sticky;
  margin-bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  background-color: #002333;
  padding: 5px 12px;
  border-radius: 30px;
  color: white;
}
</style>
