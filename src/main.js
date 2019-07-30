import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueI18n from "vue-i18n";
import FlagIcon from "vue-flag-icon";
import axios from "axios";
import BlockUI from "vue-blockui";
// import "@mdi/font/css/materialdesignicons.css";

Vue.use(BlockUI);

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(FlagIcon);
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
