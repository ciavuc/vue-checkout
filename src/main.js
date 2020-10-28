import Vue from "vue";
import App from "./App.vue";
import Store from "./store";
import VueTheMask from "vue-the-mask";

import "./assets/styles/style.scss";
Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
  store: Store,
  render: (h) => h(App),
}).$mount("#app");
