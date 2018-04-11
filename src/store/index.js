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
  Login (state,payload) {
    state.user=payload["user"]
    state.token=payload["token"]
    console.log("!!!",state.token);
    window.sessionStorage.setItem('token',state.token);
    window.sessionStorage.setItem('user', state.user);
  },
  Logout(state){
    state.user="";
    state.token="";
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
  }
}


export default new Vuex.Store({
  state,
  mutations
})
