<template>
<div class="container" id="app">
    
    <NavBar />
    <hr>
    <div class="col">
        <router-view />
    </div>

</div>
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
