<template>
  <div id="app">
    <Header/>
    <router-view />
    <Home/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Home from "./views/Home.vue";

  import "./css/bootstrap.min.css";
  import "./css/font-awesome.min.css";
  import "./css/templatemo-green.css";

  export default {
    name: 'App',
    components: {
      Home,
      Header,
      Footer
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: #eae6e6;
  }
</style>
