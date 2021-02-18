import Vue from "vue";
import Vuex from "vuex";
import { loginApi } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || ''
  },
  mutations: {
    loginApi(state, payload) {
      state.token = payload.token;
      // console.log('store token:',state.token,payload)
      //每次刷新页面token就会被清空
      localStorage.setItem("token",payload.token)
      console.log(state.token)
    }
  },
  actions: {
    async loginApi ({ commit }, payload) {
      const res = await loginApi(payload)
      // console.log('action ogin',res)
      commit('loginApi', {
        token: res.data.token
      });
    }
  },
  modules: {}
});
