import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueI18n from "vue-i18n";
import FlagIcon from "vue-flag-icon";
import "flag-icon-css/css/flag-icon.css";
Vue.use(FlagIcon);
Vue.use(VueI18n);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
