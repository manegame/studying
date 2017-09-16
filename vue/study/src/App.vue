<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Users from './components/Users'

export default {
  name: 'app',
  components: {
    Users
  }
}
</script>

<style lang="scss">
#app {
  ul {
    list-style: none;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
