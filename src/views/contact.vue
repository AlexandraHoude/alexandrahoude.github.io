<template lang="html">
  <section class="contact">
    <h1>{{'contact' | translateTo(language)}}</h1>
    <form class="form">
      <div  class='item'>
        <label> {{'nom' | translateTo(language)}} </label>
        <input type="text" name="nom"/>
      </div>
      <div  class='item'>
        <label>{{'prenom' | translateTo(language)}} </label>
        <input type="text" name="prenom"/>
      </div>
      <div  class='item'>
        <label>{{'courriel' | translateTo(language)}}</label>
        <input type="text" name="courriel"/>
      </div>
      <div  class='item'>
        <label>{{'categories' | translateTo(language)}}</label>
        <select class="sel" name="categorie">
          <option v-for="(option, i) in dropdownOptions" :key="i"> {{ option | translateTo(language) }}</option>
        </select>
      </div>
    </form>
  </section>

</template>

<script lang="js">
import   {mixinTrad}  from "@/mixins/mixin";

export default {
  mixins: [mixinTrad],
  name: 'contact',
  props: [],
  mounted () {
  },
  data () {
    return {
      dropdownOptions: [
        "informations",
        "projets",
        "rendezvous",
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
