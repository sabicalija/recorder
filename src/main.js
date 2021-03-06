import Vue from "vue";
import App from "@/App.vue";
import "@/utils/app/registerServiceWorker";
import router from "@/plugins/router";
import store from "@/plugins/store";
import "@/plugins/icons";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
