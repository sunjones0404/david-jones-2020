<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <nuxt-link :to="`/projects/${project.id}`">{{ project.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import projects from '@/projects.js'

export default {
  data() {
    return {
      projects: projects,
    }
  },
}
</script>

<style></style>
