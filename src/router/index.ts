import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Comments from '../views/Comments.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Comments',
    component: Comments,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
