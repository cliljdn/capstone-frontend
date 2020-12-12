import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.prototype.$cookies = VueCookies;

Vue.use(VueCookies);
