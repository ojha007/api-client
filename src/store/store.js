import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import genres from "./modules/navbar";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies,
    genres
  }
});
