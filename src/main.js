import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store.js';
import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import '../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css';
// download, copy, export ...
import 'ag-grid-enterprise';

Vue.config.productionTip = false;

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount('#app');
