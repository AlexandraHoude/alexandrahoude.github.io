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
    data () {
      return {
        isLoggedIn: false
      }
    },
    computed: {
      isLoggedInComputed() {
        return this.isLoggedIn
      }
    },
    created() {
      //FAKE LOGIN
      let islogged = true;

      if (islogged) {
        this.isLoggedIn = true;
      }
    }
  }
</script>

<style scoped>

</style>
