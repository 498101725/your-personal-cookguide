<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Cuisine Name</th>
          <th>Material</th>
          <th>Sauce</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cuisine in cuisineState" :key="cuisine.id">
          <td>{{ cuisine.name }}</td>
          <td>
            <tr>
              <td v-for="(material, index) in cuisine.material" :key="index">
                {{ material }}
              </td>
            </tr>
          </td>

          <td>
            <tr>
              <td v-for="(sauce, index) in cuisine.sauce" :key="index">
                {{ sauce }}
              </td>
            </tr>
          </td>

          <td><button @click="removeCuisine(cuisine)">X</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <div>
    <div>
      <el-table v-bind:data="existingCuisine" style="width: 70%">
        <el-table-column prop="id" label="ID"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="material" label="Material"> </el-table-column>
        <el-table-column prop="sauce" label="Sauce"> </el-table-column>
      </el-table>
    </div>
  </div> -->
</template>

<script>
//import cuisineList from '../existingMenu/cuisine.json';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MenuHadAlready',

  // data() {
  //   return {
  //     jsonMenu: cuisineList,
  //   };
  // },

  computed: {
    ...mapState(['cuisineState']),

    // existingCuisine() {
    //   return this.jsonMenu.cuisineList.map((cuisine) => {
    //     return cuisine;
    //   });
    // },
  },

  methods: {
    ...mapActions(['removeCuisine', 'setCuisine']),
  },

  // created() {
  //   this.setCuisine(this.jsonMenu.cuisineList);
  // },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
tr:hover {
  background-color: #f5f5f5;
}
th {
  height: 50px;
  padding: 20px;
  border: 1px solid #ddd;
  font-size: 20px;
  background-color: #f5f5f5;
}
td {
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
