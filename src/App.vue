<template>
  <NavBar></NavBar>
  <main class="container-fluid"></main>
  <router-view/>
  <FooterComp></FooterComp>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style>
#app {
  font-family: 'Maven Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.container {
    min-height: 100vh; 
    max-height: auto;
    padding-bottom: 60px; 
    box-sizing: border-box; 
}
nav a:hover{
  text-decoration: underline #EE6F12;
}

</style>
