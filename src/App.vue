<template>
  <div>
    <div class="app">
      <Header />
      <AddCuisine />
      <MenuHadAlready />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AddCuisine from './components/AddCuisine.vue';
import MenuHadAlready from './components/MenuHadAlready.vue';

export default {
  name: 'App',

  components: {
    Header,
    AddCuisine,
    MenuHadAlready,
  },
};
</script>

<style>
.app {
  font-family: fantasy;
}
</style>
