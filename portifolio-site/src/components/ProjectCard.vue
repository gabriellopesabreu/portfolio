<template>
  <q-card bordered class="q-my-md project-card">
    <!-- Imagem do projeto -->
    <q-img :src="image" :alt="title" class="project-image" />

    <!-- Título do projeto -->
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle1 text-grey">{{ description }}</div>
    </q-card-section>

    <!-- Tecnologias -->
    <q-card-section>
      <div class="text-caption">Tecnologias:</div>
      <q-chip
        v-for="tech in technologies"
        :key="tech"
        dense
        class="q-mr-sm"
        label
      >
        {{ tech }}
      </q-chip>
    </q-card-section>

    <!-- Ações (Links) -->
    <q-card-actions align="right">
      <q-btn
        flat
        icon="mdi-github"
        :href="githubLink"
        target="_blank"
        aria-label="GitHub"
        color="primary"
      />
      <q-btn
        flat
        icon="mdi-open-in-new"
        :href="liveLink"
        target="_blank"
        aria-label="Acessar"
        color="secondary"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
    githubLink: {
      type: String,
      required: false,
      default: null,
    },
    liveLink: {
      type: String,
      required: false,
      default: null,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  max-width: 400px;
  margin: auto;
}
.project-image {
  height: 200px;
  object-fit: cover;
}
</style>
