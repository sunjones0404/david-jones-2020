<template>
  <div>
    <p>We are in {{ project.name }}</p>
    <ul>
      <li v-for="technology in project.technologies" :key="technology.id">
        {{ technology }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style></style>
