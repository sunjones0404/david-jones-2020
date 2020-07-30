<template>
  <div>
    <nuxt-child :project="project" />
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
  computed: {
    project() {
      return this.projects.find((p) => p.id == this.$route.params.id)
    },
  },
}
</script>

<style></style>
