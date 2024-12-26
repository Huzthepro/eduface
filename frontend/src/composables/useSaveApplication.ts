import { ref } from 'vue'
import Fetcher from '@/services/Fetcher'

export function useSaveApplication() {
  const loading = ref(false)
  const saveMessages = ref<Record<number, string>>({})

  const saveApplication = async (card: {
    id: number
    title: string
    company: string
    location: string
  }) => {
    loading.value = true

    try {
      const response = await Fetcher.post('jobs/save-job', card)
      saveMessages.value[card.id] = response.message || 'Saved successfully!'
    } catch (err: unknown) {
      saveMessages.value[card.id] = (err as Error).message || 'Failed to save application.'
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    saveMessages,
    saveApplication,
  }
}
