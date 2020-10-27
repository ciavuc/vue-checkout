import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeProduct: null,
  },
  mutations: {
    checkout(state, product) {
      state.activeProduct = product;
    },
  },
});

export default store;
