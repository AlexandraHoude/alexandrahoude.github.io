<!-- Footer -->
<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h3>{{copyright}}</h3>
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
    <a href="https://github.com/AlexandraHoude/1017examen2alexandrahoude/blob/main/LICENSE" rel="license">License</a>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        copyright: 'Copyright © ' + new Date().getFullYear() + ' Alexandra Houde - All Rights reserved',
      }
    },
    name: "Footer",
    props: [],
    mounted () {
    },
    methods: {
    },
    computed: {
    }
  }
</script>
