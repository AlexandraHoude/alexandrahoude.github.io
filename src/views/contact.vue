<template lang="html">
  <section class="contact">
    <h1>{{'contact'}}</h1>
    <form class="form">
      <div  class='item'>
        <label> {{'nom' }} </label>
        <input type="text" name="nom"/>
      </div>
      <div  class='item'>
        <label>{{'prenom'}} </label>
        <input type="text" name="prenom"/>
      </div>
      <div  class='item'>
        <label>{{'courriel'}} </label>
        <input type="text" name="courriel"/>
      </div>
      <div  class='item'>
        <label>{{'categorie'}} </label>
        <select class="sel" name="categorie">
          <option v-for="(option, i) in dropdownOptions" :key="i"> {{ option }}</option>
        </select>
      </div>
    </form>
  </section>

</template>

<script lang="js">

export default {
  name: 'contact',
  props: [],
  mounted () {
  },
  data () {
    return {
      dropdownOptions: [
        "informations",
        "projets",
        "rendez-vous",
        "autre"
      ],
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
