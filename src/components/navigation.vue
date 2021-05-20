<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/declarative-rendering">Declarative rendering</router-link> |
    <router-link to="/handling-user-input"> Handling user input</router-link> |
    <router-link to="/conditionals-and-loops">Conditionals and loops</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
