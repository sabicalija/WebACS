import Vue from "vue";
import WebACS from "./WebACS.vue";

import "webpack-jquery-ui";
import "webpack-jquery-ui/css";
import "./assets.js";
import "../public/assets/css/webACS.css";

// Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  render: h => h(WebACS)
}).$mount("#app");
