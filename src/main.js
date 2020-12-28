import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import animated from "animate.css";
import "./assets/css/animate.css";
import "./assets/css/base.css"
import http from './http'

Vue.use(animated);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.prototype.$http = http

new Vue({
  render: h => h(App)
}).$mount("#app");
