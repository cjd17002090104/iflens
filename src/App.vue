<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  /* margin-top: 60px; */
}
@media (min-width: 1200px) {
  .container-xl {
    max-width: 1170px;
  }
}
.container-xl {
  min-width: 1170px;
}
</style>
