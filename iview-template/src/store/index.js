import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  menuName: '',
  userName: '',
  userProfile: ''
}

const mutations = {
  setMenuName (state, menuName) {
    state.menuName = menuName
  }
}

const getters = {

}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
