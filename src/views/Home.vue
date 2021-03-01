<!-- vue de la page d'accueil -->
<template>
  <section class="container">
    <Profil v-if="isLoggedInComputed"/>
    <div v-if="!isLoggedInComputed">Veuillez vous connecter pour plus d'information</div>
  </section>
</template>

<script>
  import Profil from "./profil";

  export default {
    name: "Home",
    components: {
      Profil
    },
    // Fonction qui renvoi la valeur du login (par défaut, à false)
    data () {
      return {
        isLoggedIn: false
      }
    },
    // Fonction qui renvoi la valeur du login au parent
    computed: {
      isLoggedInComputed() {
        return this.isLoggedIn
      }
    },
    created() {
      // Fausse connexion qui affiche un accueil différent si oui ou non on est connecté
      let islogged = true;

      if (islogged) {
        this.isLoggedIn = true;
      }
    }
  }
</script>

<style scoped>

</style>
