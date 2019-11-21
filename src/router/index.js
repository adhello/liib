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
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/app1',
    name: 'app1',
    component: () => import('../views/app1.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
