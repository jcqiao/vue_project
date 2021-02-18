import Vue from "vue";
import Vuex from "vuex";
import { loginApi } from "../api/index";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || '',
    uid: localStorage.getItem("uid") || ''
  },
  mutations: {
    loginApi(state, payload) {
      state.token = payload.token;
      state.uid = payload.uid;
      // console.log('store token:',state.token,payload)
      //每次刷新页面token就会被清空
      localStorage.setItem("token",payload.token)
      // localStorage.setItem("uid", payload.uid)
      console.log(state.token)
    }
  },
  actions: {
    async loginApi ({ commit }, payload) {
      const res = await loginApi(payload)
      console.log('action ogin',res)
      commit('loginApi', {
        token: res.data.token,
        uid: res.data.uid
      });
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
