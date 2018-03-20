/**
 * Created by Neil
 * 2018-03-20 11:24
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token'),
}

const mutations = {
  Login (state,user,token) {
    state.user=user
    state.token=token
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('user', user);
  },
  Logout(state){
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
  }
}


export default new Vuex.Store({
  state,
  mutations
})
