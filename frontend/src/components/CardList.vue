<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Fetcher from '@/services/Fetcher'

export default defineComponent({
  name: 'CardList',
  setup() {
    const cards = ref([])
    const loading = ref(true)
    const error = ref<string | null>(null)
    const saveMessages = ref<Record<number, string>>({}) // Store messages (success or error) for each card

    const saveApplication = async (card: {
      id: number
      title: string
      company: string
      location: string
    }) => {
      try {
        const response = await Fetcher.post('applications/save-application', card)
        console.log('Application saved:', response)
        saveMessages.value[card.id] = 'Saved successfully!' // Set success message
      } catch (err: any) {
        console.error('Error saving application:', err)
        saveMessages.value[card.id] = err.message || 'Failed to save application.' // Set error message
      }
    }

    onMounted(async () => {
      try {
        const data = await Fetcher.get('applications/fetch-applications')
        cards.value = data
      } catch (err: any) {
        console.error('Error fetching applications:', err)
        error.value = 'Failed to fetch applications. Please try again.'
      } finally {
        loading.value = false
      }
    })

    return {
      cards,
      loading,
      error,
      saveMessages,
      saveApplication,
    }
  },
})
</script>

<template>
  <div class="card-list">
    <div v-if="loading" class="loading">
      <p>Loading job applications...</p>
    </div>
    <div v-else-if="error" class="error">
      <div class="card">
        <div class="card-center">
          <h3 class="card-title">No Job Application Found</h3>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="card in cards" :key="card.id" class="card">
        <div class="card-content">
          <div class="card-left">
            <img src="/src/assets/icon.png" alt="Logo" class="logo" />
          </div>
          <div class="card-center">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-company">{{ card.company }}</p>
            <div class="button-message-container">
              <button class="save-button" @click="saveApplication(card)">Save</button>
              <p
                v-if="saveMessages[card.id]"
                :class="saveMessages[card.id].includes('Saved') ? 'save-success' : 'save-error'"
              >
                {{ saveMessages[card.id] }}
              </p>
            </div>
          </div>
          <div class="card-right">
            <div class="info-row">
              <img src="/src/assets/Location.png" alt="Location" class="icon" />
              <span>{{ card.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.card {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  padding: 0.5rem;
  border-radius: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.card-left {
  margin-right: 1rem;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.card-center {
  flex: 1;
  text-align: left;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
.card-company {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.button-message-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between button and message */
  margin-top: 10px;
}

.save-button {
  padding: 5px 10px;
  border: none;
  background-color: #002333;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.save-button:hover {
  background-color: #002333c9;
}

.save-error {
  color: red;
  font-size: 0.9rem;
}

.save-success {
  color: green;
  font-size: 0.9rem;
}

.card-right {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 1px solid #ddd;
  padding-left: 1rem;
  gap: 0.5rem;
}
.info-row {
  display: flex;
  align-items: center;
}
.icon {
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
}
</style>
