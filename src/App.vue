<template>
  <div class="app">
    <cuisineGrid />
    <Header />
    <AddCuisine />
    <MenuHadAlready />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AddCuisine from "./components/AddCuisine.vue";
import MenuHadAlready from "./components/MenuHadAlready.vue";
import cuisineGrid from "./components/cuisineGrid.vue";

export default {
  name: "App",

  components: {
    Header,
    AddCuisine,
    MenuHadAlready,
    cuisineGrid
  }
};
</script>

<style>
.app {
  font-family: fantasy;

  /* position: relative; */
}
/* .keyword {
  position: absolute;
  left: 45%;
  top: 0px;
  position: fixed;
  width: 100%;
} */
input[type="text"] {
  width: 20%;
  padding: 17px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
}
button {
  background-color: #1abc9c;
  border: none;
  color: white;
  padding: 12px;
  text-decoration: none;
  margin: 5px 4px;
  cursor: pointer;
  font-size: 17px;
  font-family: fantasy;
}
</style>
