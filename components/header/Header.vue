<template>
  <header class="header">
    <div class="navbar">
      <p class="navbar__logo">
        David Jones
      </p>
      <nav class="nav">
        <ul class="nav__list">
          <li class="navbar__list-item">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="navbar__list-item">
            <nuxt-link to="/projects">Projects</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  transition: {
    name: 'fade',
  },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 50px;
  background: var(--primary);
}
</style>
