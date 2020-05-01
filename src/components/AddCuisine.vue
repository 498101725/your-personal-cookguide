<template>
  <div class="inputFields">
    <input v-model="cuisineName" type="text" placeholder="add Name here..." />

    <input
      v-model="cuisineMaterial"
      type="text"
      placeholder="add Material here..."
    />

    <input v-model="cuisineSauce" type="text" placeholder="add Sauce here..." />

    <button class="btn" @click="addCuisines()">submit</button>

    <!-- below code is not necessary -->
    <!-- <div v-for="material in materialList" :key="material">{{ material }}</div>
    <div v-for="(sauce, index) in sauceList" :key="index">{{ sauce }}</div> -->
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
.inputFields {
  width: 60%;
}
</style>
