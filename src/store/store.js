import Vue from 'vue';
import Vuex from 'vuex';
//使用了vuex-persistedstate 可以保存到本地；
import createPersistedState from 'vuex-persistedstate';
// json文件每次刷新都会被重新调用所以无法报存；
// 要删除有关json的动作并且把json文件内容通过created方法上传到store里的setCuisine就变成了store里的state了。
import TextHighlight from 'vue-text-highlight';

Vue.component('text-highlight', TextHighlight);
Vue.use(Vuex);

const state = {
  cuisineState: [],
};

const getters = {};

const actions = {
  setCuisine({ commit }, cuisineList) {
    commit('SET_STATE', cuisineList);
  },
  removeCuisine({ commit }, cuisines) {
    commit('REMOVE_CUISINE', cuisines);
  },

  addCuisine({ commit }, object) {
    commit('ADD_CUISINE', object);
  },
};

const mutations = {
  SET_STATE(state, cuisineList) {
    state.cuisineState = cuisineList;
  },

  REMOVE_CUISINE(state, cuisines) {
    //debugger; // eslint-disable-line
    // 3 ways to remove one cuisine;

    // state.cuisineState = state.cuisineState.filter((cuisine) => {
    //   return cuisine.id !== id;
    // });

    //const index = state.cuisineState.indexOf(cuisine);

    const index = state.cuisineState.findIndex((cuisine) => {
      return cuisine.id == cuisines.id;
    });
    state.cuisineState.splice(index, 1);
  },

  ADD_CUISINE(state, object) {
    // debugger; // eslint-disable-line
    state.cuisineState.unshift(object);
  },
};

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
});
