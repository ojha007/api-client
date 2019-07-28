import axios from "axios";
const state = {
  genres: []
};
const mutations = {
  FETCH_GENRES(state, payload) {
    state.genres = payload;
  }
};
const actions = {
  fetch_genres: function({ commit }) {
    axios
      .get("/genres")
      .then(({ data }) => {

        commit("FETCH_GENRES", data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const getters = {};
export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
