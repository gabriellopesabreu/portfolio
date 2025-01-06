<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Sobre Mim</div>

    <p class="text-body1 q-mb-md">
      Este é um site de portfólio criado com
      <strong>Quasar</strong> e <strong>Vue 3</strong>. Aqui você encontrará
      alguns dos meus projetos mais recentes.
    </p>

    <div class="q-mb-md">
      Você pode me encontrar em:
    </div>

    <!-- Botões de redes sociais -->
    <div class="row items-center q-gutter-md">
      <q-btn
        icon="mdi-linkedin"
        label="LinkedIn"
        color="primary"
        flat
        rounded
        dense
        :href="'https://www.linkedin.com/in/gabriel-abreu-exe/'"
        target="_blank"
      />
      <q-btn
        icon="mdi-github"
        label="GitHub"
        color="dark"
        flat
        rounded
        dense
        :href="'https://github.com/gabriellopesabreu'"
        target="_blank"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
/* Estilos personalizados */
.row {
  display: flex;
  justify-content: start;
  align-items: center;
}

.q-gutter-md {
  gap: 16px;
}
</style>
