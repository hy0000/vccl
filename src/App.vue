<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue"
import foo from "./components/foo.vue"

export default {
  name: 'App',
  components: {Nav, foo},
};
</script>

<style>
body{
  margin: 0;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Arial","Microsoft YaHei","黑体",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  width: 100%;
}
</style>