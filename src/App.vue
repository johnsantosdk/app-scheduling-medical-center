<template>
<div class="container" id="app">

    <NavBar />

    <div class="row">
        <h2 class="alinhado-ao-centro">Agendamento de Consultas</h2>
    </div>
    <div class="row titles-info">
        <div class="col-sm-6">
            <h2 class="h2">Coluna 1 Formulario com a pesquisa do paciente para realizar o aagendamento</h2>
        </div>
        <div class="col-sm-6">
            <h2 class="h2">Coluna 2 table com os pcientes agendados</h2>
        </div>
    </div>
</div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>
<script>
import NavBar from '@/views/nav-bar/NavBar.vue';

export default {
    components: {
        NavBar
    }
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3e86ce;
}

body {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background: linear-gradient(to right, rgb(47, 59, 66), rgb(88, 101, 119));
}

h2.alinhado-ao-centro {
    margin: auto;
//  text-align: center;
}
#nav {
//   padding: 30px;

a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
}
}
</style>
