<template>
  <div id="app">
    <h1>Vue Demo - Basic</h1>
    <nav>
      <router-link to="/index">Index</router-link> |
      <router-link to="/app1">App1 vue lessons</router-link> |
      <router-link to="/app2">App2 vuex lessons</router-link> |
      <router-link to="/app3">App3 iframe</router-link> |
      <router-link to="/app4">App4 charts</router-link> |
      <router-link to="/app5">App5 reactive charts</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#trailer {
  position: fixed;
  left: 50px;
  top: 150px;
}
</style>
