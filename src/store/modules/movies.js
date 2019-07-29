import axios from "axios";

const state = {
  movies: [],
  movies_by_genres: [],
  recently_added_movies: [],
  featured_movies: [],
  requested_movies: [],
  latest_movies: [],
  upcoming_movies: [],
  top_rated_movies: [],
  tv_movies: [],
  movie_detail: []
};

const mutations = {
  FETCH_MOVIES_BY_GENRES: function(state, payload) {
    state.movies_by_genres = payload;
  },
  FETCH_RECENTLY_ADDED_MOVIES: function(state, payload) {
    state.recently_added_movies = payload;
  },
  FETCH_FEATURED_MOVIES: function(state, payload) {
    state.featured_movies = payload;
  },
  FETCH_UPCOMING_MOVIES: function(state, payload) {
    state.upcoming_movies = payload;
  },
  FETCH_LATEST_MOVIES: function(state, payload) {
    state.latest_movies = payload;
  },
  FETCH_TOP_RATED_MOVIES: function(state, payload) {
    state.top_rated_movies = payload;
  },
  FETCH_TV_MOVIES: function(state, payload) {
    state.tv_movies = payload;
  },
  FETCH_MOVIE_DETAIL: function(state, payload) {
    state.movie_detail = payload;
  }
};
const getters = {};

const actions = {
  fetch_movies: function({ commit }) {
    axios
      .get("/movies")
      .then(res => {
        commit(
          "FETCH_RECENTLY_ADDED_MOVIES",
          res.data.recently_added_movies.data
        );
        commit("FETCH_FEATURED_MOVIES", res.data.featured_movies.data);
        // commit("FETCH_REQUESTED_MOVIES", res.data.requested_movies.data);
        commit("FETCH_UPCOMING_MOVIES", res.data.up_coming_movies.data);
        commit("FETCH_LATEST_MOVIES", res.data.latest_movies.data);
        commit("FETCH_TOP_RATED_MOVIES", res.data.top_rated_movies.data);
        commit("FETCH_TV_MOVIES", res.data.tv_series.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_movie_detail: function({ commit }, slug) {
    axios
      .get("movie/" + slug)
      .then(res => {
        console.log(res.data[0]);
        commit("FETCH_MOVIE_DETAIL", res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_movies_by_genres: function({ commit }, slug) {
    axios
      .get("/genre/" + slug)
      .then(res => {
        console.log(slug);
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
