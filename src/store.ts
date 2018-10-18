import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged_in: false
  },
  mutations: {
    logged_in(state, value) {
      state.logged_in = value;
    }
  },
  actions: {

  }
})
