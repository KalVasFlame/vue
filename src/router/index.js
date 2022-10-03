import { createRouter, createWebHistory } from "vue-router"
import TheDashboard from "@/views/TheDashboard.vue"
import AccessDenied from "@/views/AccessDenied.vue"
import TheLogin from "@/views/TheLogin.vue"
import WorkCabinet from "@/views/WorkCabinet.vue"

const routes = [
  { path: "/:catchAll(.*)", redirect: '/login'},
  {
    path: "/login",
    name: "TheLogin",
    component: TheLogin,
  },
  {
    path: "/dashboard",
    name: "TheDashboard",
    component: TheDashboard,
  },
  {
    path: "/accessDenied",
    name: "AccessDenied",
    component: AccessDenied,
  },
  {
    path: "/workCabinet",
    name: "WorkCabinet",
    component: WorkCabinet,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
