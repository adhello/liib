import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo.vue'),
  },
  {
    path: '/zm',
    name: 'zm',
    component: () => import('../views/zm.vue'),
  },
  {
    path: '/js',
    name: 'js',
    component: () => import('../views/js.vue'),
  },
  {
    path: '/rl',
    name: 'login',
    component: () => import('../views/rl.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
