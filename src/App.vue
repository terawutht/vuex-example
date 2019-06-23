<template>
  <div id="app">
    <showUser msg="show user"/>
     <setUser msg="set user"/>
  </div>
</template>

<script>
import setUser from './components/setUser.vue'
import showUser from './components/showUser.vue'

export default {
  name: 'app',
  components: {
    setUser,
    showUser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
