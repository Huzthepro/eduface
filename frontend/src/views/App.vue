<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import AppNavbar from '../components/Navbar.vue'
import AppFooter from '../components/Footer.vue'
import CardList from '../components/CardList.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    CardList,
  },
  setup() {
    const router = useRouter()
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
    const navigateToIframeTest = () => {
      router.push('/iframe-container')
    }

    return { iframeToggle, isInIframe, navigateToIframeTest }
  },
})
</script>

<template>
  <div id="app" :class="{ iframe: isInIframe }">
    <AppNavbar />
    <div class="iframe-control">
      <div class="iframe-toggle" @click="iframeToggle">
        {{ isInIframe ? 'Iframe Mode' : 'Web Mode' }}
      </div>
      <div class="iframe-link" @click="navigateToIframeTest">
        Click to: Inside iframe on page load
      </div>
    </div>

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
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
}
#app.iframe {
  width: 100%;
}

#content {
  display: flex;
  margin: auto;
  flex-grow: 1;
  align-items: start;
  width: 100%;
  max-width: 1280px;
  padding: 20px 64px;
}

.iframe-control {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
.iframe-link {
  cursor: pointer;
}
.iframe-toggle {
  width: 120px;
  text-align: center;
  cursor: pointer;
  background-color: var(--vt-c-text-light-1);
  padding: 5px 12px 4px 12px;
  border-radius: 30px;
  color: var(--vt-c-text-dark-1);
}
</style>
