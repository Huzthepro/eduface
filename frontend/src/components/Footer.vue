<template>
  <footer class="footer">
    <div class="upper-footer">
      <div class="upper-footer-left">
        <p>Contact</p>
        <p>info@eduface.me</p>
        <p>+31 6 3773 5018</p>
      </div>
      <div class="upper-footer-center">
        <p>Leer het Eduface team kennen</p>
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
        <p>Langegracht 70</p>
        <p>2312 NV Leiden</p>
        <p>Toernooiveld 100</p>
        <p>6525 EC Nijmegen</p>
      </div>
    </div>
    <div class="bottom-footer">
      <div class="bottom-footer-container">
        <div class="left">
          <p>&copy; Copyright 2024 Eduface</p>
        </div>
        <div class="right">
          <p>Algemene voorwaarden</p>
          <p>Privacyverklaring</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
p {
  margin-block-start: 5px;
  margin-block-end: 5px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.footer {
  margin: auto;
  width: 100%;
  font-weight: 800;
}
.upper-footer {
  width: 80%;
  height: auto;
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}
.upper-footer-left,
.upper-footer-center,
.upper-footer-right {
  display: flex;
  flex-direction: column;
}

.upper-footer-center {
  font-weight: 700;
  font-size: 1rem;
  align-items: center;
}

.bottom-footer {
  border-radius: 36px 36px 0 0;
  background-color: #002333;
  width: 100%;
  padding: 15px 0px;
}
.bottom-footer-container {
  width: 80%;
  margin: auto;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: white;
}
.right {
  display: flex;
  gap: 2rem;
}

/* Responsive design for screens smaller than 650px */
@media screen and (max-width: 650px) {
  .upper-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .upper-footer-left,
  .upper-footer-center,
  .upper-footer-right {
    align-items: center;
    margin-bottom: 15px;
  }

  .upper-footer-center p {
    text-align: center;
  }
}
</style>
