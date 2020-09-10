import Vue from 'vue';
import Vuex from 'vuex';

import axiosAuth from '../axios-auth';
import config from '../../config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
  },
  actions: {
    login({ commit }, authData) {
      axiosAuth.post(`/accounts:signInWithPassword?key=${config.API_KEY}`,
        { email: authData.email, password: authData.password, returnSecureToken: true })
        .then((response: any) => {
          commit('updateIdToken', response.data.idToken);
        });
    },
    register({ commit }, authData) {
      axiosAuth.post(`/accounts:signUp?key=${config.API_KEY}`,
        { email: authData.email, password: authData.password, returnSecureToken: true })
        .then((response: any) => {
          commit('updateIdToken', response.data.idToken);
        });
    },
  },
  modules: {
  },
});
