<!-- header -->
<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <img src="../media/photo1.png" class="img-responsive img-circle tm-border" alt="temp">
          <hr>
          <h1 class="tm-title bold shadow">{{title}}</h1>
          <h1 class="white bold shadow">{{job}}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
        title: "Hi, I am Alexandra",
        job: "Front-end developper",
      }
    },
  }
</script>
