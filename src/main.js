import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import animated from "animate.css";
import "./assets/css/animate.min.css";
import "./assets/css/base.css"

Vue.use(animated);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
