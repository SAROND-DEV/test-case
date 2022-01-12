import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "normalize.css";
import "./assets/scss/tailwind.scss";
import "./assets/scss/main.scss";

import "./utils/phoneinput.js";
import "./plugins/toast.js";
import "./plugins/vee-validate.js";

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
