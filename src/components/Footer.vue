<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h3 v-directive> Alexandra Houde</h3>
          <ul class="social-icons">
            <li><a href="#" class="fa fa-facebook"></a></li>
            <li><a href="#" class="fa fa-google-plus"></a></li>
            <li><a href="#" class="fa fa-twitter"></a></li>
            <li><a href="#" class="fa fa-dribbble"></a></li>
            <li><a href="#" class="fa fa-github"></a></li>
            <li><a href="#" class="fa fa-behance"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  props: [],
  directives: {
    directive: {
      bind: function(el) {
        el.innerHTML = 'Copyright © ' + new Date().getFullYear() + el.innerHTML + 'All Rights reserved' ;
      },
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
  }
}

</script>

<style scoped>

</style>
