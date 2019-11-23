import Vue from "vue";
import App from "./App.vue";
import "googly-eyes";
import "googly-goat-tee";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
