import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/record/:id/new",
    name: "Recorder",
    component: () => import(/* webpackChunkName: "recorder" */ "../views/Recorder.vue")
  },
  {
    path: "/record",
    name: "Scenes",
    component: () => import(/* webpackChunkName: "scenes" */ "../views/Scenes.vue")
  },
  {
    path: "/replay",
    name: "Replay",
    component: () => import(/* webpackChunkName: "replay" */ "../views/Replay.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
