import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Movie from "../views/Movie";
import Single from "../layouts/Single";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/genres/:slug",
      name: "genres",
      component: Movie
    },
    {
      path: "/movie/:slug",
      name: "movie",
      component: Single
    }
  ]
});
