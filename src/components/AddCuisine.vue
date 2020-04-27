<template>
  <div>
    <input v-model="cuisineName" type="text" placeholder="add Name here..." />
    <input
      v-model="cuisineMaterial"
      type="text"
      placeholder="add Material here..."
    />
    <input v-model="cuisineSauce" type="text" placeholder="add Sauce here..." />
    <button class="btn" @click="addCuisines()">submit</button>
    <div v-for="material in materialList" :key="material"></div>
    <div v-for="(sauce, index) in sauceList" :key="index"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 } from 'uuid';

export default {
  name: 'AddCuisine',
  data() {
    return {
      cuisineName: '',
      cuisineMaterial: '',
      cuisineSauce: '',
    };
  },
  // 通过computed进入data,取得数据进行筛选，传入v-for,遍历数组，因为是数组；
  computed: {
    materialList() {
      return this.cuisineMaterial.split(',').map((name) => name.trim());
    },
    sauceList() {
      return this.cuisineSauce.split(',').map((name) => name.trim());
    },
  },

  methods: {
    ...mapActions(['addCuisine']),

    addCuisines() {
      const newCuisine = {
        id: v4(),
        name: this.cuisineName,
        material: this.materialList,
        sauce: this.sauceList,
      };

      this.addCuisine(newCuisine);

      this.cuisineName = '';
      this.cuisineMaterial = '';
      this.cuisineSauce = '';
    },
  },
};
</script>

<style scoped>
input[type='text'] {
  width: 20%;
  padding: 17px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
}
.btn {
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
