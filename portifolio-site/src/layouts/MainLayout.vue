<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <!-- Título do site -->
        <q-toolbar-title>Meu Portfólio</q-toolbar-title>

        <q-btn flat label="Home" @click="$router.push('/')" />
        <q-btn flat label="Sobre" @click="$router.push('/sobre')" />

        <!-- Botões para redes sociais -->
        <q-btn
          flat
          round
          dense
          icon="mdi-linkedin"
          :href="'https://linkedin.com/in/seu-usuario'"
          target="_blank"
          color="primary"
          class="q-ml-sm social-btn"
          aria-label="LinkedIn"
        />
        <q-btn
          flat
          round
          dense
          icon="mdi-github"
          :href="'https://github.com/seu-usuario'"
          target="_blank"
          color="dark"
          class="q-ml-sm social-btn"
          aria-label="GitHub"
        />
      </q-toolbar>
    </q-header>

    <!-- Conteúdo da página -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <div class="text-center q-py-md">© 2025 Meu Portfólio</div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style scoped>
.q-ml-sm {
  margin-left: 8px;
}

.social-btn {
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-btn:hover {
  border-color: #888;
}
</style>
