import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/declarative-rendering',
    name: 'DeclarativeRendering',
    component: () => import('../views/gettingStarted/DeclarativeRendering.vue'),
  },
  {
    path: '/handling-user-input',
    name: 'HandlingUserInput',
    component: () => import('../views/gettingStarted/HandlingUserInput.vue'),
  },
  {
    path: '/conditionals-and-loops',
    name: 'ConditionalsAndLoops',
    component: () => import('../views/gettingStarted/ConditionalsAndLoops.vue'),
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: () => import('../views/appAndCompInstances/Lifecycle.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
