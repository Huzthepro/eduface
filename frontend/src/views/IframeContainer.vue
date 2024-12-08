<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IframeContainer',
  setup() {
    const router = useRouter()
    const iframeDiv = ref<HTMLElement | null>(null)
    const isResizing = ref(false)
    const mouseStart = ref({ x: 0, y: 0 })
    const divSize = ref({ width: 80, height: 50 })

    const handleMouseDown = (event: MouseEvent) => {
      isResizing.value = true
      mouseStart.value = { x: event.clientX, y: event.clientY }
      event.preventDefault()
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!isResizing.value || !iframeDiv.value) return

      const deltaX = event.clientX - mouseStart.value.x
      const deltaY = event.clientY - mouseStart.value.y

      const newWidth = divSize.value.width + (deltaX / window.innerWidth) * 100
      const newHeight = divSize.value.height + (deltaY / window.innerHeight) * 100

      divSize.value.width = Math.min(Math.max(newWidth, 20), 100)
      divSize.value.height = Math.min(Math.max(newHeight, 20), 100)

      mouseStart.value = { x: event.clientX, y: event.clientY }
    }

    const handleMouseUp = () => {
      isResizing.value = false
    }

    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    })

    const navigateToHome = () => {
      router.push('/')
    }

    return {
      iframeDiv,
      divSize,
      handleMouseDown,
      navigateToHome,
    }
  },
})
</script>

<template>
  <div id="iframe-container">
    <h1 style="text-align: center; margin-bottom: 20px">Iframe Test Container</h1>
    <button class="back-button" @click="navigateToHome">Back to Home Page</button>
    <div
      ref="iframeDiv"
      class="iframe-div"
      :style="{ width: divSize.width + '%', height: divSize.height + 'vh' }"
    >
      <iframe
        src="/"
        style="width: 100%; height: 100%; border: 1px solid #ccc"
        frameborder="0"
      ></iframe>

      <div class="resizer" @mousedown="handleMouseDown"></div>
    </div>
  </div>
</template>

<style scoped>
#iframe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.back-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #002333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}
.back-button:hover {
  background-color: #005666;
}

.iframe-div {
  position: relative;
  background: white;
  overflow: hidden;
}

.resizer {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: rgb(51, 177, 128);
  border: 2px solid #002333;
  cursor: se-resize;
}
</style>
