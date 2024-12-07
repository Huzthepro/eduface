<template>
  <footer class="footer">
    <div class="upper-footer">
      <div class="upper-footer-left">
        <p>Contact</p>
        <p>info@eduface.me</p>
        <p>+31 6 3773 5018</p>
      </div>
      <div class="upper-footer-center">
        <h2>Leer het Eduface team kennen</h2>
        <h2>
          Volg ons op LinkedIn
          <img
            src="/src/assets/linkedin.svg"
            alt="LinkedIn"
            style="width: 1.2rem; height: 1.2rem"
          />
        </h2>
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
          <P>Algemene voorwaarden</P>
          <P>Privacyverklaring</P>
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
.footer {
  margin: auto;
  width: 100%;
  font-weight: 800;
}
.upper-footer {
  width: 80%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  font-size: 0.8rem;
}
.upper-footer-left {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
.upper-footer-center {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
}
.upper-footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
}
.bottom-footer {
  border-radius: 36px 36px 0 0;
  background-color: #002333;
  width: 100%;
  padding: 35px 0px;
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
</style>
