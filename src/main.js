import Vue from "vue";
import App from "./App.vue";
import Store from "./store";

import "./assets/styles/style.scss";
Vue.config.productionTip = false;

new Vue({
  store: Store,
  render: (h) => h(App),
}).$mount("#app");
