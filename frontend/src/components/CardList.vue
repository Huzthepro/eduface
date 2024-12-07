<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'CardList',
  setup() {
    const cards = ref([])
    const loading = ref(true)
    const error = ref<string | null>(null)

    onMounted(async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/applications/fetch-applications',
        )
        cards.value = response.data
      } catch (err) {
        console.error('Error fetching applications:', err)
        error.value = 'Failed to fetch applications. Please try again.'
      } finally {
        loading.value = false // Ensure loading is set to false
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
    <div v-if="loading" class="loading">Loading...</div>
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
          <!-- Left Section: Logo -->
          <div class="card-left">
            <img src="/src/assets/icon.png" alt="Logo" class="logo" />
          </div>

          <!-- Center Section: Title and Company -->
          <div class="card-center">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-company">{{ card.company }}</p>
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
/* Card List Container */
.card-list {
  width: 75%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 1rem;
}

/* Individual Card */
.card {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  padding: 0.5rem;
  border-radius: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Card Content */
.card-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

/* Left Section: Logo */
.card-left {
  margin-right: 1rem;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

/* Center Section: Title and Company */
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

/* Right Section: Icons and Info */
.card-right {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 1px solid #ddd;
  padding-left: 1rem;
  gap: 0.5rem; /* Spacing between rows */
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
