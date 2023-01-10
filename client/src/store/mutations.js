export default {
  CREATE(state, payload) {
    state.account = payload;
  },
  DETAILS(state, payload) {
    state.details = payload;
  }
};
