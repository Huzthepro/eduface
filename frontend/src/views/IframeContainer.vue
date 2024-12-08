<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'IframeContainer',
  setup() {
    const iframeDiv = ref<HTMLElement | null>(null)
    const isResizing = ref(false)
    const mouseStart = ref({ x: 0, y: 0 })
    const divSize = ref({ width: 80, height: 50 }) // Initial size in percentage

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

      divSize.value.width = Math.min(Math.max(newWidth, 20), 100) // Keep between 20% and 100%
      divSize.value.height = Math.min(Math.max(newHeight, 20), 100) // Keep between 20% and 100%

      mouseStart.value = { x: event.clientX, y: event.clientY }
    }

    const handleMouseUp = () => {
      isResizing.value = false
    }

    onMounted(() => {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    })

    return {
      iframeDiv,
      divSize,
      handleMouseDown,
    }
  },
})
</script>

<template>
  <div id="iframe-container">
    <h1 style="text-align: center; margin-bottom: 20px">Iframe Test Container</h1>
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
      <!-- Resizer handle -->
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

.iframe-div {
  position: relative;
  background: white;
  overflow: hidden;
}

/* Styling for the resizer handle */
.resizer {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: gray;
  cursor: se-resize;
}
</style>
