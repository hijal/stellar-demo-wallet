import { createStore } from 'vuex';

import rootMutationsModule from './mutations';
import rootActionsModule from './actions';
import rootGettersModule from './getters';

const localAccount = JSON.parse(localStorage.getItem('account'));

const store = createStore({
  state() {
    return {
      account: localAccount || null
    };
  },
  mutations: rootMutationsModule,
  actions: rootActionsModule,
  getters: rootGettersModule
});

export default store;
