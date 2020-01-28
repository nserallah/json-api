import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components";
import VueTreeList from 'vue-tree-list';
import BootstrapVueTreeview from 'bootstrap-vue-treeview';
import "@jledentu/vue-finder/dist/vue-finder.css";



Vue.use(BootstrapVueTreeview);
Vue.use(VueTreeList);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
