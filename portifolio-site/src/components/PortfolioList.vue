<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Meus Projetos</div>
    <div class="row q-col-gutter-md q-row-gutter-md">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :technologies="project.technologies"
        :github-link="project.githubLink"
        :live-link="project.liveLink"
        :image="project.image"
      />
    </div>
  </q-page>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "PortfolioList",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: "Gestão de Tarefas",
          description: "Um aplicativo para organizar tarefas e aumentar a produtividade.",
          technologies: ["Vue 3", "Quasar", "Firebase"],
          githubLink: "https://github.com/seu-usuario/gestao-de-tarefas",
          liveLink: "https://gestao-de-tarefas.netlify.app",
          image: "https://via.placeholder.com/400x200?text=Projeto+1",
        },
        {
          title: "E-commerce",
          description: "Uma plataforma de e-commerce com suporte a pagamento online.",
          technologies: ["Laravel", "Vue 3", "MySQL"],
          githubLink: "https://github.com/seu-usuario/e-commerce",
          liveLink: "https://meu-ecommerce.com",
          image: "https://via.placeholder.com/400x200?text=Projeto+2",
        },
        {
          title: "Chat em Tempo Real",
          description: "Um sistema de chat com suporte a mensagens instantâneas.",
          technologies: ["Node.js", "Socket.IO", "MongoDB"],
          githubLink: "https://github.com/seu-usuario/chat-tempo-real",
          liveLink: null, // Caso não tenha versão online
          image: "https://via.placeholder.com/400x200?text=Projeto+3",
        },
      ],
    };
  },
};
</script>
