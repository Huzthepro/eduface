<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Fetcher from '@/services/Fetcher'

export default defineComponent({
  name: 'CardList',
  setup() {
    const cards = ref([])
    const loading = ref(true)
    const error = ref<string | null>(null)
    const saveMessages = ref<Record<number, string>>({})

    const saveApplication = async (card: {
      id: number
      title: string
      company: string
      location: string
    }) => {
      try {
        const response = await Fetcher.post('applications/save-application', card)
        console.log('Application saved:', response)
        saveMessages.value[card.id] = 'Saved successfully!'
      } catch (err: any) {
        console.error('Error saving application:', err)
        saveMessages.value[card.id] = err.message || 'Failed to save application.'
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
          <!-- Right Section: Icons and Info -->
          <div class="card-right">
            <div class="info-row">
              <img src="/src/assets/Location.png" alt="Location" class="icon" />
              <span>{{ card.location }}</span>
            </div>
            <div class="info-row">
              <img src="/src/assets/clock.png" alt="Time" class="icon" />
              <span>12:30</span>
            </div>
            <div class="info-row">
              <img src="/src/assets/euro.png" alt="Price" class="icon" />
              <span>30€</span>
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
  margin: auto;
  width: 80%;
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
  gap: 10px;
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

/* Responsive design for screens smaller than 500px */
@media screen and (max-width: 500px) {
  .card-content {
    display: grid;
    grid-template-areas:
      'left center'
      'right right'; /* Move .card-right to a new row */
    grid-template-columns: auto 1fr; /* .card-left adjusts automatically, .card-center takes the remaining space */
    grid-gap: 1rem; /* Add spacing between grid areas */
    align-items: start; /* Align items to the top */
    width: 100%;
    align-items: center;
  }

  .card-left {
    grid-area: left; /* Place .card-left in the left section */
  }

  .card-center {
    grid-area: center; /* Place .card-center in the center section */
  }

  .card-right {
    grid-area: right; /* Move .card-right to the bottom row */
    width: 100%; /* Take full width */
    border-left: none; /* Remove left border */
    padding-left: 0; /* Remove padding */
    margin-top: 0; /* Reset top margin */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .info-row {
    justify-content: flex-start;
  }
}
</style>
