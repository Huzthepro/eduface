<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useSaveApplication } from '@/composables/useSaveApplication'

export default defineComponent({
  name: 'JobCard',
  props: {
    card: {
      type: Object as PropType<{ id: number; title: string; company: string; location: string }>,
      required: true,
    },
  },
  setup(props) {
    const { loading, saveMessages, saveApplication } = useSaveApplication()

    const handleSave = () => {
      saveApplication(props.card)
    }

    return {
      loading,
      saveMessages,
      handleSave,
    }
  },
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="card-left">
        <img src="/src/assets/icon.png" alt="Logo" class="logo" />
      </div>
      <div class="card-center">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-company">{{ card.company }}</p>
        <div class="button-message-container">
          <button class="save-button" @click="handleSave" :disabled="loading">
            {{ loading ? 'Saving...' : 'Save' }}
          </button>
          <p
            v-if="saveMessages[card.id]"
            :class="saveMessages[card.id].includes('saved') ? 'save-success' : 'save-error'"
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
</template>

<style scoped>
.card {
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  padding: 1rem;
  border-radius: 18px;
  box-shadow:
    rgba(50, 50, 93, 0.144) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.171) 0px 30px 60px -30px;
  background-color: #fff;
}

.card-content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.card-left {
  margin-right: 30px;
  margin-left: 20px;
  height: 60px;
  width: 60px;
}
.card-left img {
  width: 100%;
  height: 100%;
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
      'right right';
    grid-template-columns: auto 1fr;
    grid-gap: 1rem;
    align-items: start;
    width: 100%;
    align-items: center;
  }

  .card-left {
    grid-area: left;
    margin-right: 10px;
    margin-left: 8px;
    height: 50px;
    width: 50px;
  }

  .card-center {
    grid-area: center;
  }

  .card-right {
    grid-area: right;
    width: 100%;
    border-left: none;
    padding-left: 0;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .info-row {
    justify-content: flex-start;
  }
}
</style>
