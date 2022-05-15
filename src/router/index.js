import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../page/index.vue"),
  },
  {
    path: "/preview",
    name: "preview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../page/preview.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
