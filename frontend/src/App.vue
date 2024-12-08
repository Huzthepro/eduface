<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RootApp',
})
</script>

<template>
  <router-view />
</template>

<style>
/* Global styles can be added here */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
