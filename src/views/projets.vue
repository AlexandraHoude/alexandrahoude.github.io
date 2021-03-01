<!-- vue des projets -->
<template>
  <section class="projet">
    <h1>{{"Projects" | translateTo(language)}}</h1>

    <ul class='projets'>
      <li v-for="(projet, i) in projets" :key="i"> <a :href="projet.link" target="_blank"> {{ projet.name }}</a></li>
    </ul>
  </section>

</template>
<script lang="js">
import   {mixinTrad}  from "@/mixins/mixin"

export default {
  mixins: [mixinTrad],
  name: 'projets',
  data() {
    return {
      projets: [
        {name:"Portfolio",link:"https://alexandrahoude.github.io/AEC_Front_End//portfolio/index.html"},
        {name:"ComicStation",link:"https://alexandrahoude.github.io/AEC_Front_End/Examens/comicsstation/build/#/"},
        {name:"MediaQuerries",link:"https://alexandrahoude.github.io/AEC_Front_End/Integration1/sitesWeb/mediaquerries/index.html"},
      ]
    }
  },
  props: [],
  mounted () {
  },
  methods: {
  },
  computed: {
  }
}
</script>
