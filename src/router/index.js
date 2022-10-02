import { createRouter, createWebHistory } from "vue-router"
import TheDashboard from "../views/TheDashboard.vue"
import AccessDenied from "../views/AccessDenied.vue"
import TheLogin from "../views/TheLogin.vue"
const routes = [
  // { path: "/:catchAll(.*)", redirect: '/foo'},
  {
    path: "/login",
    name: "TheLogin",
    component: TheLogin,
  },
  {
    path: "/dashboardddddddd",
    name: "TheDashboard",
    component: TheDashboard,
  },
  {
    path: "/accessDenied",
    name: "AccessDenied",
    component: AccessDenied,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
