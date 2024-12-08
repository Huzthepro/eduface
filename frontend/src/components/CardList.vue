<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Fetcher from '@/services/Fetcher'
import JobCard from '@/components/JobCard.vue'
import LoadingCard from './loadingCard.vue'

export default defineComponent({
  name: 'CardList',
  components: {
    JobCard,
    LoadingCard,
  },
  setup() {
    const cards = ref<Array<{ id: number; title: string; company: string; location: string }>>([])
    const loading = ref(true)
    const error = ref<string | null>(null)

    onMounted(async () => {
      try {
        const data = await Fetcher.get('applications/fetch-applications')
        cards.value = data
      } catch (err: unknown) {
        error.value = 'Failed to get job listings. Please try again later.'
        console.error((err as Error).message)
      } finally {
        loading.value = false
      }
    })

    return {
      cards,
      loading,
      error,
    }
  },
})
</script>

<template>
  <div class="card-list">
    <div v-if="loading" class="loading"><LoadingCard /></div>
    <div v-else-if="error" class="card-list-error">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <JobCard v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: auto;
  justify-content: center;
  flex-direction: column;
}
.card-list-error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: fit-content;
  margin: auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.144) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.171) 0px 30px 60px -30px;
  background-color: aliceblue;
}
</style>
