<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'loadingCard',
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="card-left">
        <img src="/src/assets/icon.png" alt="Logo" />
      </div>
      <div class="card-center">
        <h3 class="card-title">Jobs are loading</h3>
        <p class="card-company">--------</p>
        <div class="button-message-container">
          <button class="save-button">Save</button>
        </div>
      </div>
      <div class="card-right">
        <div class="info-row">
          <img src="/src/assets/location.png" alt="Location" class="icon" />
          <span>--------</span>
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
  }

  .info-row {
    justify-content: flex-start;
  }
}
</style>
