import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login"
import Photos from "../views/Photos"
import store from "../store"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/photos'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isAuth:false
    }
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
    meta: {
      isAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // console.log('to', to, from)
  if (to.meta.isAuth) {
    if (store.state.token) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
})
export default router;
