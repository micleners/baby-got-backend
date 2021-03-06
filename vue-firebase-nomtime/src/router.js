import Vue from "vue";
import Router from "vue-router";
const MainView = () => import("@/views/MainView");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainView
    }
  ]
});
