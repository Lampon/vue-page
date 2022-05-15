import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    imgHtml: ''
  },
  mutations: {
    imgHtml(state, payload) {
      state.imgHtml = payload
    },
  },
  actions: {
  }
})
