import axios from "axios";

const state = {
  movies: [],
  movies_by_genres: []
};

const mutations = {
  FETCH_MOVIES: function(state, payload) {
    state.movies = payload;
  },
  FETCH_MOVIES_BY_GENRES: function(state, payload) {
    state.movies_by_genres = payload;
  }
};
const getters = {};

const actions = {
  fetch_movies: function({ commit }) {
    axios
      .get("/movies")
      .then(res => {
        commit("FETCH_MOVIES", res.data.am);
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_movies_by_genres: function({ commit }) {
    axios
      .get("/genre/comedy")
      .then(res => {
        commit("FETCH_MOVIES_BY_GENRES", res.data);
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
