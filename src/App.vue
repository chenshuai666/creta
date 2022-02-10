<template>
  <div id="app">
    <headere></headere>
    <router-link to="/home"></router-link>
    <router-link to="/faq"></router-link>
    <router-view></router-view>
    <footere></footere>
  </div>
</template>

<script>
import headere from './components/header.vue'
import footere from './components/footer.vue'

export default {
  name: 'App',
  components: {
    headere,
    footere
  }
}
</script>

<style>
*, body {
    -webkit-tap-highlight-color: transparent;
}

body {
    font-size: .83333vw;
    font-family: PingFang SC,Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    color: #2c3e50;
}

* {
    margin: 0;
    padding: 0;
    -webkit-font-feature-settings: none;
    font-feature-settings: none;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
}

::-webkit-scrollbar {
    display: none;
}
</style>
