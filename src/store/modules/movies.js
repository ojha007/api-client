import axios from "axios";

const state = {
  movies: []
};

const mutations = {
  FETCH_MOVIES: function(state, payload) {
    state.movies = payload;
  }
};
const getters = {};

const actions = {
  fetch_movies: function({ commit }) {
    axios
      .get("/movies")
      .then(res => {
        console.log(res.data);
        commit("FETCH_MOVIES", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
