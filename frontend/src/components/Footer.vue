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
          <img src="/public/favicon.ico" alt="LinkedIn" style="width: 1rem; height: 1rem" />
        </p>
      </div>
      <div class="upper-footer-right">
        <p>Langegracht 70<br />2312 NV Leiden</p>
        <p>Toernooiveld 100<br />6525 EC Nijmegen</p>
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
}
.upper-footer {
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  font-size: 1.1rem;
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
}
.upper-footer-right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
.bottom-footer {
  border-radius: 36px 36px 0 0;
  background-color: #002333;
  width: 100%;
}
.bottom-footer-container {
  margin: auto;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  font-size: 1.1rem;
  color: white;
}
.right {
  display: flex;
  gap: 2rem;
}
</style>
