import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/MainMenu.vue"),
  },
  {
    path: "/scanner",
    component: () => import("./views/ScannerView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("process.env.BASE_URL"),
  routes,
});

export default router;
