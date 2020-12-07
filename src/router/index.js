import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Data",
    name: "Data",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Data.vue"),
  },
  {
    path: "/PartsData",
    name: "PartsData",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PartsData.vue"),
  },
  {
    path: "/Views",
    name: "Views",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Views.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
