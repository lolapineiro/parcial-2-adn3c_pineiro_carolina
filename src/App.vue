<template>
  <div id="app">
    
    <Inicio />
    <router-link to="/consejos">Consejos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import Inicio from './components/Inicio.vue'


export default {
  name: 'App',
  components: {
    
    Inicio
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
}
.logo{
    max-width: 15vw;
}


nav {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h1{
    font-family: 'Dancing Script', cursive;
    padding-bottom: 1em;
    color: coral;

}

.foot {
    background-color: rgb(210, 210, 210);
    color: rgb(120, 117, 112);
    padding: 1.5em;
    margin: 0;
}

footer {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.emphasized { 
    font-style: italic; 
}
</style>
