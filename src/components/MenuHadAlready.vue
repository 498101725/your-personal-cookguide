<template>
  <div>
    <div>
      <input
        v-model="cuisineName"
        placeholder="find your Cuisine here..."
        type="text"
      />

      <button @click="findCuisineName()">
        <i class="fa fa-plane extraClass"></i>
      </button>
    </div>

    <div>
      <input
        v-model="keyWords"
        placeholder="please typing in your Key Words ..."
        type="text"
      />

      <!-- the tag below is just a decoration -->
      <button>
        <i class="fa fa-search extraClass"></i>
      </button>
    </div>

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
        <tr v-for="cuisine in filteredCuisineState" :key="cuisine.id">
          <td ref="CUISINE_NAME">
            <text-highlight :queries="keyWords">{{
              cuisine.name
            }}</text-highlight>
          </td>
          <td>
            <tr>
              <td v-for="(material, index) in cuisine.material" :key="index">
                <text-highlight :queries="keyWords">{{
                  material
                }}</text-highlight>
              </td>
            </tr>
          </td>

          <td>
            <tr>
              <td v-for="(sauce, index) in cuisine.sauce" :key="index">
                <text-highlight :queries="keyWords">{{ sauce }}</text-highlight>
              </td>
            </tr>
          </td>

          <td>
            <button @click="removeCuisine(cuisine)">X</button>
          </td>
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
  </div>-->
</template>

<script>
//import cuisineList from '../existingMenu/cuisine.json';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MenuHadAlready',
  data() {
    return {
      cuisineName: '',
      keyWords: '',
    };
  },

  // data() {
  //   return {
  //     jsonMenu: cuisineList,
  //   };
  // },

  computed: {
    ...mapState(['cuisineState']),

    // conditional rendering
    filteredCuisineState() {
      return this.cuisineState.filter((item) => {
        return item.name.includes(this.keyWords);
      });
    },

    // existingCuisine() {
    //   return this.jsonMenu.cuisineList.map((cuisine) => {
    //     return cuisine;
    //   });
    // },
  },

  methods: {
    ...mapActions(['removeCuisine', 'setCuisine']),

    findCuisineName() {
      const listName = this.cuisineState.map((item) => {
        return item.name;
      });
      const index = listName.indexOf(this.cuisineName);

      const tdElement = this.$refs.CUISINE_NAME[index];
      const tdElementValue = tdElement.innerHTML;

      if (tdElementValue == this.cuisineName) {
        this.cuisineName = '';
        return tdElement.scrollIntoView();
      }
    },
  },

  // created() {
  //   this.setCuisine(this.jsonMenu.cuisineList);
  // },
};
</script>

<style scoped>
table {
  width: 100%;
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
