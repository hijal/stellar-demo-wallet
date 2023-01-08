import { createStore } from 'vuex';

import rootMutationsModule from './mutations';
import rootActionsModule from './actions';
import rootGettersModule from './getters';

const store = createStore({
  state() {
    return {};
  },
  mutations: rootMutationsModule,
  actions: rootActionsModule,
  getters: rootGettersModule
});

export default store;
