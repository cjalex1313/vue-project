<template>
  <Navigation/>
  <router-view/>
</template>

<script>
import Navigation from './components/navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
