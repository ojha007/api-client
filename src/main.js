import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueI18n from "vue-i18n";
import FlagIcon from "vue-flag-icon";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.use(FlagIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
