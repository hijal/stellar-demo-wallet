import axios from 'axios';
const BASE_URL = process.env.VUE_APP_BASE_URL;

export default {
  createAc({ commit }) {
    return axios
      .post(`${BASE_URL}/create`)
      .then((res) => {
        commit('CREATE', res.data);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  fundAccountAc(_, payload) {
    return axios
      .post(`${BASE_URL}/fund-account`, payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
