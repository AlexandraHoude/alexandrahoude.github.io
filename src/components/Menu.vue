<template>
  <div>
    <div class="navigation">
      <router-link to="/Home">
      <h2>Page d'accueil</h2>
      </router-link>
      <router-link class="nav-link" to="/projets">
      <h2>Projets</h2>
      </router-link>
      <router-link class="nav-link" to="/contact">
      <h2>Contact</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>

</style>
