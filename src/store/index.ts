import Vue from 'vue';
import Vuex from 'vuex';

import axiosAuth from '../axios-auth';
import axiosRefresh from '../axios-refresh';
import config from '../../config';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
  },
  getters: {
    idToken: (state) => state.idToken,
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
  },
  actions: {
    autoLogin({commit, dispatch}) {
      // ローカルストレージから有効期限時刻を取得
      // 現在時刻と比較して有効期限切れか確認

      // 有効期限切れ
      // IdTokenをリフレッシュ
      
      // 有効期限内
      // stateにローカルストレージから取得したidTokenを登録
    },
    login({ commit }, authData) {
      axiosAuth.post(`/accounts:signInWithPassword?key=${config.API_KEY}`,
        { 
          email: authData.email, 
          password: authData.password, 
          returnSecureToken: true 
        })
        .then((response: any) => {
          commit('updateIdToken', response.data.idToken);
          router.push('/');
        });
    },
    register({ commit }, authData) {
      axiosAuth.post(`/accounts:signUp?key=${config.API_KEY}`,
        { email: authData.email, password: authData.password, returnSecureToken: true })
        .then((response: any) => {
          commit('updateIdToken', response.data.idToken);
          router.push('/');
        });
    },
  },
  modules: {
  },
});
