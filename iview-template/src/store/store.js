import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  menuName: ''
}

const mutations = {
  setMenuName (state, menuName) {
    state.menuName = menuName
  }
}

export default new Vuex.Store({
  state,
  mutations
})
