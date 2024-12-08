<script lang="ts">
export default {
  name: 'AppFooter',
}
</script>
<template>
  <footer class="footer">
    <div class="upper-footer">
      <div class="upper-footer-left">
        <p>Contact</p>
        <p>info@eduface.me</p>
        <p>+31 6 3773 5018</p>
      </div>
      <div class="upper-footer-center">
        <p>Leer het <span>Eduface</span> team kennen</p>
        <p>
          Volg ons op LinkedIn
          <img
            src="/src/assets/linkedin.svg"
            alt="LinkedIn"
            style="width: 1.2rem; height: 1.2rem"
          />
        </p>
      </div>
      <div class="upper-footer-right">
        <div>
          <p>Langegracht 70</p>
          <p>2312 NV Leiden</p>
        </div>
        <div>
          <p>Toernooiveld 100</p>
          <p>6525 EC Nijmegen</p>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <div class="bottom-footer-container">
        <div class="bottom-footer-left">
          <p>&copy; Copyright 2024 Eduface</p>
        </div>
        <div class="bottom-footer-right">
          <p>Algemene voorwaarden</p>
          <p>Privacyverklaring</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin: auto;
  width: 100%;
}
.upper-footer {
  width: 100%;
  max-width: 1280px;
  padding: 0px 64px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 700;
}
.upper-footer-left,
.upper-footer-center,
.upper-footer-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.upper-footer-center {
  font-weight: 700;
  justify-content: space-between;
  align-items: center;
}
.upper-footer-center span {
  color: var(--color-eduface-green);
}
.upper-footer-center p img {
  position: relative;
  top: 3px;
}

.upper-footer-center :nth-child(1) {
  font-size: 2rem;
}

.upper-footer-center :nth-child(2) {
  font-size: 1.3rem;
}

.upper-footer-right {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: right;
}

.bottom-footer {
  border-radius: 36px 36px 0 0;
  background-color: #002333;
  width: 100%;
  padding: 20px 64px;
  margin-top: 20px;
}
.bottom-footer-container {
  width: 100%;
  max-width: 1280px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--vt-c-text-dark-1);
}
.bottom-footer-right {
  display: flex;
  gap: 2rem;
  text-align: right;
}

/* Responsive design for screens smaller than 800px */
@media screen and (max-width: 800px) {
  .upper-footer-center :nth-child(1) {
    font-size: 1.5rem;
  }

  .upper-footer-center :nth-child(2) {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 700px) {
  .upper-footer {
    display: grid;
    grid-template-rows: auto auto; /* Two rows */
    grid-template-columns: 1fr 1fr; /* Two columns for left and right */
    gap: 15px; /* Gap between grid items */
    text-align: center;
    justify-items: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
  }

  .upper-footer-center {
    grid-column: span 2; /* Center spans across both columns */
    order: -1; /* Ensure this is always on top */
    width: 100%; /* Full width */
    justify-self: bottom;
  }

  .upper-footer-left {
    grid-column: 1; /* Place in the first column */
    text-align: left; /* Align text to the left */
    justify-self: left;
  }

  .upper-footer-right {
    grid-column: 2; /* Place in the second column */
    text-align: right; /* Align text to the right */
    justify-self: right;
  }
}
@media screen and (max-width: 600px) {
  .bottom-footer-right {
    flex-direction: column;
    gap: 0;
  }
}
</style>
