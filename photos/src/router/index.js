import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login"
import Photos from "../views/Photos"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/photos'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
